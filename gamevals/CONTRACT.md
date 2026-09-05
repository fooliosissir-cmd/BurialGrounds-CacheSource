# 727 gamevals — provenance and evidence rules

Every `gamevals/<type>.json` in this directory maps a **revision-727 (July 2012) cache id** to the
Jagex developer name for that exact asset, recovered from the RS3 revision-949 gameval tables.

**This file is provenance, not a runbook.** It records the rules a name had to clear before it was
written into a catalog, so a reader can judge how much any single entry is worth. The one-time
recovery tooling that applied these rules no longer exists, and 727 is permanently version-locked,
so there is nothing left to re-run: the catalogs are the artifact.

The catalogs are hand-editable and canonical. To rename an asset, edit `gamevals/<type>.json` and
rebuild - the `:core:generateGamevalConstants` task regenerates the typed constants and **fails the
build** on a name conflict; see `docs/gameval.md`. A name added by hand is held to the same one
rule below: proof, or the placeholder.

## The one rule

**A name is emitted only when the evidence proves the 727 id and the RS3 name denote the same
asset.** A plausible name is worse than a number. When no channel proves it, the entry is the
placeholder `<type>_<id>` (e.g. `cs2_5002`, `loc_1234`, `spotanim_77`).

"Proves" means one of the channels below reports a match **and** no channel reports a
contradiction. Same-id alone is never evidence: Jagex never renumbers, but it does delete, replace
and recycle ids, so same-id is only the *candidate generator*.

One channel, `brute`, did not reach proof and never claimed to: it recovered a name by search and
corroborated it against the asset, with a **measured** residual error rate rather than a
negligible one. It was admitted because a corroborated name with a stated, small, measured chance
of being wrong is worth more than a number - but it is fenced off, counted separately, and stays
distinguishable in each catalog's `coverage.by_channel`. Its rules and its arithmetic are in
"Channel `brute`" below.

## Type names are canonical Jagex names

`obj` (not item), `loc` (not object), `seq` (not animation), `spotanim` (not graphic/gfx),
`graphic` = 2D graphic, `inv`, `enum`, `struct`, `param`, `npc`, `interface`, `component`,
`varp` / `varbit` / `varc` / `varcstr` / `varclan` / `varbitclan` / `varclansetting` /
`varbitclansetting`, `clientscript` (placeholder prefix `cs2_`), `bas`, `hitmark`, `headbar`,
`cursor`, `mapelement`, `model`, `sound`, `midi`, `material`, `fontmetrics`, `quest`, `idk`,
`overlay`, `underlay`, `mapscene`, `skybox`, `quickchatoption`, `quickchatphrase`, `worldmap` -
40 catalogs, one per type the 727 cache holds.

### The eight types added 2026-09-01

The first 32 catalogs came from the RS3-949 name tables, so they covered the types those tables
name. These eight are the remainder: every other type the 727 cache has data for.
Seven of them have **no name source at all** - the RS3-949 dump names 42 types and none of them is
one of these, and the RS3 unpacked structural dumps (`idk.jsonl`, `overlay.jsonl`,
`underlay.jsonl`, `map-scene.jsonl`, `quick-chat-cat.jsonl`, `quick-chat-phrase.jsonl`) carry no
name field for a `struct` channel to compare against. Placeholder-only is therefore the correct
outcome for them, not a gap: there is nothing to prove a name from, and the one rule at the top of
this file forbids inventing one.

Their id spaces were read from the cache's own reference tables rather than from a decoder's
`size()`, because a decoder that walks a dense `0..lastArchive * filesPerArchive` range emits
defaults past the real end (the 15,617 phantom npcs, and why `fontmetrics` carries a `present`
flag). Any of them can be re-derived from the cache with
`./gradlew :tools:run --args="gameval dump <outDir>"`, whose presence check applies, or by reading
an index-255 reference table directly through `world.gregs.voidps.cache.Cache`.

| type | ids | where the id space comes from | names |
|---|---|---|---|
| `idk` | 652 (0..651) | config archive 3's file list in index 2's reference table; dense, and it matches the dump's 652 records (29 of which the 727 identity-kit decoder reads past the end of - a decode failure, not a missing id) | none: no name source |
| `overlay` | 248 (0..247) | config archive 4's file list; dense | none: no name source |
| `underlay` | 171 (0..170) | config archive 1's file list; dense | none: no name source |
| `mapscene` | 107 (0..106) | config archive 34's file list; dense | none: no name source |
| `skybox` | 10 (0..9) | config archive 29's file list; dense | none: no name source |
| `quickchatoption` | 242 | index 24 archive 0 (225 files, 0..224) **plus** index 25 archive 0 (17 files) addressed as `0x8000 \| file`, i.e. 32768..32784 | none: no name source |
| `quickchatphrase` | 1216 | index 24 archive 1 (1147 files, 0..1146) **plus** index 25 archive 1 (69 files, 0..61 and 63..69) addressed as `0x8000 \| file` | none: no name source |
| `worldmap` | 45 (0..44) | index 23's `details` archive file list; dense | 44 named by channel `hash`, see below |

Quick chat needed the most care in both directions. The dumper decodes both archives with
`present = { true }` over a `size()` that computes `lastArchive * 256 + lastFileId + ...`, so a
`gameval dump` reports **2805** records for each: ids 225..2804 (option) and 1147..2804 (phrase)
are decoder defaults with no file behind them and are not ids. In the other
direction the dump misses a whole segment: `QuickchatCategoryTypeList.list` and
`QuickchatMessageTypeList.listMessage` both branch on `id >= 32768` and read
`menuResource.getFile(archive, id and 0x7fff)` from index 25 instead of index 24, and
`QuickChatOptionDecoder.changeValues` ORs `0x8000` into every reference an id in that half makes.
Those high ids are real and the catalogs carry them. Note also that the client's own names for the
two types are *category* and *message*; the catalogs keep the `quickchatoption` /
`quickchatphrase` spelling this tree's decoders and dump already use.

Quick chat phrases hold their display **text** in the cache (`stringParts`). That is a
description, not a dev name, and slugifying it would manufacture exactly the plausible-looking
name this contract exists to forbid. It is not used.

### Index 5 (map squares): named by formula, no catalog

Index 5 archive names are built, never catalogued, so there is no `mapsquare.json` and no
placeholders for the 7,268 map archives. The name is a pure function of the region coordinates,
with no separator between the letter and the first coordinate:

    m<regionX>_<regionY>    terrain, height, overlay/underlay
    l<regionX>_<regionY>    placed locations (XTEA encrypted)
    n<regionX>_<regionY>    npc spawns
    um<regionX>_<regionY>   underwater terrain
    ul<regionX>_<regionY>   underwater locations

`MapRegion.getArchiveName(floorData, underwater, regionX, regionY)` in the 727 client composes the
first two and prefixes `u`; its callers ask for the npc archive directly. The formula's recall is
complete and checked: all 7,268 named index-5 archives are accounted for by these five shapes and
nothing else (2,407 `m`, 2,407 `l`, 1,208 `um`, 1,208 `ul`, 38 `n`). The server composes them
through `world.gregs.voidps.cache.MapSquare`, with `MapSquareTest` asserting both the spelling and
that recall against the cache. `docs/cache-archive-names.md` collects this formula and the other
built cache-name rules (indices 30, 31, 10).

### Index 23 (world_map): a catalog for the areas, a reference file for the rest

Index 23 holds three populations, and only one of them is a type:

- the `details` archive, 45 files - the world map **areas**. This is a real 727 type: it is
  `WorldMapDetailsDecoder`'s whole id space, and it is the int the `WORLDMAP_*` clientscript
  opcodes take (`WORLDMAP_SETMAP`, `WORLDMAP_GETCURRENTMAP`, `WORLDMAP_GETMAPNAME`,
  `WORLDMAP_GETSIZE`, ...). It gets `gamevals/worldmap.json`.
- 45 single-file archives, one per area, holding that area's map data;
- 40 `<area>_staticelements` archives holding 1,091 files, one per placed map icon.

The `worldmap` names come out of the cache itself, by channel `hash`. Each `details` record opens
with two strings, the name of its own map archive and the human label
(`WorldMapDetailsDecoder.read`: `map = readString(); name = readString()`). Lowercased - the form
index lookups hash - that first string is required to satisfy **both** of two independent hash
checks before it is emitted: it must equal the file's own name hash in index 23's reference table,
and it must equal the name hash of some archive in index 23. All 44 emitted names clear both. Id
38's record spells its map `ft3_zanaris_HQ` while the cache hashes `ft3_zanaris_hq`; the
hash-verified lowercase form is what the catalog carries. Id 10's map string is the literal
`"null"` (label `"Loading..."`) - a stringified null from Jagex's own build, and this contract does
not treat `"null"` as a name anywhere else either - so it stays the placeholder `worldmap_10`.

**Static elements get no catalog.** A `<area>_staticelements` file is one placed map icon whose
7-byte payload is `(regionHash, mapElementId, members)`; it is addressed by its JS5
`(archive, file)` coordinate and by nothing else. No protocol packet, no clientscript opcode and no
definition references it by id - the `WORLDMAP_*` element opcodes take `mapelement` ids from config
archive 36, which `mapelement.json` already names. Giving it a catalog would make it the first
whose "id" is a cache-layout coordinate rather than a type id, which is the same line index 5's
map squares sit on the far side of. So the answer is the same as for map squares: no catalog, no
placeholders.

The names those files carry are real, though, and 817 of them were recovered. They are preserved,
outside the catalog namespace, in `docs/reference/worldmap-cache-names.json`: every index-23
archive and file with its recorded name hash, the recovered name where there is one, its channel
and the rule that found it, plus each static-element file's decoded payload. Every name in it is
re-verified by recomputing `java_hash` against the cache's own name-hash tables, so it does not
rest on the recovery run's bookkeeping. It covers 86 of 86 archives and 731 of 1,181 files (641 of
the 1,091 static-element files), 679 by channel `hash` and 138 by channel `brute`. The 138 include
130 `quest_<questname>` icon names that no documented rule regenerates - they came out of a
lexicon search - which is precisely why the file exists rather than a recipe. The file is marked
`"kind": "cache-names"` and lives under `docs/`, so it is neither loaded by `GamevalCatalog` nor
bundled into `core`'s resources (`processResources` takes `gamevals/*.json` only).

None of these names can move into `mapelement.json`. Rule (iii) of that catalog's `hash` channel
requires the RS3-949 `mapelement` table to hold the same name at the same numeric id, and it does
not for any of the 138: the eight non-quest names are the area-scoped form of an element whose
struct name is already proven (`zanaris_market` over element 99 `market`, and so on - the reverse
hazard rule (ii) exists for), and each of the 130 `quest_*` names sits on an element id RS3 has
since recycled to something unrelated (727 element 834 is `quest_my_arms_big_adventure`; RS3-949
id 834 is `rand_resource_abyssal`).

### RS3 gameval tables with no 727 catalog

The RS3-949 dump names twelve more types. None of them has data in the 727 cache, so no catalog
exists for them and none may be invented (a catalog must cover the ids the 727 cache holds, and
there are none). Recorded here so the gap is a decision, not an oversight; a `gameval dump`'s `manifest.json`
is the witness for the config archives:

| RS3 table | canonical name | why there is no 727 catalog |
|---|---|---|
| `var_npc`, `varbit_npc` | `varn`, `varnbit` | config archive 61 (`varnpc`) dumps 0 records; there is no npc varbit archive |
| `var_object`, `varbit_object` | - | not in the 727 cache (post-2012 types) |
| `var_player_group` | - | config archive 80 (`vargroup`) dumps 0 records |
| `category` | `category` | 727 obj/loc/npc definitions carry no category field and no category config archive exists |
| `dbrow`, `dbtable` | `dbrow`, `dbtable` | no index-2 database archives in 727 |
| `achievement` | - | no such type in 727 |
| `stylesheet`, `ui_anim`, `ui_anim_curve` | - | NXT-era UI types, absent from 727 |

Naming one of these types is not a promise of a catalog. Should a later 727 dump turn up records
for one of these (a dumper fix, say), it gets a catalog like any other type, held to the same one
rule.

## Evidence channels

| channel | what it compares | strength |
|---|---|---|
| `hash` | a 727 cache name hash equals `String.hashCode(<name>)`: index-12 archive names as `"[cat,name]"` (clientscript), a type-index archive name (graphic/fontmetrics/midi), or an index-23 world-map static-element **file** name paired with the map element id in that file's own payload (mapelement) | proof (32-bit; see collision note) |
| `struct` | same id, and the 727 definition's identity-bearing fields equal the RS3 definition's | proof when the field set is identity-bearing for that type (per-type table below) |
| `cs2` | a 727 script and an RS3 script that are the *same script by `hash`* use the 727 id and the RS3 name at aligned instruction positions | proof when the two instruction streams align 1:1 and the operand's arg-type matches |
| `derived` | the name is a deterministic function of another proven name (spotanim ← seq; obj base ← its noted cert twin, `cert_` stripped) | proof, inherits the parent's evidence |
| `carry` | brought over from the pre-existing `com/rs/engine/variables` name tables (var* only) | accepted with provenance; sample-checked against `cs2` witnesses |
| `brute` | the name hash was recovered by dictionary-constrained search **and** independently corroborated by the asset's own content/structure; accepted only when the hit is unique in the searched space and clears the calibrated corroboration threshold | corroborated, **not** proof - weaker than `hash`; see "Channel `brute`" below |
| `manual` | a human decision with a stated reason, applied last | accepted with provenance; see "Manual decisions" below |

Collision note: a 32-bit hash against a dictionary of ~6.4k names and ~6.6k archives expects ~0.01
false pairs. Every hash match is additionally checked for argument-count agreement with the RS3
script of that name; a disagreement is reported, not silently accepted. Deterministic variants of
the table names (category swap, dropped qualifier/namespace token, `_2`/`_vN`/trailing-number
rewrites — each justified by proven pairs and ranked by its yield on the already-named set) were
added to the dictionary only while the expected false hits of the whole variant pass,
`|variants| x |727 hashes no table name hits| / 2^32`, stayed `<= 0.05`; a variant could only
claim an archive no table name hits.

### Channel `brute`

`hash` is a proof channel because its dictionary is tiny: the whole RS3-949 table plus a budgeted
variant pass, held to <= 0.05 expected false hits for the entire run. `brute` ran the same 32-bit
equality against a search space many orders of magnitude larger - generated prefix/suffix
compositions, family stems, ranked tokens, lexicon substrings. At that size **a hash hit is not a
name**: `N`
candidates against `T` targets throw off `N*T/2^32` hits by chance, and the negative control measured 24.7 false
hits per run on index 12 alone. The hit was therefore only the *candidate generator*, exactly as
same-id is for `struct`, and the one rule at the top of this file still decided: a name was emitted
only when the evidence, not the hit, carried it.

Two conditions, both required:

1. **Unique in the searched space.** Two candidate strings hitting one target rejects both, and
   both are listed. (One index-12 target was rejected this way: `12:702` =
   `[clientscript,lore_head_thunder]` / `[clientscript,openurl_nologin]`.)
2. **Independent corroboration from the asset itself**, of one of two shapes:
   - *Content agreement* (index 12, clientscripts). Score = the IDF-weighted count of the
     candidate's **non-anchor** tokens - the longest anchor prefix the search itself supplied is
     subtracted first - that appear in what the script actually touches: the names of the
     components, interfaces, objs, structs, params, enums and vars it references (resolved
     through our own catalogs), its own string literals, its bound interface/components, and its
     call-graph and id-window neighbours. IDF is over the 6,567 per-script context bags, so the
     threshold 2.0 demands a token carried by at most `e^-2` = 13.5% of scripts. A hit found at
     search iteration >= 1 is accepted only if the anchor it used has a source that is either a
     name already proven by another channel or a name this run's own gate has itself accepted -
     never an unaccepted guess (the chain rule). Ten of the 94 index-12 names rest on such a
     one-step chain; the negative control applies the identical rule, so the measured residual
     below already covers them.
   - *Cheapest generating region* (the asset indices). Name the smallest **pre-specifiable**
     region that generates the string and charge it exactly:
     `E = sum over targets in scope of |region(target)| / 2^32`. A region under this file's 0.05
     proof budget is accepted on budget alone; a region above it must additionally clear a
     neighbourhood-agreement score whose false-pass rate is *measured* by sampling that region
     against random families/archives. Restricting acceptance to a sub-region is legitimate
     post-hoc because the wider rule's false hits are uniform over its space.

**The acceptance arithmetic is measured, not assumed.** The content gate is calibrated three
ways: on the 1,580 already-solved 727 scripts (true name to its own script mean 9.91, 92.3% at or
above 2.0; the same names shuffled onto other scripts mean 0.40, 7.7% above), by holdout retention
(12 holdout runs, 3,307 true recoveries, 58.3% kept), and by a negative control - the identical
ladder run against pseudo-random target hashes over 64 seeds produced 1,580 false hits (24.7 per
run against the 26.1 predicted by `pairs/2^32`), of which exactly 9 passed the gate. That is the
number the channel reports: **0.141 expected wrong names per production run** on index 12 (95%
Poisson upper 0.252), 0.048 on index 6 and 0.243 on index 8.

So `brute` is honestly weaker than `hash`, and the catalogs let a reader see that.
`coverage.by_channel` counts it separately, and `coverage.brute_residual_false_expectation` states,
per catalog, how many of its `brute` names are expected to be wrong. **A `brute` name may never
claim an id another channel names** - `hash`, `struct` and `cs2` all win - and it was subject to
the same uniqueness and contradiction handling as every other channel.

Everything the gate rejected was a *candidate*, not a name, and none of it was ever written to a
catalog. Every accepted row was additionally re-verified against the 727 cache's own name hashes
before its name was allowed through: a literal that does not hash to its archive's recorded 727
name hash failed.

That run also produced 138 names for index 23 (`world_map`) *files*. No catalog covers a JS5
`(archive, file)` coordinate, so they are not in one; they are kept as reference data in
`docs/reference/worldmap-cache-names.json` - see "Index 23 (world_map)" above.

### Identity-bearing fields per type (channel `struct`)

Field names are the 727 dump's (`./gradlew :tools:run --args="gameval dump <outDir>"`) and the
RS3-949 unpacked dump's. "eq" = exactly equal after the stated
normalisation. Strings are compared case-sensitively after trimming; `null`/`"null"` names are
**not** identity (an unnamed asset matches nothing on name).

- **obj**: `name` eq (non-null, not "null") **and** at least one of: `notedId`/`notedTemplateId`
  structure eq, `options` eq, `modelId` eq, `cost` eq (`stackable` eq was removed as evidence
  2026-08-30: a near-constant binary field, name eq + stackable eq proves almost nothing beyond
  a same-id name match; it may still appear in evidence rows informationally). Noted/lent/bound template
  items follow their base item (`name` is inherited from the template in both caches).
  Additionally, channel `derived` (cert-twin, 2026-08-30): a base obj that is still a
  placeholder takes the name of its noted twin with the `cert_` prefix stripped, when ALL of:
  (i) the 727 records link both ways — base `noteId` == cert id with base `notedTemplateId`
  == -1, and the cert record links back with `noteId` == base id and a real
  `notedTemplateId`; (ii) the cert id's catalog name is proven by `struct`/`cs2` (never
  `manual` — overrides are applied after this rule) and starts with `cert_`; (iii) the 727
  display names of base and cert are identical; (iv) the derived name is unique in the
  catalog (a collision rejects the candidate and is reported). Sound because both caches
  derive a cert's dev name as `cert_` + the base's; the evidence row records channel
  `derived`, the cert id, its name and its proofs.
- **npc**: `name` eq (non-null) **and** at least one of: `modelIds` intersect non-empty,
  `options` eq, `size` eq **and** `renderEmote`/bas eq **and** the bas is not -1 on both sides (a
  shared -1 is a shared decoder default, not identity). Combat level is *not* identity (EoC rescaled it).
- **loc**: `name` eq (non-null, not "null") **and** at least one of: `modelIds` intersect
  non-empty, (`sizeX`,`sizeY`,`options`) eq. For nameless locs (`null`): `modelIds` eq **and**
  (`sizeX`,`sizeY`,`solid`/`clipType`) eq.
- **seq**: `frames` eq **and** `durations` eq (both non-empty). Empty/skeletal RS3 seqs never match.
- **spotanim**: `derived` from its `animationId`'s seq name. Duplicates (several spotanims on one
  seq) are numbered in ascending spotanim-id order: `name`, `name_2`, `name_3`… Additionally,
  RS3 `spot-anim` with the same id must have the same `animationId` **and** `modelId`; if it
  disagrees, emit the placeholder and report it.
- **enum**: `keyType` eq, `valueType` eq, and every 727 entry present in the RS3 map with an equal
  value (RS3 may be a superset), `defaultInt`/`defaultString` eq. Enums whose values are
  interface/component ids fail automatically unless the target interfaces are proven.
- **struct**: every 727 param present in RS3 with an equal value (RS3 may be a superset), at least
  one param.
- **param**: `type` eq and `defaultInt`/`defaultString` eq **and** a usage witness: at least one
  proven obj/npc/loc/struct that carries the param in both caches with an equal value.
- **inv**: `size` eq **and** (stock `ids` eq when both have stock, or a `cs2` witness).
- **interface**: carbon copy only — same id, same component count, and **every** component equal
  on (`type`, `contentType`, `parent`, `basePositionX/Y`, `baseWidth/Height`, position/size
  modes, `text`, `options`, `name`, graphic/model/anim ids where applicable). Then every
  `component` name of that interface carries over by index. Nothing partial.
- **var\***: `carry` from the pre-existing name tables; sample-checked with `cs2` witnesses.
- **model / graphic / sound / midi / material / fontmetrics**: raw-byte `sha1` eq with the RS3
  archive of the same id (the RS3 side needed a raw dump; where none was available the type stayed
  placeholder-only, which its `coverage` block shows).
- **bas / hitmark / headbar / cursor / mapelement / quest**: struct eq on the full decoded field
  set where a 727 decoder exists; otherwise placeholder-only.
- **mapelement**, additionally, channel `hash` (world-map static elements, 2026-08-31): index 23
  carries *file* name hashes, and every `<area>_staticelements` file is one map icon whose 7-byte
  payload the 727 client reads in `Class301.getStaticElements(Index, String, boolean)` as `readInt`
  regionHash, `readUnsignedShort` map element id, `readUnsignedByte` members - the id indexing config
  archive 36 (`SharedConfigsType.MAP_AREAS`), the table this catalog names. A solved file name is
  therefore a hash-verified name for the id in that file's own payload. An id is claimed when ALL of:
  (i) the file's name hash is solved and `java_hash(name)` re-checks against index 23's reference
  table, recomputed independently so a claim never rests on the search's own bookkeeping;
  (ii) every static-element file referencing that element id carries the same recovered name - two
  different names on one id mean the file names a world-map *entry*, not the element, and the id is
  rejected and reported; (iii) the RS3-949 `mapelement` gameval table holds that exact name at the
  same numeric id (the search dictionary was keyed on names and never saw the payload id, so the
  id agreement is independent corroboration, not circularity). Disagreement with another channel on
  an id is a contradiction and makes both placeholders, as everywhere else.
  Measured on the 727 cache: 1091 static-element files in 40 archives reference 991 distinct element
  ids; 503 file names are solved, covering 502 element ids. Against the independent `struct` channel
  the overlap is 204 (file, element) pairs on 203 element ids, of which **203 agree byte-for-byte and
  1 disagrees** - and that one disagreement is the reverse hazard itself (element 98 is
  `main_staticelements:300` = `jail` and `troll_stronghold_staticelements:1` =
  `troll_stronghold_jail`), so rule (ii) rejects it.
  That overlap is measured over the files whose names the search actually recovered, and it is a
  selection-biased sample: index-23 file names come in two shapes, the bare element name and an
  area-scoped `<area>_<elementname>` form, and the search recovered mostly the bare shape. Re-measured
  (2026-08-31 audit, independent reader and dictionary) against every RS3-949 mapelement name plus
  every `<area>_<name>` composition - 267,214 strings, expected chance hits 0.068 over the 1091
  targets - the overlap against `struct` is 389 (file, element) pairs, **203 agreeing and 186
  disagreeing**, and every one of the 186 is the area-scoped form of that element's own struct name.
  The struct overlap is therefore *not* what carries this channel; **rule (iii) is**. Not one of the
  177 area-scoped composites that hash-match a file on a struct-named id appears anywhere in the
  RS3-949 mapelement table, so rule (iii) rejects all 177; for a wrong name to survive it would have
  to be both a chance 32-bit hit and sit at its own element's RS3 id (~1/5809), putting the channel's
  residual at order 1e-5. The same audit re-derived the 40 archives, 1091 files and 991 element ids
  from the `details` archive alone and reproduced all 299 landed names exactly, with no sibling file
  on any landed id resolving to a different name. No normalisation (prefix, suffix or case) is
  applied or needed. Rule (iii) holds for 502 of the 503 solved names, the exception being that same
  `troll_stronghold_jail`, which RS3 has no mapelement name for. 16 claims have a sibling file on the
  same id whose hash is still unsolved; in that same configuration `struct` overlaps 12 ids and agrees
  on all 12, and each evidence row records `filesReferencingId` so a reader can see it. The channel
  claims 501 ids, 299 of them previously placeholders (icon elements with no map text, which `struct`
  cannot reach), taking mapelement from 424/1220 to 723/1220.

## Manual decisions

A handful of entries are channel `manual`: a human promoted a name the channels could not prove on
their own (`obj` 1041 `cert_yellow_partyhat` - the RS3 table lacks the entry, but the 727 dump's
name and noted link matched exactly) or demoted one they did prove (`npc` 117, a case-only match
judged a rename). Each was a *decision with a stated reason*, never a loophole: the one rule above
still applied, and the reason was recorded alongside the entry.

A rename made by hand today is the same kind of decision, and is held to the same standard. Edit
`gamevals/<type>.json`, keep `coverage` consistent with `entries`, and rebuild. The build refuses a
name that is another id's placeholder, a duplicate, a collision after identifier escaping, an empty
string or a coverage block that disagrees with the entries - so a careless edit fails loudly rather
than silently renaming a constant. `docs/gameval.md` lists every check.

## Output shape

```json
{
  "revision": 727,
  "type": "seq",
  "source": "rs3-949 gameval names crosswalked onto the 727 cache; see gamevals/CONTRACT.md",
  "date": "2026-08-30",
  "coverage": { "cache_ids": 17000, "named": 12000, "placeholder": 5000,
                "by_channel": { "struct": 11800, "cs2": 200 } },
  "entries": { "0": "swarm_walk", "1": "swarm_attack", "17": "seq_17" }
}
```

- `entries` covers **every id the 727 cache has** for that type, ascending, no gaps skipped.
- `component.json` keys are `"<interfaceId>:<componentId>"`; names are `<iface>:<comp>`.
- `clientscript.json` names keep Jagex's `[category,name]` form.
- Names are unique within a type. Two 727 ids proving to the same RS3 name was a contradiction:
  both became placeholders.
- `coverage` is part of the contract, not decoration: `cache_ids`, `named` and `placeholder` must
  agree with `entries`, and the build fails when they do not.
- `source` and `date` are provenance. `by_channel` says which channels carried the names, and
  `brute_residual_false_expectation`, where present, states how many of that catalog's `brute`
  names are expected to be wrong.
