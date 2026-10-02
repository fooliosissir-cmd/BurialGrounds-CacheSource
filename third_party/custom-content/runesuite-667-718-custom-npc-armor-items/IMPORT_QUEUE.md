# RuneSuite pack — 727 conversion queue

Source archive: `Runesuite_modelrelease.zip`  
Working branch: `staging/runesuite-modelrelease`  
Authoritative 727 cache: untouched

## Conversion order

1. **Super Shenron**
   - Source: `Super Shenron/80972.dat`
   - Geometry: 1,394 vertices / 2,630 faces
   - Format: old RuneScape model format
   - Raw source is staged privately as `raw/Super_Shenron.zip`.
   - Next gate: allocate a free 727 model ID, create a temporary NPC definition, select a compatible base animation set, and render-test.

2. **Custom large raid boss**
   - Source: `New_Boss.mqo`
   - Editable MQO source, 266 materials.
   - Main geometry layer: 5,573 vertices / 10,651 triangles.
   - Next gate: export a RuneScape-compatible model while preserving material/color groups, then test scale/orientation.

3. **Solak**
   - Source: `ValkandSolak/solak.dat`
   - Geometry: 6,397 vertices / 11,737 faces.
   - Format: new v15.
   - Next gate: texture/material ID audit plus animation selection.

4. **Shadow Drake / Fire Drake**
   - Six variants, all new v17.
   - Release metadata says Roc animations.
   - Next gate: identify the 727 Roc BAS/sequence set and verify that the model vertex groups animate correctly before creating NPC definitions.

5. **Vorkath armor**
   - Five equipment categories with inventory/drop + worn models.
   - Old-format model payloads.
   - Next gate: map male/female wear models, equip slots, inventory models and ground models into temporary item definitions.

6. **Valkyrie armor + wings**
   - Eleven new-v19 models.
   - Several models declare texture faces.
   - Next gate: audit material/texture IDs and pair drop/wear variants.

7. **Bow of the Last Guardian**
   - Drop, untextured wield and textured wield variants.
   - Next gate: choose the production wield variant after texture/material audit; then create a temporary item definition.

## Rules for every candidate

- Never overwrite an existing 727 model/config ID.
- Keep conversion work on the private staging branch and disposable Developer World cache.
- Do not use `DatMaker.exe`; it remains quarantined.
- Record source SHA-256 and final 727 IDs before merge.
- Verify desktop first, then Android.
- Do not merge into the authoritative cache until the model renders, animates, equips/targets correctly, and the source/provenance decision is recorded.
