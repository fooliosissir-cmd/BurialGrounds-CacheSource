# External boss model decode progress

Updated: 2026-10-02
Target: Burial Grounds / Darkan revision 727
Status: first private boss-model batch decoded; cache-pack verification still required before any production import.

## Source batch

The user-supplied `Runesuite_modelrelease.zip` was inspected from private Library storage. No bundled executable was run. The raw third-party model files are **not** committed to this repository because redistribution/provenance remains under review.

The RuneScape `.dat` candidates below were decoded using the same old/new model-layout rules implemented by Darkan's `ModelDecoder`. Geometry, face indices, colours, skins, texture metadata and footer fields were validated, then exported into:

- a Darkan cache-source-compatible GLB staging form;
- a normal preview GLB with visible face colours;
- a PNG preview render;
- a machine-readable private decode report.

Those generated binaries remain in the user's private Library staging pack rather than this public source repository.

## Decoded RuneScape boss candidates

| Candidate | Source format | Version | Vertices | Faces | Skins | Texture metadata | Decode validation |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| Super Shenron | old RS model | 12 | 1,394 | 2,630 | vertex | none | clean |
| Solak | new RS model | 15 | 6,397 | 11,737 | vertex + face | materials + 1 texture triangle | clean |
| Fire Drake — Big | new RS model | 17 | 1,387 | 1,995 | vertex + face | material ids | clean |
| Fire Drake — Mid | new RS model | 17 | 1,154 | 1,817 | vertex + face | material ids | clean |
| Fire Drake — Small | new RS model | 17 | 1,043 | 1,695 | vertex + face | material ids | clean |
| Shadow Drake — Big | new RS model | 17 | 2,603 | 4,129 | vertex + face | material ids | clean |
| Shadow Drake — Mid | new RS model | 17 | 2,141 | 3,526 | vertex + face | material ids | clean |
| Shadow Drake — Small | new RS model | 17 | 1,330 | 2,192 | vertex + face | material ids | clean |

All eight models decoded with no out-of-range triangle indices, no truncated sections, and no empty geometry.

### Source hashes

- Super Shenron `80972.dat`: `91e30fbc6ae2fcb28562d1756f4eb00912155511a0df679c1c063b744b8f86f8`
- Solak `solak.dat`: `b9075c23e6a1b8f034fa26a98237292d30510f770a5fd79a0861a07586c299ae`
- Fire Drake Big: `3af596d3e869f066889b34776d711cfc3fad586f47ef26fbd42ad142dccb97d5`
- Fire Drake Mid: `f7e9e34fc9eae556514f9d16171e8666e3d2774dd2dc8abf14c73cb6922fbe2c`
- Fire Drake Small: `a83b78cdee9127469e4af17c7c8bdcfaced48e5bd6cadcdbfdd21e0e998b050d`
- Shadow Drake Big: `aa6620006a4e1e09e094e6245ada5e55f771804cafdca8c54d96cf20e87a46b5`
- Shadow Drake Mid: `1c698dea0a7332619aa10a3f6e042276df1737de2aaa585c2e1f1ead9061b327`
- Shadow Drake Small: `88b06fcd85235ca49521a764df301f5cd53b1e58d3ffa3bc610668da90060279`

## New_Boss source mesh

`New_Boss.mqo` also parses successfully as a Metasequoia source model:

- 266 materials;
- three mesh/object sections;
- 16,719 listed vertices total;
- 31,953 triangulated faces total;
- SHA-256 `1d6b367031d02ea06286b9e89fd2a59bbae37a91375e7622d2313adb24c84801`.

A preview GLB was produced. This one is **not yet a RuneScape-ready model**: its MQO material/skin structure still needs translation into a 727 model definition and an animation/bone plan.

## Animation/dependency status

- Shadow Drake and Fire Drake are reported by the release as using Roc animations. Their vertex/face skin data survived decoding, so animation mapping is a concrete next step rather than a geometry rebuild.
- Super Shenron has vertex skin data but no animation mapping has yet been established.
- Solak has both vertex and face skin data. Its animation sequence/config dependencies still need to be identified.
- The Drake material IDs and Solak's texture dependency need a cache-level dependency check before packing into 727.

## Acceptance pipeline from here

A candidate is not called production-ready until it passes all of these gates:

1. model GLB reads through Darkan's `ModelGltf`;
2. `ModelEncoder` packs it into a disposable 727 cache without corruption;
3. NPC config and animation/render-animation dependencies are assigned to free 727 IDs;
4. the model renders and animates in Developer World;
5. desktop and Android clients both render it correctly;
6. provenance/reuse status is recorded before any raw third-party bytes are committed or distributed.

The current eight RS models are therefore **decoded and staged**, not yet production-approved bosses. This lets us keep preparing the whole candidate pool before choosing which boss belongs in the game.


## Additional definition-only boss pool

A separate previously uploaded custom-client definition corpus was also normalized into a private candidate queue.

- 509 NPC definitions expose an `Attack` option;
- 264 of those already name one or more explicit custom model IDs;
- the queue preserves the NPC id, display name, combat-level field, size/scale fields, model IDs, animation fields, copy-from relationships, and source class;
- examples with explicit models include Solak, Araxxor, Baphomet, Golden Dragon, King Kong, Godzilla, Krampus, Blue Eyes White Dragon, Red Eyes Black Dragon, multiple strykewyrms, and many custom raid/event enemies.

This is **definition decryption/inventory only**. Their foreign model archive bytes are not present in the current private staging inputs, so these 264 explicit-model candidates cannot yet be converted into 727 GLBs. The private staging pack contains both JSON and CSV queues so a future cache/model dump can be matched against the exact required model IDs immediately.
