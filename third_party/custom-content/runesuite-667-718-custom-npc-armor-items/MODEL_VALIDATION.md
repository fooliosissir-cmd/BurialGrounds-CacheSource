# RuneSuite model geometry validation

Validation date: 2026-10-02  
Source: `Runesuite_modelrelease.zip`  
Target: Burial Grounds / Darkan 727

## Result

All **37 RuneScape model DAT files** in the uploaded pack were decoded structurally without an error. Every decoded triangle index stayed inside the model's vertex range; no model had a negative or out-of-range face index.

The test decoded vertex delta streams and triangle-index streams rather than only reading footer counts, so this is a stronger integrity check than the initial archive inventory.

## Important models

| Asset | Format | Vertices | Faces | Decoded index range | Decoded coordinate bounds (X / Y / Z) |
| --- | --- | ---: | ---: | --- | --- |
| Super Shenron `80972.dat` | old | 1,394 | 2,630 | 0–1,393 | -503..503 / -332..-23 / -294..606 |
| Solak | new v15 | 6,397 | 11,737 | 0–6,396 | -513..513 / -760..29 / -183..226 |
| Fire Drake Big | new v17 | 1,387 | 1,995 | 0–1,386 | -1363..1363 / -447..3 / -612..777 |
| Shadow Drake Big | new v17 | 2,603 | 4,129 | 0–2,602 | -1363..1363 / -527..3 / -694..777 |
| BOTLG textured wield | new | 1,195 | 2,248 | 0–1,194 | -38..-23 / -121..-52 / -104..101 |

## Group validation

- Super Shenron: **1/1 passed**
- Shadow/Fire Drake variants: **6/6 passed**
- Solak + Valkyrie models: **12/12 passed**
- Vorkath armor models: **15/15 passed**
- Bow of the Last Guardian: **3/3 passed**

Total: **37/37 passed structural geometry decoding**.

## What this proves

- The model payloads are not empty/corrupt placeholders.
- Vertex and face streams are internally coherent enough for conversion work.
- The large assets (including Shenron, Solak and both Drake families) contain complete triangle geometry.

## What this does not prove yet

- Correct 727 texture/material mapping.
- Correct skeleton/animation compatibility.
- Correct NPC/item definitions, equip slots or inventory/drop model relationships.
- Correct scale/orientation in the 727 client.
- Desktop or Android runtime rendering.

Those are the next conversion-test gates. The authoritative 727 cache remains unchanged.
