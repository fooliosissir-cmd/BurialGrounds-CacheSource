# RuneSuite pack — 727 conversion queue

Source archive: `Runesuite_modelrelease.zip`  
Working branch: `staging/runesuite-modelrelease`  
Authoritative 727 cache: untouched

## Conversion order

1. **Super Shenron**
   - Source: `Super Shenron/80972.dat`
   - Geometry: 1,394 vertices / 2,630 faces
   - Format: old RuneScape model format, with preserved vertex-skin labels.
   - Raw source is staged privately as `raw/Super_Shenron.zip`.
   - 727 cache-source conversion is complete and recorded in `SHENRON_727_CONVERSION.md`.
   - Target model ID **80972** is verified free on both dev and staging.
   - Temporary NPC ID **15662** is verified free and stays inside the existing packed NPC archive 122.
   - Converted payload is staged privately as `converted/Super_Shenron_80972.glb.xz`.
   - Next gate: choose/verify a compatible animation base and render the temporary NPC in Developer World. Do not promote the model until the animation test passes.

2. **Custom large raid boss**
   - Source: `New_Boss.mqo`
   - Editable MQO source, 266 materials.
   - Main geometry layer: 5,573 vertices / 10,651 triangles.
   - The source has now been parsed and rendered; it is an armored berserker/demon-style raid boss, not additional DBZ content.
   - Inspection details are recorded in `NEW_BOSS_INSPECTION.md`.
   - Next gate: export a RuneScape-compatible model while preserving material/color and skin-group data, then test scale/orientation.

3. **Solak**
   - Source: `ValkandSolak/solak.dat`
   - Geometry: 6,397 vertices / 11,737 faces.
   - Format: new v15.
   - Next gate: texture/material ID audit plus animation selection.

4. **Shadow Drake / Fire Drake**
   - Six variants, all new v17.
   - Release metadata says Roc animations.
   - 727 dependency research is now concrete: Giant Roc NPC 4972 uses render emote 924; its stand/walk sequences are 5021/5022, and the existing server combat definition names Roc attack/defend/death animations.
   - Next gate: temporary model/NPC packing and a Developer World animation test against the 924 Roc family; verify the imported model vertex groups before creating production NPC definitions.

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
