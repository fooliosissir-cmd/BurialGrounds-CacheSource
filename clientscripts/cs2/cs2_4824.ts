/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4824

function cs2_4824(intArg0: number): Enum {
    switch (intArg0) {
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
            return Enum.clan_custom_2x2_hotspot_types_id2string;
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
            return Enum.clan_custom_3x3_hotspot_types_id2string;
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
            return Enum.clan_custom_4x4_hotspot_types_id2string;
        case 51:
            return Enum.clan_custom_5x5_hotspot_types_id2string;
        case 100:
            return Enum.clan_custom_blanket_partychair_id2string;
        case 101:
            return Enum.clan_custom_blanket_partytable_id2string;
        case 102:
            return Enum.clan_custom_blanket_flag_id2string;
        case 103:
            return Enum.clan_custom_blanket_pottedplant_id2string;
        case 104:
            return Enum.clan_custom_blanket_sundial_id2string;
        case 105:
            return Enum.clan_custom_blanket_keepflag_id2string;
        case 106:
            return Enum.clan_custom_blanket_keeptapestry_id2string;
        case 107:
            return Enum.clan_custom_blanket_keepbanner_id2string;
        case 108:
            return Enum.clan_custom_blanket_keepshield_id2string;
        case 109:
            return Enum.clan_custom_blanket_keepfireplace_id2string;
        case 110:
            return Enum.clan_custom_blanket_keeplvl0window_id2string;
        case 111:
            return Enum.clan_custom_blanket_keeplvl1window_id2string;
        case 112:
            return Enum.clan_custom_blanket_keeplvl0door_id2string;
        case 113:
            return Enum.clan_custom_blanket_keeppattern_id2string;
        default:
            return -1;
    }
}
