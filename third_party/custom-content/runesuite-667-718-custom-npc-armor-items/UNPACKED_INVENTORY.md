# RuneSuite 667/718 Model Release — Unpacked Inventory

Inventory date: 2026-10-02  
Target: Burial Grounds / Darkan revision 727  
Staging branch: `staging/runesuite-modelrelease`

## Archive receipt

- Source upload: `Runesuite_modelrelease.zip`
- ZIP size: 1,285,127 bytes
- ZIP SHA-256: `ce96fc03a19ac1061464df36a404fbddd075ba4b7357aa075711852b1e442258`
- Original files: 40
- Unpacked payload: 4,575,477 bytes
- RuneScape model DAT files: 37 (33 unique payloads)
- Editable source model: 1 Metasequoia `.mqo`
- Bundled Windows tool: `Vorkath Armour/DatMaker.exe` — **not executed**

## High-value findings

- **Super Shenron:** `Super Shenron/80972.dat` is a valid old-format RuneScape model: 1,394 vertices, 2,630 faces, 0 texture triangles. The filename strongly indicates source model ID 80972; a new free 727 model ID should be assigned during import rather than assuming 80972 is free.
- **Large custom raid boss:** `New_Boss.mqo` is an editable Metasequoia source model, not a placeholder. It declares 266 materials and three mesh objects (`Model`, `PRI:`, `VSKIN1:`), each with 5,573 vertices and 10,651 triangular faces. The main mesh has no external texture-file references.
- **Solak:** `ValkandSolak/solak.dat` is new-format model version 15 with 6,397 vertices, 11,737 faces and 1 texture triangle.
- **Valkyrie set:** 11 armor/wing models; new-format model version 19.
- **Shadow/Fire Drakes:** six size variants. All are new-format version 17. Release metadata says these use Roc animations; the ZIP itself contains no animation files.
- **Vorkath armor:** drop/wear models for helm, chest, legs, gloves and boots. These are old-format models. Several `wear2` files are exact duplicates of their corresponding payloads.
- **Bow of the Last Guardian:** drop, wield and textured-wield variants. The textured wield model is new-format and declares 2 texture triangles; the two untextured models are old-format.

## Asset groups

### Super Shenron

| File | Format | Vertices | Faces | Texture faces | Size | SHA-256 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `Super Shenron/80972.dat` | old | 1,394 | 2,630 | 0 | 22,550 B | `91e30fbc6ae2fcb28562d1756f4eb00912155511a0df679c1c063b744b8f86f8` |

### Shadow & fire Drake

| File | Format | Vertices | Faces | Texture faces | Size | SHA-256 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `Shadow & fire Drake/Shadow & fire Drake/Fire Drake Big.dat` | new v17 | 1,387 | 1,995 | 0 | 28,187 B | `3af596d3e869f066889b34776d711cfc3fad586f47ef26fbd42ad142dccb97d5` |
| `Shadow & fire Drake/Shadow & fire Drake/Fire Drake Mid.dat` | new v17 | 1,154 | 1,817 | 0 | 24,779 B | `f7e9e34fc9eae556514f9d16171e8666e3d2774dd2dc8abf14c73cb6922fbe2c` |
| `Shadow & fire Drake/Shadow & fire Drake/Fire Drake Small.dat` | new v17 | 1,043 | 1,695 | 0 | 22,533 B | `a83b78cdee9127469e4af17c7c8bdcfaced48e5bd6cadcdbfdd21e0e998b050d` |
| `Shadow & fire Drake/Shadow & fire Drake/Shadow Drake Big.dat` | new v17 | 2,603 | 4,129 | 0 | 56,034 B | `aa6620006a4e1e09e094e6245ada5e55f771804cafdca8c54d96cf20e87a46b5` |
| `Shadow & fire Drake/Shadow & fire Drake/Shadow Drake Mid.dat` | new v17 | 2,141 | 3,526 | 0 | 47,003 B | `1c698dea0a7332619aa10a3f6e042276df1737de2aaa585c2e1f1ead9061b327` |
| `Shadow & fire Drake/Shadow & fire Drake/Shadow Drake Small.dat` | new v17 | 1,330 | 2,192 | 0 | 29,010 B | `88b06fcd85235ca49521a764df301f5cd53b1e58d3ffa3bc610668da90060279` |

### ValkandSolak

| File | Format | Vertices | Faces | Texture faces | Size | SHA-256 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `ValkandSolak/solak.dat` | new v15 | 6,397 | 11,737 | 1 | 129,666 B | `b9075c23e6a1b8f034fa26a98237292d30510f770a5fd79a0861a07586c299ae` |
| `ValkandSolak/valk body drop.dat` | new v19 | 1,756 | 2,896 | 4 | 35,819 B | `c6411085db986ac479db7907df81ea585f77d9214615d5035f862389688daad5` |
| `ValkandSolak/valk boots wear and drop.dat` | new v19 | 96 | 180 | 3 | 2,024 B | `eba73fc64dba0ad6329702095babe4a9dc21ccf2a1c6d6f0f594f98a8803629c` |
| `ValkandSolak/valk gloves drop.dat` | new v19 | 108 | 204 | 2 | 2,285 B | `90a844bec557f1d983fd38ae6bfee527e65790bad6cbc747544c48f7b757576f` |
| `ValkandSolak/valk gloves wear.dat` | new v19 | 108 | 204 | 2 | 2,274 B | `f49284d93166bf7cc4bb36c05fc246e8d007a1a77ac2535989baed29535c5223` |
| `ValkandSolak/valk head drop.dat` | new v19 | 808 | 1,310 | 4 | 14,915 B | `d4f064e59c87b886d8b2d512e5679a606f14c76ca48a36cf596da003aa5167c7` |
| `ValkandSolak/valk legs drop.dat` | new v19 | 950 | 1,641 | 4 | 18,369 B | `8b1de9f863dbc169043de02d4691b3482feff26361b7e6348d469a35ec7a2e22` |
| `ValkandSolak/valk male body.dat` | new v19 | 1,756 | 2,896 | 4 | 35,732 B | `e2d567a26b94f4f438deabf45d57e106c18da60a7bfc5b5986ab745295ae05f1` |
| `ValkandSolak/valk male head.dat` | new v19 | 808 | 1,310 | 4 | 14,857 B | `621df0869e4e9d09ccf08405e3ced450b2c8afa3a08d387678e443ad29d5260b` |
| `ValkandSolak/valk male legs.dat` | new v19 | 950 | 1,641 | 4 | 18,341 B | `c7b4f0ed49e8b0a505bbfb1f529a480cb701e97179547131a387d873b012f5dc` |
| `ValkandSolak/valk wings drop.dat` | new v19 | 862 | 1,558 | 3 | 17,300 B | `7a59b105c11e3d6fb2b4ff1b115818a2fda4d7b2503a9cd371b30ad8763d5f37` |
| `ValkandSolak/valk wings wear.dat` | new v19 | 862 | 1,558 | 3 | 17,273 B | `69023c85378c2b7012e782d6aade1399742cda23b5700c3a44e7886b8c4dabcd` |

### Vorkath Armour

| File | Format | Vertices | Faces | Texture faces | Size | SHA-256 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `Vorkath Armour/Chest/drop.dat` | old | 555 | 1,008 | 0 | 6,492 B | `f82a9ed36405fa42cb80065f0a690130e858457fe2f662894d168ff7bf62465a` |
| `Vorkath Armour/Chest/wear.dat` | old | 555 | 1,008 | 0 | 8,047 B | `ebceef79131d9541391ca3723d4ec8060577b88ff02744321c5b3e43d9060011` |
| `Vorkath Armour/Chest/wear2.dat` | old | 555 | 1,008 | 0 | 8,047 B | `ebceef79131d9541391ca3723d4ec8060577b88ff02744321c5b3e43d9060011` |
| `Vorkath Armour/Gloves/drop.dat` | old | 143 | 200 | 0 | 1,299 B | `c7bee29f2e0046048124abbfc176f27fa443cd257e4ed15f87cf00d91f0c8642` |
| `Vorkath Armour/Gloves/wear.dat` | old | 56 | 92 | 0 | 680 B | `1cf5f62dad7eeddc3099547e197b180f4f0da5b5919328bd3d2f6d6213cb379b` |
| `Vorkath Armour/Gloves/wear2.dat` | old | 56 | 92 | 0 | 680 B | `1cf5f62dad7eeddc3099547e197b180f4f0da5b5919328bd3d2f6d6213cb379b` |
| `Vorkath Armour/Helm/drop.dat` | old | 327 | 625 | 0 | 3,897 B | `caa1fab4c13a43eb4b09e8373646c8c1d418bc4257006c0a978453c096493898` |
| `Vorkath Armour/Helm/wear.dat` | old | 335 | 633 | 0 | 4,941 B | `00f043602ebd8d8abcdb96c8a6987bdd30f850f65f309a467c2b76b445730710` |
| `Vorkath Armour/Helm/wear2.dat` | old | 335 | 633 | 0 | 4,941 B | `35c30fd1b01fb685eb6c671caac04d6456d4a0be3c177b5f7e2f9ff66c735613` |
| `Vorkath Armour/Legs/drop.dat` | old | 602 | 1,044 | 0 | 6,596 B | `71f7df474142db06324a3c126060d3a52cda60001c09d5f879261d1c48db8a2e` |
| `Vorkath Armour/Legs/wear.dat` | old | 602 | 1,044 | 0 | 8,240 B | `28d2f32dab9c2095fe891d3be575d7f78bd981cd63cf29c43e634a88917c9ac6` |
| `Vorkath Armour/Legs/wear2.dat` | old | 602 | 1,044 | 0 | 8,240 B | `28d2f32dab9c2095fe891d3be575d7f78bd981cd63cf29c43e634a88917c9ac6` |
| `Vorkath Armour/boots/drop.dat` | old | 154 | 296 | 0 | 2,228 B | `f3982347f86d936974fd0b1144297c2220256f94767926e72f4b146be41f5499` |
| `Vorkath Armour/boots/wear.dat` | old | 154 | 296 | 0 | 1,776 B | `26036c5a72795123202d11e4a6a5fa2fe844e444c86e2336f337af5752349fc2` |
| `Vorkath Armour/boots/wear2.dat` | old | 154 | 296 | 0 | 2,228 B | `f3982347f86d936974fd0b1144297c2220256f94767926e72f4b146be41f5499` |
| `Vorkath Armour/settings.dat` | settings/non-model | — | — | — | 79 B | `5becb4743afb9adbf91b706ecb971c219954e5614ce62f66a8b7efc333b0059e` |

### bolg

| File | Format | Vertices | Faces | Texture faces | Size | SHA-256 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| `bolg/BOTLG_Dropb.dat` | old | 1,195 | 2,248 | 0 | 16,414 B | `11ae2355e6695b985ca1b5ff8af4c48965bec9fb7eec62847f3410aa5f480e64` |
| `bolg/BOTLG_Wieldb.dat` | old | 1,195 | 2,248 | 0 | 16,339 B | `a64d910d52a9aab2d0e1fad092adc0f279d943212530c14c1915ba469e1e533b` |
| `bolg/Textured_BOTLG_Wield.dat` | new | 1,195 | 2,248 | 2 | 23,106 B | `1d5d682f31b53c0d25e1133d4eae2683005867eff5d6d70b1cadc6cf54cdf14f` |

### New_Boss.mqo

- Size: 3,261,504 bytes
- SHA-256: `1d6b367031d02ea06286b9e89fd2a59bbae37a91375e7622d2313adb24c84801`
- Declared materials: 266
- Main mesh bounding box: X -146.2667…146.3550, Y -1.8971…417.1538, Z -72.3836…72.0437
- External texture references: 0
- Objects:
  - `Model` — 5,573 vertices / 10,651 triangular faces
  - `PRI:` — 5,573 vertices / 10,651 triangular faces
  - `VSKIN1:` — 5,573 vertices / 10,651 triangular faces

## Exact duplicate model payloads

- `ebceef79131d9541391ca3723d4ec8060577b88ff02744321c5b3e43d9060011`
  - `Vorkath Armour/Chest/wear.dat`
  - `Vorkath Armour/Chest/wear2.dat`
- `1cf5f62dad7eeddc3099547e197b180f4f0da5b5919328bd3d2f6d6213cb379b`
  - `Vorkath Armour/Gloves/wear.dat`
  - `Vorkath Armour/Gloves/wear2.dat`
- `28d2f32dab9c2095fe891d3be575d7f78bd981cd63cf29c43e634a88917c9ac6`
  - `Vorkath Armour/Legs/wear.dat`
  - `Vorkath Armour/Legs/wear2.dat`
- `f3982347f86d936974fd0b1144297c2220256f94767926e72f4b146be41f5499`
  - `Vorkath Armour/boots/drop.dat`
  - `Vorkath Armour/boots/wear2.dat`

## Dependency gaps found in this ZIP

- No animation archives/sequences are included. Drake animation linkage must come from the release notes/source definitions (reported as Roc animations) or another package.
- No NPC/item configuration definitions are included for Shenron, Solak, the drakes, or Vorkath armor.
- No standalone texture files are included. Some new-format models encode texture-face references, so the referenced material/texture IDs must be checked against the 727 cache during conversion.
- `New_Boss.mqo` has material colors in the MQO itself and no external image texture paths.

## Import status

Nothing in this pack has been written into the authoritative 727 cache yet. The next safe step is to assign unused 727 model/config IDs, convert one asset at a time in a disposable Developer World cache, and verify desktop + Android rendering before merge.
