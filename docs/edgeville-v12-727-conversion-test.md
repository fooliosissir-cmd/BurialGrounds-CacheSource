# Edgeville V1.2 -> revision 727 conversion test

Date: 2026-10-02
Branch: `dev`
Source: staged Stugger 718 region `12342`
Source region coordinates: `48_54`
Result: **PASS — format-compatible with expected revision normalization only**

## Source integrity

Verified SHA-256:

- surface map (`3469_map`): `dcd5c81cfcd105a4f3098ef0a5b0e46a9e95a34628d6513c41e6f381bbc41145`
- under-map (`3470_undermap`): `46e7292020f888064a3df40bb53974dfe4cdf9c30b27f80efc6c0c4f3e6541e2`
- land/locations (`3471_land`): `8df7be884c8bef92a94fc09f550d4ab63171744bd5b1ee0617b224fadbed0603`

The 667 and 718 payload bytes are identical; only the archive ids/XTEA sets differ.

## Surface terrain result

- decoded all **16,384** surface tiles
- tile stream ends at byte **33,489**
- remaining **693 bytes** decode completely as 727-supported environment data
- environment record opcodes: **0 (environment)** and **1 (point lights)**
- point lights: **35**
- 727 grammar round-trip: **byte-for-byte exact**
- no explicit-height-zero records
- maxima are inside the 727 encoder constraints:
  - overlay id: **239**
  - overlay shape: **11**
  - settings: **8**
  - underlay id: **164**
  - explicit height byte: **60**

## Land / object-placement result

- decoded **3,902** placements
- **399** distinct object ids
- object id range: **84..61,880**
- all local coordinates, planes, shapes and rotations decode inside valid map-format ranges
- source size: **9,672 bytes**
- 727-canonical re-encode: **9,661 bytes**
- canonical re-decode reproduces the exact same **3,902 placements**

The eleven-byte difference is fully explained by four empty object-id groups in the 718 source stream. They contain no placements, are discarded by the 727 object model, and have no gameplay or visual meaning:

- object id 1125
- object id 2358
- object id 2733
- object id 9196

This is a safe canonicalization, not lost placed-object data.

## Under-map result

The 718 file stores four planes, but only plane 0 contains data.

- first plane: **16,124 bytes**, exact 727-compatible tile round-trip
- remaining bytes: **12,288**
- those 12,288 bytes are exactly **three blank 64x64 planes** (all zero terminators)
- revision 727 underwater terrain is one plane, so the conversion correctly drops those three empty planes
- first-plane maxima remain inside 727 constraints:
  - overlay id: **42**
  - overlay shape: **10**
  - settings: **0**
  - underlay id: **164**
  - explicit height byte: **7**

## Conclusion

The Edgeville V1.2 source payload **passes the map-format conversion test**. Nothing failed to decode. Surface terrain and environment data round-trip exactly; land data round-trips semantically with only empty-group normalization; the under-map needs the expected 718-four-plane -> 727-one-plane normalization.

This does **not** yet mean the map is production-ready. The next gate is target-side integration:

1. choose a spare Custom Mode region (do not overwrite stock Edgeville / region 48_54);
2. emit native 727 `terrain.json`, `locs.json`, and `underwater_terrain.json`;
3. audit the 399 placed object ids against the 727 object definitions and remap any mismatches;
4. add the target region's map-index/XTEA metadata;
5. build a disposable Developer World cache;
6. test collision, bridges/planes, models/textures, minimap, desktop, and Android.
