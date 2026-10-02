#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
import struct
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RAW_ZIP = ROOT / "third_party/custom-content/runesuite-667-718-custom-npc-armor-items/raw/Super_Shenron.zip"
MODEL_ID = 73506
NPC_ID = 15662
SOURCE_SHA256 = "91e30fbc6ae2fcb28562d1756f4eb00912155511a0df679c1c063b744b8f86f8"


class Reader:
    def __init__(self, data: bytes, position: int = 0):
        self.data = data
        self.position = position

    def u8(self) -> int:
        value = self.data[self.position]
        self.position += 1
        return value

    def u16(self) -> int:
        value = (self.data[self.position] << 8) | self.data[self.position + 1]
        self.position += 2
        return value

    def smart(self) -> int:
        first = self.u8()
        if first < 128:
            return first - 64
        return ((first << 8) | self.u8()) - 49152


def decode_old_model(data: bytes) -> dict:
    if data[-2:] == b"\xff\xff":
        raise RuntimeError("Super Shenron unexpectedly changed to new model format")
    if len(data) < 18:
        raise RuntimeError("Super Shenron model is truncated")

    footer = Reader(data, len(data) - 18)
    vertex_count = footer.u16()
    face_count = footer.u16()
    texture_count = footer.u8()
    has_render_types = footer.u8()
    model_priority = footer.u8()
    has_alphas = footer.u8()
    has_face_skins = footer.u8()
    has_vertex_skins = footer.u8()
    x_length = footer.u16()
    y_length = footer.u16()
    z_length = footer.u16()
    face_index_length = footer.u16()

    offset = 0
    vertex_flags_offset = offset
    offset += vertex_count
    face_index_types_offset = offset
    offset += face_count
    face_priorities_offset = offset
    if model_priority == 255:
        offset += face_count
    face_skin_offset = offset
    if has_face_skins == 1:
        offset += face_count
    face_render_types_offset = offset
    if has_render_types == 1:
        offset += face_count
    vertex_skin_offset = offset
    if has_vertex_skins == 1:
        offset += vertex_count
    face_alpha_offset = offset
    if has_alphas == 1:
        offset += face_count
    face_indices_offset = offset
    offset += face_index_length
    face_colours_offset = offset
    offset += face_count * 2
    texture_triangles_offset = offset
    offset += texture_count * 6
    vertex_x_offset = offset
    offset += x_length
    vertex_y_offset = offset
    offset += y_length
    vertex_z_offset = offset
    offset += z_length

    if offset != len(data) - 18:
        raise RuntimeError(f"Model sections end at {offset}, footer starts at {len(data) - 18}")

    flags_reader = Reader(data, vertex_flags_offset)
    vertex_flags = [flags_reader.u8() for _ in range(vertex_count)]

    x_reader = Reader(data, vertex_x_offset)
    y_reader = Reader(data, vertex_y_offset)
    z_reader = Reader(data, vertex_z_offset)
    vertex_x, vertex_y, vertex_z = [], [], []
    x = y = z = 0
    for flags in vertex_flags:
        if flags & 1:
            x += x_reader.smart()
        if flags & 2:
            y += y_reader.smart()
        if flags & 4:
            z += z_reader.smart()
        # The 727 client treats the old layout as version 12 and upscales it by four.
        vertex_x.append(x << 2)
        vertex_y.append(y << 2)
        vertex_z.append(z << 2)

    vertex_skins = None
    if has_vertex_skins == 1:
        skin_reader = Reader(data, vertex_skin_offset)
        vertex_skins = [skin_reader.u8() for _ in range(vertex_count)]

    type_reader = Reader(data, face_index_types_offset)
    face_index_types = [type_reader.u8() for _ in range(face_count)]
    index_reader = Reader(data, face_indices_offset)
    face_a, face_b, face_c = [], [], []
    a = b = c = last = 0
    for face_type in face_index_types:
        if face_type == 1:
            a = index_reader.smart() + last
            last = a
            b = index_reader.smart() + last
            last = b
            c = index_reader.smart() + last
            last = c
        elif face_type == 2:
            b = c
            c = index_reader.smart() + last
            last = c
        elif face_type == 3:
            a = c
            c = index_reader.smart() + last
            last = c
        elif face_type == 4:
            a, b = b, a
            c = index_reader.smart() + last
            last = c
        else:
            raise RuntimeError(f"Unsupported face index type {face_type}")
        face_a.append(a)
        face_b.append(b)
        face_c.append(c)

    all_indices = face_a + face_b + face_c
    if min(all_indices) < 0 or max(all_indices) >= vertex_count:
        raise RuntimeError("Decoded face index is outside the vertex array")

    colour_reader = Reader(data, face_colours_offset)
    colours = [colour_reader.u16() for _ in range(face_count)]

    priorities = None
    if model_priority == 255:
        r = Reader(data, face_priorities_offset)
        priorities = [r.u8() for _ in range(face_count)]

    alphas = None
    if has_alphas == 1:
        r = Reader(data, face_alpha_offset)
        alphas = [r.u8() for _ in range(face_count)]

    face_skins = None
    if has_face_skins == 1:
        r = Reader(data, face_skin_offset)
        face_skins = [r.u8() for _ in range(face_count)]

    render_types = None
    if has_render_types == 1:
        r = Reader(data, face_render_types_offset)
        render_types = [r.u8() for _ in range(face_count)]

    texture_triangles = None
    if texture_count:
        r = Reader(data, texture_triangles_offset)
        texture_triangles = [[r.u16(), r.u16(), r.u16()] for _ in range(texture_count)]

    return {
        "vertex_count": vertex_count,
        "face_count": face_count,
        "texture_count": texture_count,
        "vertex_x": vertex_x,
        "vertex_y": vertex_y,
        "vertex_z": vertex_z,
        "face_a": face_a,
        "face_b": face_b,
        "face_c": face_c,
        "colours": colours,
        "render_types": render_types,
        "priorities": priorities,
        "alphas": alphas,
        "face_skins": face_skins,
        "vertex_skins": vertex_skins,
        "texture_triangles": texture_triangles,
        "footer": {
            "flags": has_render_types,
            "priority": model_priority,
            "alphas": has_alphas,
            "faceSkins": has_face_skins,
            "materials": 0,
            "vertexSkins": has_vertex_skins,
        },
    }


def make_glb(model: dict) -> bytes:
    vertices = model["vertex_count"]
    faces = model["face_count"]
    name = f"model_{MODEL_ID}"

    rs = {
        "id": MODEL_ID,
        "format": "old",
        "version": 12,
        "footer": model["footer"],
        "colours": model["colours"],
    }
    optional = {
        "renderTypes": model["render_types"],
        "priorities": model["priorities"],
        "alphas": model["alphas"],
        "faceSkins": model["face_skins"],
        "vertexSkins": model["vertex_skins"],
    }
    for key, value in optional.items():
        if value is not None:
            rs[key] = value

    if model["texture_count"]:
        rs["textureMappings"] = [0] * model["texture_count"]
        rs["textureTriangles"] = model["texture_triangles"]

    position_bytes = b"".join(
        struct.pack("<fff", float(x), float(y), float(z))
        for x, y, z in zip(model["vertex_x"], model["vertex_y"], model["vertex_z"])
    )
    indices = []
    for a, b, c in zip(model["face_a"], model["face_b"], model["face_c"]):
        indices.extend((a, b, c))
    if max(indices) > 0xFFFF:
        index_type = 5125
        index_bytes = b"".join(struct.pack("<I", value) for value in indices)
    else:
        index_type = 5123
        index_bytes = b"".join(struct.pack("<H", value) for value in indices)

    binary = position_bytes + index_bytes
    asset = {
        "asset": {"generator": "darkan cache-source", "version": "2.0"},
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes": [{"mesh": 0, "name": name, "extras": {"rs": rs}}],
        "meshes": [{
            "name": name,
            "primitives": [{"attributes": {"POSITION": 0}, "indices": 1, "mode": 4}],
        }],
        "accessors": [
            {
                "bufferView": 0,
                "componentType": 5126,
                "count": vertices,
                "type": "VEC3",
                "min": [min(model["vertex_x"]), min(model["vertex_y"]), min(model["vertex_z"])],
                "max": [max(model["vertex_x"]), max(model["vertex_y"]), max(model["vertex_z"])],
            },
            {
                "bufferView": 1,
                "componentType": index_type,
                "count": faces * 3,
                "type": "SCALAR",
            },
        ],
        "bufferViews": [
            {"buffer": 0, "byteLength": len(position_bytes), "byteOffset": 0, "target": 34962},
            {
                "buffer": 0,
                "byteLength": len(index_bytes),
                "byteOffset": len(position_bytes),
                "target": 34963,
            },
        ],
        "buffers": [{"byteLength": len(binary)}],
    }

    json_bytes = json.dumps(asset, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
    json_bytes += b" " * ((4 - len(json_bytes) % 4) % 4)
    binary += b"\x00" * ((4 - len(binary) % 4) % 4)
    total = 12 + 8 + len(json_bytes) + 8 + len(binary)
    return (
        struct.pack("<III", 0x46546C67, 2, total)
        + struct.pack("<II", len(json_bytes), 0x4E4F534A)
        + json_bytes
        + struct.pack("<II", len(binary), 0x004E4942)
        + binary
    )


def insert_before_object_close(path: Path, line: str, expected_last: str) -> None:
    text = path.read_text(encoding="utf-8")
    if line.strip() in text:
        return
    needle = expected_last + "\n  }\n}\n"
    if needle not in text:
        raise RuntimeError(f"Expected tail not found in {path}")
    replacement = expected_last + ",\n" + line + "\n  }\n}\n"
    path.write_text(text.replace(needle, replacement, 1), encoding="utf-8")


def patch_gameval(path: Path, old_count: int, new_count: int, old_named: int, new_named: int, last_line: str, new_line: str) -> None:
    text = path.read_text(encoding="utf-8")
    if new_line.strip() in text:
        return
    text = text.replace(f'\"cache_ids\": {old_count}', f'\"cache_ids\": {new_count}', 1)
    text = text.replace(f'\"named\": {old_named}', f'\"named\": {new_named}', 1)
    needle = last_line + "\n  }\n}\n"
    if needle not in text:
        raise RuntimeError(f"Catalog tail not found in {path}")
    text = text.replace(needle, last_line + ",\n" + new_line + "\n  }\n}\n", 1)
    path.write_text(text, encoding="utf-8")


def patch_declarations(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    if "/** npc 15662 */ const super_shenron: number;" not in text:
        text = text.replace(
            "/** Revision-727 npc ids by Jagex dev-name (15662 named of 15662). */",
            "/** Revision-727 npc ids by Jagex dev-name (15663 named of 15663). */",
            1,
        )
        text = text.replace(
            "    /** npc 15661 */ const npc_15661: number;\n}",
            "    /** npc 15661 */ const npc_15661: number;\n"
            "    /** npc 15662 */ const super_shenron: number;\n}",
            1,
        )
    if "/** model 73506 */ const super_shenron: number;" not in text:
        text = text.replace(
            "/** Revision-727 model ids by Jagex dev-name (73506 named of 73506). */",
            "/** Revision-727 model ids by Jagex dev-name (73507 named of 73507). */",
            1,
        )
        text = text.replace(
            "    /** model 73505 */ const njloot_2013_t4: number;\n}",
            "    /** model 73505 */ const njloot_2013_t4: number;\n"
            "    /** model 73506 */ const super_shenron: number;\n}",
            1,
        )
    path.write_text(text, encoding="utf-8")


def write_npc(path: Path) -> None:
    npc = {
        "id": NPC_ID,
        "modelIds": [MODEL_ID],
        "name": "Super Shenron",
        "size": 8,
        "options": [None, None, None, None, None, "Examine"],
        "drawMinimapDot": True,
        "combat": 0,
        "scaleXY": 128,
        "scaleZ": 128,
        "priorityRender": True,
        "lightModifier": 25,
        "shadowModifier": 75,
        "headIcon": -1,
        "rotation": 32,
        "varbit": -1,
        "varp": -1,
        "clickable": True,
        "slowWalk": True,
        "animateIdle": False,
        "primaryShadowColour": 0,
        "secondaryShadowColour": 0,
        "primaryShadowModifier": -96,
        "secondaryShadowModifier": -16,
        "walkMask": 1,
        "hitbarGraphic": -1,
        "height": -1,
        "respawnDirection": 4,
        "renderEmote": -1,
        "idleSound": -1,
        "crawlSound": -1,
        "walkSound": -1,
        "runSound": -1,
        "soundDistance": 0,
        "primaryCursorOp": -1,
        "primaryCursor": -1,
        "secondaryCursorOp": -1,
        "secondaryCursor": -1,
        "attackCursor": -1,
        "armyIcon": -1,
        "graphicId": -1,
        "ambientSoundVolume": 255,
        "visiblePriority": False,
        "mapFunction": -1,
        "invisiblePriority": False,
        "hue": 0,
        "saturation": 0,
        "lightness": 0,
        "opacity": 0,
        "mainOptionIndex": -1,
        "aBoolean2883": False,
        "anInt2803": -1,
        "anInt2844": 256,
        "anInt2852": 256,
        "anInt2831": 0,
        "anInt2862": 0,
        "stringId": "",
        "moveSpeed": -1,
        "rawOptions": [None] * 10,
    }
    path.write_text(json.dumps(npc, indent=2, separators=(",", ": ")) + "\n", encoding="utf-8")


def main() -> None:
    if not RAW_ZIP.exists():
        raise RuntimeError(f"Missing raw source archive: {RAW_ZIP}")

    with zipfile.ZipFile(RAW_ZIP) as archive:
        candidates = [name for name in archive.namelist() if name.endswith("80972.dat")]
        if len(candidates) != 1:
            raise RuntimeError(f"Expected one 80972.dat, found {candidates}")
        source = archive.read(candidates[0])

    source_hash = hashlib.sha256(source).hexdigest()
    if source_hash != SOURCE_SHA256:
        raise RuntimeError(f"Source SHA-256 changed: {source_hash}")

    model = decode_old_model(source)
    if (model["vertex_count"], model["face_count"], model["texture_count"]) != (1394, 2630, 0):
        raise RuntimeError("Super Shenron geometry counts changed")

    glb = make_glb(model)
    model_path = ROOT / f"models/{MODEL_ID}.glb"
    model_path.write_bytes(glb)

    insert_before_object_close(
        ROOT / "models/index.json",
        '    "73506": {"compression": "gzip"}',
        '    "73505": {"compression": "gzip"}',
    )

    write_npc(ROOT / f"config_npc/{NPC_ID}.json")

    patch_gameval(
        ROOT / "gamevals/model.json",
        73506, 73507, 196, 197,
        '    "73505": "njloot_2013_t4"',
        '    "73506": "super_shenron"',
    )
    patch_gameval(
        ROOT / "gamevals/npc.json",
        15662, 15663, 12965, 12966,
        '    "15661": "npc_15661"',
        '    "15662": "super_shenron"',
    )
    patch_declarations(ROOT / "clientscripts/gamevals.d.ts")

    print(
        "Super Shenron staged:",
        f"model={MODEL_ID}",
        f"npc={NPC_ID}",
        f"glb_sha256={hashlib.sha256(glb).hexdigest()}",
        f"vertices={model['vertex_count']}",
        f"faces={model['face_count']}",
        f"vertex_skin_groups={len(set(model['vertex_skins'] or []))}",
    )


if __name__ == "__main__":
    main()
