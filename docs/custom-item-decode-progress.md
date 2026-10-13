# Custom item decode progress

Updated: 2026-10-02  
Target: Burial Grounds / Darkan revision 727  
Status: first private custom-item batch decoded; Developer World overlay verification in progress.

## Source batch

The user-supplied `Runesuite_modelrelease.zip` was inspected from private Library storage. Raw third-party model files are **not** committed to this public repository.

The custom-item pass decoded the Valk equipment models, Vorkath armour models and BOTLG bow models using the same RuneScape model-layout rules as Darkan's `ModelDecoder`.

## Decode result

- **29 real item models decoded successfully**.
- **0 decoded models have geometry/index validation errors**.
- `Vorkath Armour/settings.dat` is a 79-byte metadata/settings file, not a RuneScape mesh; model decoding correctly rejects it and it is not part of the item model count.
- Cache-source-compatible GLBs and normal preview GLBs are retained in private staging.

### Vorkath armour

Decoded pieces:
- helm: drop, male worn, female worn;
- body: drop, male worn, female worn;
- legs: drop, male worn, female worn;
- gloves: drop, male worn, female worn;
- boots: drop, male worn, female worn.

The Vorkath models are old-format version-12 RuneScape models and do not reference external material IDs. Worn armour models preserve skin data where the source carries it.

### Valk equipment

Decoded pieces:
- helm: drop + worn;
- body: drop + worn;
- legs: drop + worn;
- gloves: drop + worn;
- boots: shared drop/worn model;
- wings: drop + worn.

The Valk models are new-format version 19 and use material IDs drawn from:
- 1592;
- 2207;
- 2303;
- 2433.

All are inside revision 727's existing material ID range (0..2590). That makes them valid candidates for a cache-pack/render test, but the visual meaning of those material IDs still has to be checked in the real 727 client before production approval.

The release provides one worn body/head/legs variant rather than separate male/female files. The Developer World preview therefore uses the supplied worn model for both sexes until fit is reviewed.

### BOTLG bow

Decoded:
- inventory/drop model;
- plain worn model;
- textured worn model.

The textured worn model references material IDs 1513 and 2433, both inside the 727 material range. Developer World keeps both plain and textured preview variants so they can be compared in the actual client.

## Developer World preview IDs

Temporary preview item IDs:
- 29952..29956 — Vorkath set;
- 29957..29962 — Valk set + wings;
- 29963 — BOTLG textured-worn preview;
- 29964 — BOTLG plain-worn comparison.

Temporary preview model range:
- 91000..91029, with 91026 intentionally unused because the source file in that sequence is `settings.dat`, not a model.

These IDs are preview allocations, not production reservations.

## Safety / gameplay rules

- Preview definitions have no combat bonuses.
- Preview items are non-exchangeable.
- They are prepared only for Developer World.
- Raw third-party source archives are not vendored into CacheSource.
- Production use still requires visual fit, equipment clipping, animation/skin behavior, desktop/Android rendering and provenance review.

## Next acceptance gates

1. Developer World overlay script downloads the pinned source archive and verifies its SHA-256.
2. All 29 model files convert through Darkan's native model importer.
3. The temporary item definitions compile into index 19.
4. The packed cache resolves every inventory/worn model and every model decodes with drawable geometry.
5. The real client is used to inspect inventory icon framing, male/female fit, clipping, material appearance and wings/bow alignment.
6. Only approved pieces receive permanent item/model IDs and final stats/reward sources.


## Dense-ID rule discovered during cache verification

Revision 727's item decoder sizes the highest item archive as `archive * 256 + fileCount`.
Therefore, when a brand-new archive becomes the highest item archive, its preview definitions must
start at low file id 0 and remain dense. Starting partway through the archive can pack successfully
but leave those definitions outside the decoder's allocated item table.

The Developer World preview range was corrected from 30000..30012 to **29952..29964** (archive 117,
files 0..12). Permanent custom item allocation should preserve this rule or update the loader with
a separately verified sparse-highest-archive fix.
