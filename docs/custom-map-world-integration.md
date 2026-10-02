# Custom Mode map integration plan

Date: 2026-10-02
Branch: `dev`

## Locked decisions

- Greyhaven and the Woken opening remain the Custom Mode start.
- Home Island V1.1 is the first physical expansion, staged at **78_200** east of Greyhaven's southern coast.
- **78_201..78_205** are ocean buffer regions so the expanded Adventure instance can remain rectangular without exposing unfinished land.
- The island's level-0 sea/terrain is shifted down six height units to meet the southeast Greyhaven coast; implicit underwater heights are frozen from the original 46_41 coordinates before relocation.
- Barrows Island becomes **Guardian Rematch Island**. Only Guardians truly defeated by that Adventure profile unlock there. Rematches never advance story state.
- Rematches can support repeatable rewards, cosmetics/upgrades, Echo variants and later multi-Guardian challenge runs.

## Reserved imported-map regions

| Map | Reserved region(s) | Custom Mode role |
| --- | --- | --- |
| Home Island V1.1 | 78_200 | connected activity district |
| Resource Dungeon V1 | 79_200 | underground resource dungeon |
| Snowy Area V1 | 74_206 | northern frozen expansion |
| Edgeville V1.2 / V3 | 79_201 | small discoverable settlement |
| Edgeville V1.1 / V2 | 79_202 | frontier settlement |
| Edgeville Remade | 80_202, 81_202 | later-game second city |
| Custom Manor | 80_200 | haunted estate / side dungeon |
| Underground Castlewars | 79_203, 79_204 | buried military complex |
| Boss/Raids Room V1.1 | 79_205 | dedicated raid arena |
| Barrows Island | 80_201 | Guardian Rematch Island |
| AhoyPK released layout | 80_203 | reserve standalone activity zone |

These are Custom Mode source reservations, never Classic/Main World replacements.

## Home Island connection

Greyhaven region 77_200 already has a low coastal/water notch on its east edge. Home Island's west edge is water, with shoreline only a few tiles in. That makes the southeast coast the least destructive connection. The final player-facing connection should be a physical dock/bridge/ferry at that notch after cache and collision verification.

## Acceptance gates

1. The 78_200..78_205 cache regions build.
2. Adventure expands east while ocean-buffer rows remain non-playable.
3. Home Island collision and all used planes render correctly.
4. Existing Greyhaven opening/story anchors remain unchanged.
5. Upper floors are allowed inside Home Island without reopening the removed Greyhaven inn floor.
6. Desktop and Android Developer World traversal pass before Main World deployment.
