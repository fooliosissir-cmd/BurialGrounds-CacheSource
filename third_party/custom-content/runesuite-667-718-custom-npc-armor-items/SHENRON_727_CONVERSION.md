# Super Shenron 727 conversion checkpoint

Status: private staging only. Do not merge into the authoritative 727 cache until the Developer World render/animation gate passes.

## Source
- Archive: RuneSuite 667/718 custom NPC/armor/item model release
- Source file: `Super Shenron/80972.dat`
- Source SHA-256: `91e30fbc6ae2fcb28562d1756f4eb00912155511a0df679c1c063b744b8f86f8`
- Source format: old RuneScape model layout (version 12 semantics)
- Geometry: 1,394 vertices / 2,630 faces / 0 texture triangles
- Vertex skin labels are present (1,394 entries; 22 distinct labels), so animation is possible if a compatible animation base is found.

## Conversion validation
The model was decoded with the same old-format semantics used by Burial Grounds' `ModelDecoder`:
- old-format vertex positions are upscaled by 4 on decode;
- face indices, face colours and vertex skin labels were preserved;
- the source uses no face alpha, face skin, render-type or texture-triangle sections;
- original vertex flags and face-index types are canonical/derivable.

A canonical old-format re-encode decodes back to the same geometry, colours, indices and vertex-skin assignments. The byte stream is 13 bytes shorter than the third-party source because that source used some non-minimal signed-smart encodings; this is a serialization difference, not a model-content difference.

Converted cache-source GLB:
- target model id: **80972**
- uncompressed GLB size: 49,604 bytes
- GLB SHA-256: `3fadc12bcaa6da4d67e1c2d0d64a73c1ee5e26700ea2b69dd13e7b480f733e74`
- staged compressed payload: `Super_Shenron_80972.glb.xz`
- XZ SHA-256: `60e5aa83b62b4971b175ad89539d4090371239d3a7d4cd965be1ee1239f8e1b7`
- XZ size: 12,752 bytes

The GLB follows the Burial Grounds `ModelGltf` layout: a single glTF primitive plus RuneScape metadata in `nodes[0].extras.rs`.

## Safe ids
- Model id **80972** was checked on both `dev` and `staging/runesuite-modelrelease`; `models/80972.glb` does not exist.
- NPC id **15662** was checked on both branches and is free.
- NPC 15661 already exists and NPC configs use 7 packed bits, so 15662 remains in existing NPC archive 122 (`15662 >> 7`) instead of creating a new archive.

## Animation gate
Do not hard-wire an animation set yet.
- The RuneSuite release explicitly says the Shadow/Fire Drakes use Roc animations.
- It does **not** specify an animation set for Super Shenron.
- KBD/dragon and Roc animation bases are candidates for a disposable render test only; skin-label compatibility must be observed before selecting the final BAS/sequences.

## Next install step
After the animation smoke test:
1. decompress this staged GLB to `models/80972.glb`;
2. add `"80972": {"compression": "gzip"}` to `models/index.json`;
3. register a `super_shenron` entry in `gamevals/model.json` and `namespace Model`;
4. add NPC 15662 as a Developer World-only definition referencing model 80972;
5. test idle/walk/attack/death on desktop, then Android;
6. only then promote the cache-source changes beyond private staging.
