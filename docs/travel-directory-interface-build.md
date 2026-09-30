# Travel Directory Cache Interface Build Plan

Target: approved Burial Grounds Travel Directory mockup.
Server runtime currently opens interface 1324, but CacheSource dev does not contain an exported interfaces/1324 directory. Neighbor 1323 is exported, proving the interface source format is available generally.

## Do not fabricate 1324 component JSON
Creating arbitrary component JSON without first exporting/decoding the real 1324 group would risk corrupting the cache contract. The existing server relies on native component IDs 20/21/25/26/27/28/29, category ops 40..46, row ops 100..163, text 50..56 and 200..263.

## Required export/build operation
1. Decode/export interface group 1324 from the packed 727 cache into interfaces/1324/*.json.
2. Commit the untouched baseline export first.
3. Rebuild that group to the approved layout while preserving a documented component contract.
4. Pack it back into the dev cache and verify client decode/open.
5. Only then change the server component contract.

## Proposed new contract
- 20 title: BURIAL GROUNDS / TRAVEL DIRECTORY
- 21 close/back
- 22 search input
- 23 favorite
- 24 optional recent
- 25 detail/description body
- 26 teleport
- 27 teleport label
- 28 empty-state
- 29 selected category/title
- 40..47 category buttons (8)
- 50..57 category labels (8)
- 100..163 destination row operation surfaces
- 200..263 destination row labels
- 300 selected destination name
- 301 type
- 302 location
- 303 rewards
- 304 requirements
- 305 arrival
- 306 danger/lock state

The exact IDs may be revised after the real 1324 baseline export reveals collisions/native script dependencies.

## Approved category order
Bosses, Minigames, Dungeons, Slayer, Skilling, Cities, Wilderness, Activities.

## Visual target
Dark carved stone/forged metal; recessed charcoal panels; cyan/teal crystal illumination; turquoise selected states; silver/grey main text; muted gold metadata labels; beveled controls. No stock OS/mobile styling.

## Safety
Until the cache group is exported and rebuilt successfully, keep the existing 7-tab server implementation intact.
