# Burial Grounds Custom Map Adoption Plan

Decision date: 2026-10-02
Target: Burial Grounds revision 727
Status: approved conversion queue for Developer World testing

## Selection rule

Use the catalogued custom maps below in Burial Grounds, with one explicit exclusion:

- **Exclude:** Edgeville V1.2 / V3 (region 12342 Stugger pack currently staged under `tools/external-content/stugger-basic-map-packer`).
- For releases where V1.1 is an updated revision of V1, use **V1.1 as the playable destination** rather than shipping both near-duplicate versions.
- Never overwrite the canonical 727 map source during conversion. Every foreign map is converted/tested in a disposable Developer World cache first.

## Approved playable map queue

| Map | Intended Burial Grounds use | Conversion note |
| --- | --- | --- |
| Snowy Area V1 | Frozen ruin / winter boss approach / optional northern activity | Stugger 667/718-era map; convert to 727-native map JSON and remap objects as needed |
| Boss/Raids Room V1.1 | Dedicated boss/raid arena with spectator/death and reward/exit spaces | Use V1.1 instead of V1; preserve combat-floor and reward-room layout |
| Home Island V1.1 | Secondary hub/island activity area | Use V1.1 instead of V1; retain Slayer hut, runecrafting altar, thieving space and scenery |
| Resource Dungeon V1 | Standalone skilling/resource dungeon | Preserve yew/magic trees, fishing, cooking and multi-tier mining layout |
| Edgeville V1.1 / V2 | Separate custom settlement/activity region | Keep separate from Edgeville Remade; do not replace canonical Edgeville |
| Edgeville Remade | Larger custom Edgeville-derived settlement/region | Import into a spare region; do not collide with Edgeville V1.1 |
| Barrows Island | Barrows/crypt-island activity | Rebuild/remap low-revision objects to 727-native equivalents; retain island/boat concept |
| Custom two-floor boss map | Multi-phase boss encounter with upstairs reward room | Rebuild/remap with 727-native objects; preserve four-corner minion and casket/soul layout concepts |
| Custom Manor | Haunted manor / side quest / mini-dungeon | Rebuild/remap for 727; keep multi-floor structure |
| Underground Castlewars | Underground fort / PvE arena / faction-style activity | Rebuild/remap lower-revision layout with 727-native objects |
| AhoyPK Donator Zone | Repurposed standalone activity/scenery zone | Remove donor-specific theming; adapt layout to Burial Grounds gameplay |

## Explicitly not shipping

- Edgeville V1.2 / V3.
- Older Boss/Raids Room V1 once V1.1 is converted.
- Older Home Island V1 once V1.1 is converted.
- Raw foreign map archives in the production cache.
- Foreign object IDs that have not been verified/remapped for 727.

## Conversion order

1. Boss/Raids Room V1.1
2. Resource Dungeon V1
3. Snowy Area V1
4. Home Island V1.1
5. Edgeville V1.1 / V2
6. Edgeville Remade
7. Barrows Island
8. Custom two-floor boss map
9. Custom Manor
10. Underground Castlewars
11. AhoyPK Donator Zone

## 727 acceptance gate for every map

1. Stage source bytes outside the canonical cache.
2. Decode terrain and location data.
3. Convert to the native `maps/<x>_<y>/terrain.json` / `locs.json` source format.
4. Place the converted map in a spare Developer World region.
5. Remap or replace incompatible object IDs with 727-native definitions.
6. Build the disposable cache with the existing Darkan cache-source tooling.
7. Verify terrain, objects, collision, bridges/levels, minimap/world-map behavior and missing models.
8. Test on desktop and Android.
9. Only after validation, commit the 727-native source form and wire gameplay/spawns/teleports.
