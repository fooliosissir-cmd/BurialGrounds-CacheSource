# Burial Grounds Custom Map Adoption Plan

Decision date: 2026-10-02
Target: Burial Grounds revision 727
Status: approved conversion queue for Developer World testing

## Mode rule

All imported custom maps in this plan are **Custom Mode only**.

- They do not replace or alter the normal/main-world versions of Edgeville, Barrows, Castle Wars, or any other stock RuneScape region.
- Each imported map is assigned to a spare/custom region or reconstructed inside the Custom Mode footprint.
- Every map is converted and validated in the Developer World before it is exposed to Custom Mode players.
- Raw foreign map archives are never written directly over the canonical 727 cache.

## Visual baseline and full Custom Mode rework

The approved imported maps are now the **quality baseline** for how Burial Grounds Custom Mode should look and feel.

This applies to the entire existing Custom Mode footprint, not only the imported destinations.

Baseline expectations:

- terrain should have intentional elevation, shaping, borders and transitions instead of broad flat/empty stretches;
- roads, paths and entrances should clearly lead players between important spaces;
- towns and activity areas should have believable building placement, clutter, vegetation and landmarks;
- combat, skilling and exploration spaces should have recognizable silhouettes and visual identity;
- scenery density should feel deliberate without blocking movement;
- empty travel space should be used only when it creates atmosphere, pacing or a view;
- major gameplay spaces should look hand-built rather than like functional objects placed onto blank terrain;
- adjacent areas should transition naturally rather than feeling like unrelated map chunks pasted together.

The imported maps are references for **polish, density, terrain work and composition**. Their themes do not have to be copied literally.

### Full-world rework rule

After the conversion pass, perform a section-by-section rebuild/polish of the current Custom Mode map, including the existing Greyhaven/custom footprint.

Do **not** blindly wipe working gameplay. Preserve and reposition good systems where appropriate:

- quests and story triggers;
- NPCs and enemy encounters;
- gathering and crafting spots;
- buildings and interactable objects;
- teleports and entrances;
- progression gates;
- discoveries, side activities and landmarks.

If an existing section is visually weaker than the new baseline, redesign its terrain/layout while keeping the gameplay purpose intact. If an imported map is a stronger fit for that purpose, it may replace the existing physical area after the gameplay is migrated.

### Rework sequence

1. Finish converting and validating every approved imported map first.
2. Inventory the existing Custom Mode footprint and all gameplay attached to it.
3. Compare every section against the new visual baseline.
4. Mark each section as keep/polish, substantial rebuild, or replace with an imported-map foundation.
5. Establish the new macro layout, routes, settlements, landmarks and biome transitions.
6. Rework outward section by section so no playable content is lost.
7. Run a full blank-space/density sweep across the completed footprint.
8. Run collision, traversal, minimap/world-map, desktop and Android QA.
9. Only then treat the rebuilt Custom Mode map as the new baseline for future additions.

## Version rule

- Boss/Raids Room **V1.1** replaces V1 as the playable version.
- Home Island **V1.1** replaces V1 as the playable version.
- Edgeville V1.1, Edgeville V1.2, and Edgeville Remade are all kept as **separate Custom Mode locations** rather than replacing stock Edgeville.

## Approved Custom Mode map queue

| Map | Custom Mode role | Conversion note |
| --- | --- | --- |
| Snowy Area V1 | Frozen ruin / winter boss approach / optional northern activity | Convert to 727-native map JSON and remap objects as needed |
| Boss/Raids Room V1.1 | Dedicated boss/raid arena with spectator/death and reward/exit spaces | Preserve combat-floor and reward-room layout |
| Home Island V1.1 | Secondary hub/island activity area | Retain Slayer hut, runecrafting altar, thieving space and scenery |
| Resource Dungeon V1 | Standalone skilling/resource dungeon | Preserve yew/magic trees, fishing, cooking and multi-tier mining layout |
| Edgeville V1.1 / V2 | Small custom settlement/activity region | Separate Custom Mode town; does not replace stock Edgeville |
| Edgeville V1.2 / V3 | Small discoverable Custom Mode town | Use the staged 718 payload as the conversion source; do not replace stock Edgeville |
| Edgeville Remade | Larger custom settlement/region | Separate destination from the two smaller Edgeville variants |
| Barrows Island | Barrows/crypt-island activity | Rebuild/remap low-revision objects to 727-native equivalents; retain island/boat concept |
| Custom two-floor boss map | Multi-phase boss encounter with upstairs reward room | Preserve four-corner minion and casket/soul layout concepts |
| Custom Manor | Haunted manor / side quest / mini-dungeon | Rebuild/remap for 727; keep multi-floor structure |
| Underground Castlewars | Underground fort / PvE arena / faction-style activity | Rebuild/remap lower-revision layout with 727-native objects |
| AhoyPK Donator Zone | Repurposed standalone activity/scenery zone | Remove donor-specific theming and adapt it to Burial Grounds gameplay |

## Conversion order

1. Edgeville V1.2 / V3 — first proof-of-pipeline because its 718 bytes are already staged in GitHub.
2. Boss/Raids Room V1.1
3. Resource Dungeon V1
4. Snowy Area V1
5. Home Island V1.1
6. Edgeville V1.1 / V2
7. Edgeville Remade
8. Barrows Island
9. Custom two-floor boss map
10. Custom Manor
11. Underground Castlewars
12. AhoyPK Donator Zone

## 727 acceptance gate for every map

1. Stage source bytes outside the canonical cache.
2. Decode terrain and location data.
3. Convert to the native `maps/<x>_<y>/terrain.json` / `locs.json` source format.
4. Place the converted map in a spare Developer World region.
5. Remap or replace incompatible object IDs with 727-native definitions.
6. Build the disposable cache with the existing Darkan cache-source tooling.
7. Verify terrain, objects, collision, bridges/levels, minimap/world-map behavior and missing models.
8. Test on desktop and Android.
9. Compare the area against the Custom Mode visual baseline for terrain, density, landmarks and traversal.
10. Only after validation, commit the 727-native source form and wire Custom Mode gameplay/spawns/teleports.
