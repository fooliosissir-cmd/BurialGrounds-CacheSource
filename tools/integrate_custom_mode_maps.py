#!/usr/bin/env python3
"""Relocate converted public custom maps into reserved Custom Mode source regions.

The converted imports use region-local object coordinates, so relocation only changes the region
label. Plane-0 implicit terrain heights are frozen against the original source coordinates before
the move so procedural noise cannot change the silhouette.
"""
from __future__ import annotations
import json, math
from pathlib import Path

SHAPES = {
    "terrain.json": "m",
    "locs.json": "l",
    "underwater_terrain.json": "um",
    "underwater_locs.json": "ul",
}

# (slug, source region, target region, role)
RESERVATIONS = [
    ("resource-dungeon-v1", "26_68", "79_200", "underground resource dungeon"),
    ("snowy-area-v1", "51_63", "74_206", "northern frozen expansion"),
    ("edgeville-v12", "48_54", "79_201", "small discoverable settlement"),
    ("edgeville-v11", "48_54", "79_202", "frontier settlement"),
    ("edgeville-remade", "48_54", "80_202", "later-game second city west"),
    ("edgeville-remade", "49_54", "81_202", "later-game second city east"),
    ("custom-manor", "48_47", "80_200", "haunted estate / side dungeon"),
    ("underground-castlewars", "250_200", "79_203", "buried military complex west"),
    ("underground-castlewars", "250_201", "79_204", "buried military complex east"),
    ("boss-raids-room-v11", "5_49", "79_205", "dedicated raid arena"),
    ("barrows-island", "59_51", "80_201", "Guardian Rematch Island"),
    ("ahoypk-zone", "40_69", "80_203", "reserve standalone activity zone"),
]

COSINE = [int(16384.0 * math.cos(i * 3.834951969714103e-4)) for i in range(16384)]

def i32(n: int) -> int:
    n &= 0xFFFFFFFF
    return n - 0x100000000 if n & 0x80000000 else n

def random_noise(x: int, y: int) -> int:
    n = i32(i32(y * 57) + x)
    n = i32(n ^ i32(n << 13))
    value = i32(i32(n * i32(i32(n * n) * 15731 + 789221)) + 1376312589) & 0x7FFFFFFF
    return (value >> 19) & 0xFF

def weighted(x: int, y: int) -> int:
    corners = random_noise(x-1,y-1)+random_noise(x+1,y-1)+random_noise(x-1,y+1)+random_noise(x+1,y+1)
    sides = random_noise(x-1,y)+random_noise(x+1,y)+random_noise(x,y-1)+random_noise(x,y+1)
    return corners // 16 + sides // 8 + random_noise(x,y) // 4

def interp(a: int, b: int, angle: int, freq: int) -> int:
    cosine = (65536 - COSINE[angle * 8192 // freq]) >> 1
    return ((65536 - cosine) * a >> 16) + (cosine * b >> 16)

def perlin(x: int, y: int, freq: int) -> int:
    ax, ay = int(x / freq), int(y / freq)
    rx, ry = x & (freq - 1), y & (freq - 1)
    north = interp(weighted(ax, ay), weighted(ax + 1, ay), rx, freq)
    south = interp(weighted(ax, ay + 1), weighted(ax + 1, ay + 1), rx, freq)
    return interp(north, south, ry, freq)

def tile_height(abs_x: int, abs_y: int) -> int:
    x, y = abs_x + 932731, abs_y + 556238
    height = (
        perlin(45365 + x, y + 91923, 4) - 128
        + ((perlin(x + 10294, 37821 + y, 2) - 128) >> 1)
        + ((perlin(x, y, 1) - 128) >> 2)
    )
    height = int(height * 0.3) + 35
    return max(10, min(60, height))

def set_height(token: str, height: int) -> str:
    parts = [] if token == "-" else token.split(",")
    for i, part in enumerate(parts):
        if part.startswith("h"):
            parts[i] = f"h{height}"
            return ",".join(parts)
    parts.append(f"h{height}")
    return ",".join(parts)

def normalize_plane0(doc: dict, source_region: str) -> None:
    if not doc.get("tiles") or not doc["tiles"][0]:
        return
    rx, ry = map(int, source_region.split("_"))
    for x, row_text in enumerate(doc["tiles"][0]):
        row = row_text.split()
        if len(row) != 64:
            raise ValueError(f"{source_region}: row {x} has {len(row)} tiles")
        for y, token in enumerate(row):
            raw = next((int(p[1:]) for p in token.split(",") if p.startswith("h")), None)
            if raw is None:
                effective = tile_height(rx * 64 + x, ry * 64 + y)
                row[y] = set_height(token, effective)
            # Explicit values are already position-independent and remain byte-faithful.
        doc["tiles"][0][x] = " ".join(row)

def jhash(text: str) -> int:
    h = 0
    for ch in text:
        h = i32(h * 31 + ord(ch))
    return h

def load(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))

def dump(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2) + "\n", encoding="utf-8")

def main() -> None:
    repo = Path(__file__).resolve().parents[1]
    maps = repo / "maps"
    index_path = maps / "index.json"
    index = load(index_path)
    existing_hashes = {meta.get("nameHash"): int(aid) for aid, meta in index["archives"].items()}
    next_id = max(map(int, index["archives"])) + 1

    status = []
    for slug, source, target, role in RESERVATIONS:
        src = repo / "imports" / "custom-maps" / slug / "maps" / source
        if not src.is_dir():
            raise FileNotFoundError(f"Missing converted source: {src}")
        written = []
        for filename, prefix in SHAPES.items():
            source_file = src / filename
            if not source_file.is_file():
                continue
            doc = load(source_file)
            if filename in ("terrain.json", "underwater_terrain.json"):
                normalize_plane0(doc, source)
            doc["region"] = target
            dump(maps / target / filename, doc)
            written.append(filename)

            name = f"{prefix}{target}"
            h = jhash(name)
            if h not in existing_hashes:
                index["archives"][str(next_id)] = {"version": 1, "compression": "gzip", "nameHash": h}
                existing_hashes[h] = next_id
                next_id += 1
        if "terrain.json" not in written or "locs.json" not in written:
            raise ValueError(f"{slug}/{source}: missing required terrain or locs")
        status.append((slug, source, target, role, written))

    dump(index_path, index)

    lines = [
        "# Custom map integration status",
        "",
        "Generated by `tools/integrate_custom_mode_maps.py`.",
        "",
        "Home Island V1.1 is integrated separately at **78_200** with 78_201..78_205 reserved as ocean buffer.",
        "",
        "| Import | Source | Reserved target | Files | Role |",
        "| --- | --- | --- | --- | --- |",
    ]
    for slug, source, target, role, written in status:
        lines.append(f"| {slug} | {source} | {target} | {', '.join(written)} | {role} |")
    lines += [
        "",
        "Barrows Island's target **80_201** is Guardian Rematch Island: only story-defeated Guardians may unlock there, and rematches never advance story progression.",
        "",
        "These files are source-region reservations. Player-facing routes, collision/visual validation, and Developer World verification remain separate gates.",
        "",
    ]
    (repo / "docs" / "custom-map-integration-status.md").write_text("\n".join(lines), encoding="utf-8")

if __name__ == "__main__":
    main()
