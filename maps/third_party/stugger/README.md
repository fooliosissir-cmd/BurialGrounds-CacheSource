# Stugger custom map imports

Imported on 2026-10-02 from the author's public Free HD Maps release:
https://rune-server.org/threads/free-hd-maps.694823/page-3

The original four RAR archives are preserved under originals/. originals-manifest.json records their SHA-256 hashes and sizes. extracted/ retains the released payloads, including both revision variants where supplied. These are decompressed map payloads; do not apply the published XTEA keys to these files. New cache archives are packed without encryption. The original cache regions and keys are unchanged.

| Map | Release region | Test region | Developer admin command |
| --- | --- | --- | --- |
| Boss/Raids Room V1.1 | 1329 (5_49) | 51400 (200_200) | ::tele 12832 12832 0 |
| Home Island V1.1 | 11817 (46_41) | 52168 (203_200) | ::tele 13022 12829 0 |
| Resource Dungeon V1 | 6724 (26_68) | 52936 (206_200) | ::tele 13220 12829 0 |
| Edgeville V1.2 | 12342 (48_54) | 53704 (209_200) | ::tele 13397 12835 0 |

Use Developer World only. These coordinates are release-derived viewing locations, not certified collision-free spawn points. No travel directory entry, quest route, reward logic, NPC population, or Greyhaven progression was added. Stair and dungeon interactions may still use the original server destinations and require review before integrating a map into gameplay.

imports.json records the 12 appended archive IDs (7412-7423), source payloads, and destination files. All 7,412 pre-existing map metadata entries are unchanged. Repeated 667/718 payloads are retained as source evidence; only one variant per map was imported. Each target region was absent from the source tree before import.

Checks completed:
- All terrain payloads decode and re-encode byte for byte through the existing revision-727 map codec.
- The raids location payload is byte exact. Other location payloads contain redundant grouping records normalized by the encoder; decoding the rebuilt files preserves every placement, including ID, coordinates, plane, shape, and rotation.
- All 8,297 imported placements have existing location definitions. Referenced models, model materials, and direct animation sequence definitions exist; see dependencies.json. This does not prove source-revision appearance or the complete animation/particle/texture dependency closure in the client.
- All 12 imported archives were read from the packed cache and re-encoded byte for byte. Evidence: C:/DarkanDev/Runtime/Custom-Content/readback.log.
- A complete isolated cache build succeeded: 141,402 asset archives, 37 reference tables. cache verify reported 141,402 identical assets, zero differences/missing/extra assets, all 37 tables identical, and a matching version table. Evidence: C:/DarkanDev/Runtime/Custom-Content/cache-build.log and cache-verify.log.
- The Developer lobby and World 1 started against C:/DarkanDev/Runtime/Custom-Content/packed-cache; the worldlist reports World 1 online on 127.0.0.1:43595. Main World was not deployed.

Remaining validation: inspect all four maps in the client, traverse entrances and stairs, check upper/underwater planes, clipping, lighting, adjacent blank-region boundaries, and every interactive object. No in-client visual or gameplay pass is claimed. The nested objectspawndata.rar shipped with the raids release is preserved but has not been applied to server content.

Rollback: remove the four newly added test-region directories and restore maps/index.json from C:/DarkanDev/Backups/custom-content-20261002/maps-index.json, after checking for later edits. Rebuild the preview cache. The ordinary Developer launcher still points at its original runtime; this preview uses separate scripts in Runtime/Custom-Content.
