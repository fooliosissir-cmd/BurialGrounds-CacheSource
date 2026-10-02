#!/usr/bin/env python3
"""Regenerate the native Greyhaven world-map area from the 36 playable map regions."""
import collections
import json
from pathlib import Path
import struct

ROOT = Path(__file__).resolve().parents[1]

def build_area(source: Path) -> bytes:
    area = bytearray([0, 0])
    for rx in range(72, 78):
        for ry in range(200, 206):
            region = source / "maps" / f"{rx}_{ry}"
            terrain = json.loads((region / "terrain.json").read_text())["tiles"]
            tiles = [[row.split() for row in plane] for plane in terrain]
            if len(tiles) != 4 or not all(len(p) == 64 and all(len(r) == 64 for r in p) for p in tiles):
                raise ValueError(f"Unexpected terrain dimensions in {region}")

            objects = collections.defaultdict(list)
            for loc in json.loads((region / "locs.json").read_text())["locs"]:
                objects[loc["level"], loc["x"], loc["y"]].append(loc)

            area.extend([0, rx, ry])
            for x in range(64):
                for y in range(64):
                    layers = []
                    for plane in range(4):
                        underlay = overlay = shape = rotation = 0
                        for token in tiles[plane][x][y].split(","):
                            if token.startswith("u"):
                                underlay = int(token[1:])
                            elif token.startswith("o"):
                                overlay, shape, rotation = map(int, token[1:].split("/"))

                        locs = objects[plane, x, y]
                        if not (0 <= underlay <= 255 and 0 <= overlay <= 255 and len(locs) <= 255):
                            raise ValueError(f"Invalid world-map tile data in {region} at {x},{y},{plane}")

                        layer = bytearray([underlay, overlay, (rotation << 6) | shape, len(locs)])
                        for loc in locs:
                            ident = loc["id"]
                            if ident < 32767:
                                layer.extend(struct.pack(">H", ident))
                            else:
                                layer.extend(struct.pack(">I", ident | 0x80000000))
                            layer.append((loc["rotation"] << 6) | loc["shape"])
                        layers.append((layer, bool(underlay or overlay or locs)))

                    count = max([1] + [p + 1 for p, (_, occupied) in enumerate(layers) if occupied])
                    area.append(1 | ((count - 1) << 1) | 8 | 16)
                    for layer, _ in layers[:count]:
                        area.extend(layer)
    return bytes(area)

def main() -> None:
    target = ROOT / "worldmapdata" / "95" / "4.dat"
    data = build_area(ROOT)
    target.parent.mkdir(parents=True, exist_ok=True)
    if target.exists() and target.read_bytes() == data:
        print("Greyhaven world-map area already current.")
        return
    target.write_bytes(data)
    print(f"Updated {target.relative_to(ROOT)} ({len(data)} bytes).")

if __name__ == "__main__":
    main()
