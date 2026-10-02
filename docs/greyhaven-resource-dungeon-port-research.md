# Greyhaven Resource Dungeon / Cross-Revision Port Research

Saved: 2026-10-02

## Decision

Evaluate Stugger's released **Custom Resource Dungeon** as a foundation for Greyhaven's independent progression route. Do **not** replace the current Burial Grounds map tooling. Test the third-party map in an isolated development cache/region first, then adapt it for revision 727.

## Primary map candidates

### Custom Resource Dungeon V1
- Author/releaser: **Stugger**
- Source thread: https://rune-server.org/threads/free-hd-maps.694823/
- Direct download: https://www.dropbox.com/scl/fi/iqumqfzdoepkjjj9wqpgt/Resource-Dungeon-V1.rar?rlkey=v92h2ctoob7ud0wp4kgwjyim4&dl=0
- Original/recommended region: **6724**
- Entrance/exit rope coordinate in the released map: **(1700, 4381, 0)**
- Source states no XTEAs are required if kept in the same region.
- Released features:
  - Yew and Magic trees
  - Fishing water
  - Cooking fire
  - Tin, copper, iron, coal, gold, mithril, and adamant ore
- Greyhaven use: independent gathering/combat/equipment progression that does not require advancing the Vael/main-story path.

### Boss / Raids Room V1.1
- Source thread: https://rune-server.org/threads/free-hd-maps.694823/
- Direct download: https://www.dropbox.com/scl/fi/txne0eog4gy2jqsrstbn2/Raids-Room-V1.1.rar?rlkey=ec97tlt0z19qwml40l1ew5741&dl=0
- Original/recommended region: **1329**
- Source states no XTEAs are required if kept in the same region.
- Possible Greyhaven use: deeper encounter/miniboss/final chamber attached to the progression dungeon after adaptation.

## Revision / packing references

### Stugger 667/718 Basic Map Packer
- Thread: https://rune-server.org/threads/667-718-basic-map-packer.695291/latest
- The author states it was tested on both **667 and 718**.
- It is useful as a compatibility/reference tool, not as a replacement for the current Burial Grounds map pipeline.
- Important warning from the author: back up the cache before packing.

### RuneWiki RS-DataAPI
- Repository: https://github.com/RuneWiki/RS-DataAPI
- Purpose for Burial Grounds: cross-revision cache/object research.
- It uses OpenRS2 archived caches.
- The project's object-definition dump endpoint is documented as confirmed through **revision 727**.
- Planned use:
  1. Identify object definitions used by the source 667/718 map.
  2. Compare names/actions/models/definitions against revision 727.
  3. Remap incompatible object IDs to the correct 727 equivalents.
  4. Produce a conversion report before writing anything into the real Greyhaven region.

## Other reference material

### 718 custom raids server logic
- Repository: https://github.com/wyvern800/rsps-snippets
- Use only as a server-logic reference for raid/room progression concepts. It is **not** the map itself.

### Old RSPS Map Editor
- Repository: https://github.com/JeremyDX/RSPS-Map-Editor---V1
- Decision: **do not adopt as our editor**. Keep only as historical/reference code; it targets much older cache/map data than our 727 workflow.

## 727 validation plan

1. Preserve the current working Burial Grounds cache and maps.
2. Extract the released Resource Dungeon files into a disposable test workspace.
3. Inspect the terrain and land/object files before packing.
4. Attempt a test load in a disposable 727 development cache/region.
5. Verify:
   - terrain heights and overlays
   - floors/walls
   - object IDs and object shapes/rotations
   - collision
   - water
   - lighting
   - entrances/exits
   - minimap/world-map implications
6. Build a 667/718 -> 727 object-remap table using RS-DataAPI plus the local 727 cache definitions.
7. Replace or remove incompatible object IDs.
8. Re-test collision and rendering.
9. Only after the test is clean, adapt the layout into Greyhaven and add Burial Grounds-specific gameplay:
   - early / mid / deeper resource sections
   - combat encounters
   - gear/material rewards
   - repair/crafting points
   - hidden caches
   - miniboss chambers
   - optional story/environmental clues
10. Keep the progression path independent of mandatory Vael/main-story progression.

## Attribution / redistribution note

The Rune-Server thread presents these maps as free downloadable releases, but this research pass has **not confirmed a formal license for redistribution of the raw map archives**. Preserve Stugger credit. Do not vendor or redistribute the raw third-party archives in our repository until permission/license terms are verified. Links, research notes, compatibility work, and our own 727 conversion/adaptation code can be tracked here in the meantime.

## Current status

- Candidate identified: **YES**
- Source/download links preserved: **YES**
- 718 packing reference preserved: **YES**
- 727 cross-revision object tool identified: **YES**
- Raw third-party map files committed to Burial Grounds repo: **NO — intentionally withheld pending license/permission verification**
- 727 compatibility test completed: **NO — next implementation step**
