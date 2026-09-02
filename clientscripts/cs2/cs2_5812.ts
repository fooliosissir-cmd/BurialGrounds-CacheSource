/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5812

function cs2_5812(intArg0: number, intArg1: number): number {
    let int2: number = 0;

    switch (intArg0) {
        case 23:
        case 147:
        case 167:
        case 249:
        case 294:
        case 961:
            if (intArg1 == 1 && varbit_fairyring_use == 1) {
                int2 = 1;
            }
            break;
        case 49:
            if (intArg1 == 1 && varbit_emote_music == 1) {
                int2 = 1;
            }
            break;
        case 59:
            if (intArg1 == 2 && varp_492 >= 4) {
                int2 = 1;
            }
            break;
        case 107:
            if (intArg1 == 1 && ((varp_176 >= 2 && varbit_dragonslayer_instructions_shield == 0) || varp_176 >= 10)) {
                int2 = 1;
            }
            break;
        case 178:
            if (intArg1 == 1 && varbit_brut_fishing_s > 0) {
                int2 = 1;
            }
            break;
        case 180:
            if (intArg1 == 1 && varbit_brut_craft_ship > 0) {
                int2 = 1;
            }
            break;
        case 177:
            if (intArg1 == 1 && varbit_brut_craft_ship > 0) {
                int2 = 1;
            }
            break;
        case 316:
            if (intArg1 == 1 && varbit_brut_fishing_s > 0) {
                int2 = 1;
            }
            break;
        case 321:
            if (intArg1 == 1 && varbit_brut_craft_ship > 0) {
                int2 = 1;
            }
            break;
        case 322:
            if (intArg1 == 1 && varbit_brut_smith_hasta > 0) {
                int2 = 1;
            }
            break;
        case 323:
            if (intArg1 == 1 && varbit_brut_herb_potion > 0) {
                int2 = 1;
            }
            break;
        case 175:
            if (intArg1 == 1 && (varp_76 >= 6 || varbit_3378 == 1)) {
                int2 = 1;
            }
            break;
        case 331:
        case 219:
            if (intArg1 == 2 && comlevel() >= Obj.obj_100) {
                int2 = 1;
            }
            break;
        case 248:
            if (intArg1 == 1 && varbit_kr_knightwaves_state == 8) {
                int2 = 1;
            }
            break;
        case 276:
        case 3011:
            if (intArg1 == 1 && varp_qp >= 33) {
                int2 = 1;
            }
            break;
        case 281:
            if (intArg1 == 1 && varbit_sos_emote_flap == 1 && varbit_sos_emote_doh == 1 && varbit_sos_emote_idea == 1 && varbit_sos_emote_stamp == 1) {
                int2 = 1;
            }
            break;
        case 285:
            if (intArg1 == 1 && varbit_vm_necklace == 1) {
                int2 = 1;
            }
            break;
        case 289:
            if (intArg1 == 1 && comlevel() >= Obj.iron_arrowheads) {
                int2 = 1;
            }
            break;
        case 300:
            if (intArg1 == 1 && cs2_4035() >= 153) {
                int2 = 1;
            }
            break;
        case 3000:
            if (intArg1 == 2) {
                if (dateMinutes() >= varp_451) {
                    int2 = 1;
                }
            } else if (intArg1 == 3 && (varp_qp >= varbit_tog_qp_before_return || cs2_4218() <= 0)) {
                int2 = 1;
            }
            break;
        case 3001:
        case 3013:
        case 3031:
        case 912:
        case 914:
        case 913:
            if (intArg1 == 1 && comlevel() >= Obj.iron_arrowheads) {
                int2 = 1;
            }
            break;
        case 3002:
            if (intArg1 == 1) {
                if (varbit_peng_spy_explain == 1) {
                    int2 = 1;
                }
            } else if (intArg1 == 2) {
                if (varbit_peng_spy_week_peng < 10) {
                    int2 = 1;
                }
            } else if (intArg1 == 3 && varbit_5275 < 50) {
                int2 = 1;
            }
            break;
        case 12:
            if (intArg1 == 1 && varbit_peng_spy_explain == 1) {
                int2 = 1;
            }
            break;
        case 3003:
            if (intArg1 == 1 && varbit_eviltree_interactions_today < 2) {
                int2 = 1;
            }
            break;
        case 3007:
            if (intArg1 == 1 && (varbit_crcs_agility_complete == 0 || varbit_crcs_magic_complete == 0 || varbit_crcs_ranged_complete == 0)) {
                int2 = 1;
            }
            break;
        case 3008:
            if (intArg1 == 2 && varp_1199 != dateRuneday()) {
                int2 = 1;
            }
            break;
        case 3010:
            if (intArg1 == 2 && dateMinutes() > varbit_6305) {
                int2 = 1;
            }
            break;
        case 3012:
            if (intArg1 == 1 && statBase(20) >= 50) {
                int2 = 1;
            }
            break;
        case 3015:
            if (intArg1 == 2 && (statBase(0) >= 65 || statBase(1) >= 65)) {
                int2 = 1;
            }
            break;
        case 3034:
            if (intArg1 == 1 && (statBase(2) + statBase(0) >= 130 || statBase(0) >= 99 || statBase(2) >= 99)) {
                int2 = 1;
            }
            break;
        case 610:
            if (intArg1 == 2 && varbit_ics_little_var >= 3) {
                int2 = 1;
            }
            break;
        case 448:
            if (intArg1 == 10 && varp_qp > 55) {
                int2 = 1;
            }
            break;
        case 466:
            if (intArg1 == 3 && (varp_76 >= 6 || varbit_3378 == 1)) {
                int2 = 1;
            }
            break;
        case 457:
            if (intArg1 == 5 && comlevel() >= Obj.ikov_shinykey) {
                int2 = 1;
            }
            break;
        case 497:
            if (intArg1 == 9 && varp_qp >= 101) {
                int2 = 1;
            }
            break;
        case 506:
            if (intArg1 == 4 && varp_qp >= 21) {
                int2 = 1;
            }
            break;
        case 911:
            if (intArg1 == 1 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 916:
        case 915:
            if (intArg1 == 1 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 513:
            if (intArg1 == 5 && (varbit_pest_points_old2 > 0 || varbit_pc_played_once == 1)) {
                int2 = 1;
            }
            break;
        case 518:
            if (intArg1 == 1 && varp_qp >= 13) {
                int2 = 1;
            }
            break;
        case 530:
            if (intArg1 == 4 && varp_qp >= 44) {
                int2 = 1;
            }
            break;
        case 656:
            if (intArg1 == 2 && varbit_thzfe_makecuredisease == 1) {
                int2 = 1;
            }
            break;
        case 818:
            if (intArg1 == 2 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 819:
            if (intArg1 == 2 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 820:
            if (intArg1 == 3 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 822:
            if (intArg1 == 3 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 928:
        case 933:
            if (intArg1 == 2 && varbit_fremsaga_skaldrun >= 3) {
                int2 = 1;
            }
            break;
        case 623:
            if (intArg1 == 2 && varbit_thigui_quest >= 20) {
                int2 = 1;
            }
            break;
        case 908:
            if (intArg1 == 1 && comlevel() >= structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.param_2233)) {
                int2 = 1;
            }
            break;
        case 447:
            if (intArg1 == 6 && varbit_cleanup_progress > 0) {
                int2 = 1;
            }
            break;
        case 659:
            if (intArg1 == 2 && varbit_myreque_2_quest >= 280) {
                int2 = 1;
            }
            break;
        case 449:
            if (intArg1 == 4 && varbit_troll_freed_eadgar != 0) {
                int2 = 1;
            }
            break;
        case 881:
            if (intArg1 == 2 && varp_205 >= 7 && varp_206 >= 7) {
                int2 = 1;
            }
            break;
        case 858:
            if (intArg1 == 2 && (varp_priestperil >= 60 || varbit_giantdwarf_quest >= 5)) {
                int2 = 1;
            }
            break;
        case 985:
            if (intArg1 == 1 && invTotal(Inv.inv, Obj.rcguild_tablet_blood) + invTotal(Inv.bank, Obj.rcguild_tablet_blood) > 0 && varbit_myq4_main_quest >= 490) {
                int2 = 1;
            }
            break;
        case 976:
            if (intArg1 == 1 && varbit_myq4_vyrewatch_cremate_count >= 200) {
                int2 = 1;
            }
            break;
        case 991:
            if (intArg1 == 1 && cs2_6034() >= 500) {
                int2 = 1;
            }
            break;
        case 980:
            if (intArg1 == 1 && statBase(1) >= 70 && (statBase(0) >= 70 || statBase(4) > 70)) {
                int2 = 1;
            }
            break;
        case 982:
            if (intArg1 == 3 && varbit_myq5_main >= 110) {
                int2 = 1;
            }
            break;
        default:
            int2 = 0;
            break;
    }
    return int2;
}
