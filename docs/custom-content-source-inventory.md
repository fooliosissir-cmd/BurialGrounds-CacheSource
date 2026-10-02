# External 667/718 Custom Content Inventory

Status: research/staging inventory for Burial Grounds revision 727.

Purpose: keep the useful 667/718-era custom-content sources we found in one place so they are available for future Developer World import work. This file does **not** mean a source has been approved for redistribution or production use.

## Priority sources

### 1. 667/718 Custom NPC, Armor & Item Models release
Source: https://runesuite.io/topic/9061-667718-custom-npc-armor-item-models-release/

Reported contents:
- Shadow Drake
- Fire Drake
- Solak
- Vorkath armour
- Super Shenron
- custom large raid-boss NPC
- additional models in the archive

Compatibility note:
- Released specifically for 667/718, making it a much closer starting point for our 727 cache than 317/OSRS-only packs.
- Shadow/Fire Drake are described as using Roc animations.

Redistribution/licensing note:
- The post says some models were purchased from a third-party model seller and does not provide a clear open-source/content license.
- **Do not vendor the raw archive into this repository unless redistribution permission is verified.**
- Use the source as an external acquisition/reference point, then inspect each candidate before conversion.

### 2. Noxious 718 custom cache/model release
Discovery page: https://runesuite.io/forum/188-rsps-models/
Background/server thread: https://rune-server.org/threads/noxious-718.706423/

Reported contents:
- Noxious 718 cache
- custom items
- RS3 models converted/fitted for 718
- broader custom-content set associated with the Noxious server

Compatibility note:
- This is potentially valuable because the material is already described as fitted to revision 718.
- Treat it as a source cache for **selective extraction/comparison**, not as a replacement for the Burial Grounds 727 cache.

Redistribution/licensing note:
- The release/download is forum-gated and no clear redistribution license was verified during this pass.
- **Do not commit the cache archive itself until redistribution rights are confirmed.**

## Secondary candidates already identified

### Ziva's Torva Sets Textured — 36 models
Listing: https://runesuite.io/forum/188-rsps-models/
Tags: 667 / 718.
Use: possible armor variants/reference models after compatibility and rights review.

### Elder Scythe — 718 custom model
Use: custom weapon candidate/reference for 718-era model structure.
Status: keep as a secondary candidate; verify the original release/download and rights before importing.

### Custom Zaros Godsword
Use: cross-revision weapon-model candidate/reference.
Status: secondary candidate; verify source archive and rights before importing.

## Visual compatibility rule

- **Do not use Kenney assets in Burial Grounds.**
- Do not import unrelated low-poly or other-game art simply because its license allows reuse.
- Production candidates should match RuneScape's pre-EOC/667-742 visual language closely enough to look native after conversion.
- Prefer RuneScape/RSPS custom models, maps, NPCs and RS3-to-718 conversions that can be adapted cleanly to revision 727.

## Burial Grounds import rule

1. Never overwrite the authoritative 727 cache with a foreign cache.
2. Extract only the specific models/textures/configs needed for a candidate.
3. Inspect the source definitions and model dependencies first.
4. Translate IDs/config definitions into free Burial Grounds 727 ranges.
5. Preserve 727-native animations, equip slots, transforms, recolors/retextures and client expectations where possible.
6. Pack into a disposable Developer World cache first.
7. Test desktop and Android before merging into the main cache source.
8. Record every imported asset in the manifest beside its source, original revision, new 727 IDs, dependencies and verification status.

## Staging convention

When an asset is cleared for use, stage our conversion work under:

`third_party/custom-content/<source>/<asset>/`

Do not place unreviewed third-party archives in the repository.

## Current decision

The first two sources to evaluate are:
1. the 667/718 NPC/armor/item release; and
2. the Noxious 718 cache/model release.

They are closest to the revision family we want and potentially contain bosses, NPCs, armor and weapons that can be adapted into Burial Grounds without dragging the whole project toward an OSRS asset pipeline.
