/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4821

function cs2_4821(intArg0: number): Enum {
    switch (intArg0) {
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
            return Enum.clan_custom_2x2_hotspot_types_int2id;
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
            return Enum.clan_custom_3x3_hotspot_types_int2id;
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
            return Enum.clan_custom_4x4_hotspot_types_int2id;
        case 51:
            return Enum.clan_custom_5x5_hotspot_types_int2id;
        case 100:
            return Enum.clan_custom_blanket_partychair_int2id;
        case 101:
            return Enum.clan_custom_blanket_partytable_int2id;
        case 102:
            return Enum.clan_custom_blanket_flag_int2id;
        case 103:
            return Enum.clan_custom_blanket_pottedplant_int2id;
        case 104:
            return Enum.clan_custom_blanket_sundial_int2id;
        case 105:
            return Enum.clan_custom_blanket_keepflag_int2id;
        case 106:
            return Enum.clan_custom_blanket_keeptapestry_int2id;
        case 107:
            return Enum.clan_custom_blanket_keepbanner_int2id;
        case 108:
            return Enum.clan_custom_blanket_keepshield_int2id;
        case 109:
            return Enum.clan_custom_blanket_keepfireplace_int2id;
        case 110:
            return Enum.clan_custom_blanket_keeplvl0window_int2id;
        case 111:
            return Enum.clan_custom_blanket_keeplvl1window_int2id;
        case 112:
            return Enum.clan_custom_blanket_keeplvl0door_int2id;
        case 113:
            return Enum.clan_custom_blanket_keeppattern_int2id;
        default:
            return -1;
    }
}
