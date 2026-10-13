from .codec import decode_tiles, encode_tiles, decode_effects, ConversionError

def decode_surface_compat(data, name):
    """
    Decode a released surface map and normalize the one legacy spelling that
    native 727 source cannot preserve: opcode-1 height byte 0.

    In the client, height bytes 0 and 1 both produce a zero explicit height
    delta (1 is folded to 0). Revision 727 canonically stores explicit-flat
    tiles as byte 1, so legacy byte 0 is converted to byte 1 without changing
    terrain semantics.
    """
    end, tiles, stats, maxima = decode_tiles(data, 4)

    bad = []
    if maxima['underlay'] > 174:
        bad.append(f"underlay {maxima['underlay']}")
    if maxima['settings'] > 32:
        bad.append(f"settings {maxima['settings']}")
    if maxima['shape'] > 11:
        bad.append(f"shape {maxima['shape']}")
    if bad:
        raise ConversionError(name + ': ' + ', '.join(bad))

    effects = []
    if end < len(data):
        effects, effect_end = decode_effects(data, end)
        if effect_end != len(data):
            raise ConversionError(name + ': effect tail was not fully consumed')

    raw_zero_count = stats['h0']
    if raw_zero_count:
        normalized = []
        for level, x, y, records in tiles:
            records = [
                ('h', 1) if record[0] == 'h' and record[1] == 0 else record
                for record in records
            ]
            normalized.append((level, x, y, records))
        tiles = normalized
        maxima['legacy_height_zero_normalized'] = raw_zero_count

        canonical = encode_tiles(tiles)
        _, decoded_again, _, _ = decode_tiles(canonical, 4)
        if decoded_again != tiles:
            raise ConversionError(name + ': canonical height normalization changed tile semantics')
    else:
        if encode_tiles(tiles) != data[:end]:
            raise ConversionError(name + ': tile round-trip failed')

    return tiles, effects, maxima, end
