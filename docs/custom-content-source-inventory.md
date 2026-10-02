# External 667/718 Custom Content Inventory

Status: research/staging inventory for Burial Grounds revision 727.

Purpose: keep useful 667/718-era custom-content sources in one place so they are available for future Developer World import work. This file does **not** mean a source has been approved for redistribution or production use.

## Priority model / NPC sources

### 1. 667/718 Custom NPC, Armor & Item Models release
Source: https://runesuite.io/topic/9061-667718-custom-npc-armor-item-models-release/

Reported contents:
- Shadow Drake
- Fire Drake
- Solak
- Vorkath armour
- custom large raid-boss NPC
- additional models in the archive

Compatibility note:
- Released specifically for 667/718, making it a much closer starting point for our 727 cache than low-revision packs.
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
- Potentially valuable because the material is already described as fitted to revision 718.
- Treat it as a source cache for **selective extraction/comparison**, not as a replacement for the Burial Grounds 727 cache.

Redistribution/licensing note:
- The release/download is forum-gated and no clear redistribution license was verified during this pass.
- **Do not commit the cache archive itself until redistribution rights are confirmed.**

## Custom map sources

### Stugger Free HD Maps — 667/718
Source: https://rune-server.org/threads/free-hd-maps.694823/
Map packer: https://rune-server.org/threads/667-718-basic-map-packer.695291/

Useful released maps include:
- Boss/Raids Room V1
- Boss/Raids Room V1.1
- Custom Home Island V1
- Custom Home Island V1.1
- Custom Resource Dungeon
- multiple Edgeville revisions

Why this matters:
- The author explicitly designed these around 667/718-era HD map formats.
- The boss/raids room already has a combat arena, death/spectator area and reward/exit room layout.
- The resource dungeon is directly reusable as a design/source-map candidate for independent skilling progression.
- World-map data is not included, which is fine for us because Burial Grounds already has its own world-map sync pipeline.

Caution:
- Keep the raw source maps isolated until we verify exact redistribution terms and 727 packing behavior.
- Do not overwrite our native Greyhaven regions; import into spare regions or rebuild the layout inside our existing custom footprint.

### MagePS organized maps/models pack
Source: https://runesuite.io/topic/6905-mageps-latest-models-and-maps-1012021/

Reported contents:
- organized MagePS custom maps
- custom models from the same project

Use:
- inspect for dungeon, boss-room and environmental layouts that fit Burial Grounds;
- extract only individual candidates that pass visual, technical and rights review.

Caution:
- No clear redistribution license was verified.
- Do not mirror the whole archive into this repository.

## Boss / encounter sources

### Onyx / Matrix 2023 full 718 package
Source: https://runesuite.io/topic/9227-onyxmatrix-2023-full-package/

Reported value:
- complete 718 cache/client/source package
- unique bosses not present in normal RuneScape
- unique custom gear

Use:
- inspect boss definitions, combat concepts, animation/model dependencies and encounter structure;
- port only concepts/assets that are technically compatible and cleared for reuse.

Caution:
- The package is forum-gated and no clear redistribution license was verified.
- Treat it as an inspection/reference source until rights are clear.

### Hyperion 718/751 custom-boss release
Source: https://runesuite.io/topic/8609-hyperion-718751-loading-some-osrs-and-customs/

Reported value:
- some custom/OSRS bosses already have working animations
- associated custom items are present
- map/map-object work was explicitly unfinished

Use:
- useful primarily for boss model + animation relationship research, not for map import.

Caution:
- no clear redistribution license verified.

### 718 Custom RAIDS system — MIT
Source: https://github.com/wyvern800/rsps-snippets

License:
- MIT

Useful content:
- complete custom RAIDS system intended for Matrix 718
- encounter / raid-flow code that can be translated to Darkan
- author notes that packet handling needs correction

Use:
- this is one of the cleanest code sources we found because the repository is explicitly MIT licensed.
- port architecture and gameplay flow rather than blindly copying Matrix-specific packet code.

## Secondary model candidates already identified

### Ziva's Torva Sets Textured — 36 models
Listing: https://runesuite.io/forum/188-rsps-models/
Tags: 667 / 718.
Use: possible armor variants/reference models after compatibility and rights review.

### Elder Scythe — 718 custom model
Use: custom weapon candidate/reference for 718-era model structure.
Status: verify the original release/download and rights before importing.

### Custom Zaros Godsword
Use: cross-revision weapon-model candidate/reference.
Status: verify source archive and rights before importing.

### MyScape custom model archive
Source: https://runesuite.io/topic/6912-myscape-latest-models-good-ones-90k/
Reported note: unique models are grouped in the 90k+ ID range.
Status: inspection candidate only until contents and rights are verified.

### Coliseum / Genesis / Stargaze model collections
Discovery page: https://runesuite.io/forum/188-rsps-models/
Status: potentially large pools of custom NPC/item models, but revision fit and redistribution rights are not clear enough to vendor wholesale. Inspect individual models only.


## Newly found high-value sources

### Venomite 718/OSRS semi-custom release
Source: https://runesuite.io/topic/8110-venomite-718osrssemi-custom/

Reported contents:
- 3 event bosses
- 12 OSRS bosses plus additional content
- more than 100 custom models made specifically for the project
- many NPC configurations
- custom interfaces
- mainly revision-685-style item models, which are visually closer to the older RuneScape look than modern RS3 assets
- some custom maps credited to Patrity

Why this is high priority:
- It is a 718 project and therefore structurally close to Burial Grounds 727.
- It combines bosses, NPC configs, models and maps in one released project.
- The older-style item models are a potentially good visual fit.

Caution:
- No explicit open-source/content license was verified.
- Inspect and selectively port only material whose reuse/redistribution terms are clear.

### Pat's Maps — explicit free map releases
Source: https://rune-server.org/threads/pats-maps.685948/

Explicitly released downloads on the author's thread include:
- Fancy Edgeville
- Edgeville Village
- Edgeville Village Halloween version
- Edgeville Village Christmas version
- Simple Edgeville PK

Author note:
- The author says maps that are no longer in use, or maps made for fun, are posted there for release.
- The maps were designed with OSRS data; the author states higher-revision servers loading the needed OSRS data can use them.

Use for Burial Grounds:
- layout/reference material;
- selective conversion if required objects exist or can be mapped to 727 equivalents;
- the Fancy Edgeville terrain/bridge/stair work is especially useful as a reference for more vertical custom areas.

Caution:
- Do not use maps the author explicitly says are still in use and not released.
- A forum release is not automatically a blanket relicensing right; keep original download provenance and do not redistribute raw packages outside what the release permits.

### 718/OSRS cache maps release
Source: https://runesuite.io/topic/7114-718osrs-cache-maps/

Reported value:
- map material packaged specifically around a 718/OSRS cache setup.

Status:
- download details are forum-gated and the post provides little public metadata.
- inspect after access; do not vendor wholesale until contents and reuse terms are understood.

### 667/718 high-revision Raid/OSRS model pack
Source: https://runesuite.io/topic/9062-667718-lots-of-osrs-models-for-high-revision-release/

Reported contents:
- Raid 1 / Raid 2 armor, item and weapon models
- Ancestral
- colored twisted bows
- Scythe
- Nightmare staves
- Revenant weapons
- Mage Arena II capes
- custom-colored bonds
- mystery-box and chest object models
- some definitions/ints to make high-revision integration easier

Why this matters:
- The release is explicitly targeted at 667/718 high-revision servers.
- The chest/object models could support our earned-box/reward-cache systems.
- Boss/raid reward equipment can be evaluated without changing the overall 727 visual style.

Caution:
- Verify asset-by-asset redistribution provenance before committing raw model files.

## Supporting tools worth keeping

### RSPSi-742
Source: https://github.com/Avexiis/RSPSi-742
Thread: https://rune-server.org/threads/rspsi-742.708283/
License: MIT

What it gives us:
- open-source RSPSi variant modified for revision 742
- 742 object/floor/texture/animation/cache loaders
- demonstrated custom-map creation on a high revision
- useful reference for adapting high-revision map editing closer to our 727 cache

Compatibility caveat:
- the author tested 742 and explicitly says 718/727 are not currently guaranteed.
- this is a reference/tool candidate, not a drop-in editor for our cache yet.
- repository documents mesh/texture issues and estimates current functionality around 75–80%.

### SwiftUp/Tarnish map-index packing fix
Source: https://rune-server.org/threads/swiftup-tanishpacker-proper-packing-for-newer-map-indexs.708263/

What it documents:
- newer map-index packing should preserve real archive IDs instead of renumbering them;
- concrete Kotlin packing logic for map/land archives;
- useful reference if we encounter mismatched archive IDs while translating newer map formats.

### Matrix NPC/Object SpawnEditor
Source: https://github.com/MrSlayerGod/SpawnEditor
Thread: https://rune-server.org/threads/spawn-editor-for-matrix-bases.707876/

What it gives us:
- interactive NPC/object placement for Matrix-style servers;
- JSON spawn workflow;
- searchable NPC/object lists;
- map-image based worldbuilding;
- hot-reload-oriented workflow for NPC spawns.

Use:
- evaluate concepts/code for accelerating placement of NPCs and objects in Greyhaven without changing our authoritative Darkan spawn architecture.

## Visual compatibility rule

- Do not import unrelated low-poly or other-game art simply because its license allows reuse.
- Production candidates should match RuneScape's pre-EOC/667-742 visual language closely enough to look native after conversion.
- Prefer RuneScape/RSPS custom models, maps, NPCs and RS3-to-718 conversions that can be adapted cleanly to revision 727.

## Burial Grounds import rule

1. Never overwrite the authoritative 727 cache with a foreign cache.
2. Extract only the specific models/textures/configs needed for a candidate.
3. Inspect source definitions and model dependencies first.
4. Translate IDs/config definitions into free Burial Grounds 727 ranges.
5. Preserve 727-native animations, equip slots, transforms, recolors/retextures and client expectations where possible.
6. Pack into a disposable Developer World cache first.
7. Test desktop and Android before merging into the main cache source.
8. Record every imported asset in the manifest beside its source, original revision, new 727 IDs, dependencies and verification status.

## Staging convention

When an asset is cleared for use, stage our conversion work under:

`third_party/custom-content/<source>/<asset>/`

Do not place unreviewed third-party archives in the repository.

## Current evaluation order

1. Stugger free 667/718 maps — direct map-format candidates.
2. Venomite 718 — bosses, NPC configs, maps and 100+ custom models in one close-revision release.
3. 718 Custom RAIDS MIT code — encounter-flow implementation reference.
4. Pat's released maps — additional downloadable map layouts.
5. 667/718 NPC/armor/item release — custom boss/model candidates.
6. 667/718 high-revision Raid/OSRS model pack — equipment plus chest/reward objects.
7. Noxious 718 — selective converted-model inspection.
8. Onyx 718 — unique boss/gear inspection.
9. MagePS — custom-map/model inspection.
10. Hyperion 718/751 — boss animation/model mapping reference.
11. RSPSi-742 — MIT high-revision map-editor reference for a future 727-compatible workflow.

The goal is selective, revision-aware importing into Burial Grounds, not replacing the 727 cache with another server's cache.
