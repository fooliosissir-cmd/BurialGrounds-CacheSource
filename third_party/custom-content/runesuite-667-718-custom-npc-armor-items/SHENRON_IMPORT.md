# Super Shenron 727 import

Status: staged for Developer World verification.

Source:
- RuneSuite 667/718 custom NPC/armor/item model release
- source file: `Super Shenron/80972.dat`
- source SHA-256: `91e30fbc6ae2fcb28562d1756f4eb00912155511a0df679c1c063b744b8f86f8`

Allocated 727 ids:
- model: `73506` (next free after shipped/imported model 73505)
- NPC: `15662` (next free after NPC 15661)

Conversion:
- source model is the old RuneScape model layout (v12 semantics)
- 1,394 vertices, 2,630 faces, 0 texture triangles
- vertex skin labels are retained
- positions are stored in the cache-source GLB at their decoded 727 scene scale
- face colours are retained in `extras.rs.colours`
- no external texture/material dependency is required by this model

Verification completed before staging:
- all face indices are in range
- GLB geometry, face order, face colours and vertex skin labels match the decoded source
- original DAT is preserved unchanged under private third-party staging
- bundled `DatMaker.exe` was not executed

Developer World gate still required:
1. cache build/read-back
2. static render of NPC 15662
3. determine a compatible BAS/sequence set before enabling animation
4. desktop visual check
5. Android visual check

Do not merge this branch into Main World until those gates pass.
