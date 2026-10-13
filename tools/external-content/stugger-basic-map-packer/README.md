# Stugger Basic Map Packer — Edgeville V1.2 example

Status: **quarantined source material; not part of the active revision-727 cache.**

This directory preserves the map payload supplied in the user-provided `Map Packer.zip`.
The outer ZIP contained the same pack twice byte-for-byte, so only one deduplicated copy is kept here.

The pack is Stugger's public Basic Map Packer example for revisions 667/718. Its included region is
**12342** (Edgeville area). Burial Grounds targets cache revision **727**, so these files must be
ported/tested in the Developer World rather than copied over the live 727 region.

## Included payloads

### Revision 667
- `data/mapfiles/667/12342/624_map`
- `data/mapfiles/667/12342/625_land`
- `data/mapfiles/667/12342/2491_undermap`

### Revision 718
- `data/mapfiles/718/12342/3469_map`
- `data/mapfiles/718/12342/3470_undermap`
- `data/mapfiles/718/12342/3471_land`

The 667 and 718 payload bytes are identical; only the revision-specific archive filenames differ.

## Region 12342 XTEAs

- 667: `[733680141, -1440926564, 447905675, 1806603117]`
- 718: `[984072594, 1745205991, -2099139242, -991644832]`

## Verified SHA-256

- map payload: `dcd5c81cfcd105a4f3098ef0a5b0e46a9e95a34628d6513c41e6f381bbc41145`
- land payload: `8df7be884c8bef92a94fc09f550d4ab63171744bd5b1ee0617b224fadbed0603`
- undermap payload: `46e7292020f888064a3df40bb53974dfe4cdf9c30b27f80efc6c0c4f3e6541e2`

The original ZIP also contained `Stuggers Map Packer.jar`; it is intentionally not injected into
the active cache or runtime. This import preserves the map source payloads needed for 727 porting.
