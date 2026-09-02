# Darkan cache source

The revision-727 game cache, unpacked into one file per asset: pretty-printed JSON for every
definition type, TypeScript for clientscripts, the decompressed bytes for everything else, plus
`index.json` per index with what the files cannot say (versions, compression, name hashes, keys) and
the gameval name catalogs in `gamevals/`. A server pointed at this tree (`CACHE_SOURCE_PATH`) builds
the packed cache from it on startup and serves it over JS5; an unedited tree rebuilds the original
cache byte for byte.

Format, layout, codecs and tooling: `docs/cache-source.md` in the `darkanrs/server` repository,
which pins this repository as the `cache-source` submodule. Edit here, or through the tools
(`tools cache ...`, the map and interface editors, `cs2`), and let the build do the packing.
