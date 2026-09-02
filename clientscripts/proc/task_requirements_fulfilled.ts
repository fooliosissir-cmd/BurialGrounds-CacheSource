/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,task_requirements_fulfilled]

function task_requirements_fulfilled(intArg0: number): number {
    let int1: number = 0;
    let int2: struct = enumOp(type_int, type_struct, Enum.enum_3483, intArg0);

    if (structParam(int2, Param.param_1270) != 4094) {
        return ql4_requirements(1, structParam(int2, Param.param_1270));
    }
    let int3: struct = -1;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 1;

    while (int6 <= 12) {
        switch (int6) {
            case 1:
                int4 = structParam(int2, Param.task_requirement_1_type);
                int5 = structParam(int2, Param.task_requirement_1_value);
                break;
            case 2:
                int4 = structParam(int2, Param.task_requirement_2_type);
                int5 = structParam(int2, Param.task_requirement_2_value);
                break;
            case 3:
                int4 = structParam(int2, Param.param_1298);
                int5 = structParam(int2, Param.param_1299);
                break;
            case 4:
                int4 = structParam(int2, Param.param_1300);
                int5 = structParam(int2, Param.param_1301);
                break;
            case 5:
                int4 = structParam(int2, Param.param_1302);
                int5 = structParam(int2, Param.param_1303);
                break;
            case 6:
                int4 = structParam(int2, Param.param_1304);
                int5 = structParam(int2, Param.param_1305);
                break;
            case 7:
                int4 = structParam(int2, Param.param_1306);
                int5 = structParam(int2, Param.param_1307);
                break;
            case 8:
                int4 = structParam(int2, Param.param_1308);
                int5 = structParam(int2, Param.param_1309);
                break;
            case 9:
                int4 = structParam(int2, Param.param_1310);
                int5 = structParam(int2, Param.param_1311);
                break;
            case 10:
                int4 = structParam(int2, Param.param_1312);
                int5 = structParam(int2, Param.param_1313);
                break;
            case 11:
                int4 = structParam(int2, Param.param_2227);
                int5 = structParam(int2, Param.param_2228);
                break;
            case 12:
                int4 = structParam(int2, Param.param_2229);
                int5 = structParam(int2, Param.param_2230);
                break;
        }
        if (int4 > 0 && int4 < 60) {
            if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, int4)) < int5) {
                return 0;
            }
        } else if (int4 == 60) {
            int3 = task_get_data(int5);
            if (int3 == -1) {
                return 0;
            }
            if (task_get_progress(int5) != 2) {
                return 0;
            }
        } else if (int4 == 61 && cs2_2193(int5) != 2) {
            return 0;
        }
        if (int4 == 0) {
            int6 = 13;
        } else {
            int6 = int6 + 1;
        }
    }

    if (comlevel() < structParam(int2, Param.param_2233)) {
        return 0;
    }

    switch (intArg0) {
        case 12:
            if (varbit_peng_spy_explain == 0) {
                return 0;
            }
            break;
        case 23:
            if (varbit_fairyring_use == 0) {
                return 0;
            }
            break;
        case 49:
            if (varbit_emote_music == 0) {
                return 0;
            }
            break;
        case 59:
            if (varp_492 < 4) {
                return 0;
            }
            break;
        case 107:
            if (varp_176 < 2 || (varbit_dragonslayer_instructions_shield == 1 && varp_176 < 10)) {
                return 0;
            }
            break;
        case 147:
            if (varbit_fairyring_use == 0) {
                return 0;
            }
            break;
        case 167:
            if (varbit_fairyring_use == 0) {
                return 0;
            }
            break;
        case 175:
            if (varp_76 < 6 && varbit_3378 == 0) {
                return 0;
            }
            break;
        case 177:
            if (varbit_brut_craft_ship == 0) {
                return 0;
            }
            break;
        case 178:
            if (varbit_brut_fishing_s == 0) {
                return 0;
            }
            break;
        case 180:
            if (varbit_brut_craft_ship == 0) {
                return 0;
            }
            break;
        case 316:
            if (varbit_brut_fishing_s == 0) {
                return 0;
            }
            break;
        case 321:
            if (varbit_brut_craft_ship == 0) {
                return 0;
            }
            break;
        case 322:
            if (varbit_brut_smith_hasta == 0) {
                return 0;
            }
            break;
        case 323:
            if (varbit_brut_herb_potion == 0) {
                return 0;
            }
            break;
        case 219:
            if (comlevel() < Obj.obj_100) {
                return 0;
            }
            break;
        case 331:
            if (comlevel() < Obj.obj_100) {
                return 0;
            }
            break;
        case 248:
            if (varbit_kr_knightwaves_state < 8) {
                return 0;
            }
            break;
        case 249:
            if (varbit_fairyring_use == 0) {
                return 0;
            }
            break;
        case 276:
            if (varp_qp < 33) {
                return 0;
            }
            break;
        case 281:
            if (varbit_sos_emote_flap < 1) {
                return 0;
            }
            if (varbit_sos_emote_doh < 1) {
                return 0;
            }
            if (varbit_sos_emote_idea < 1) {
                return 0;
            }
            if (varbit_sos_emote_stamp < 1) {
                return 0;
            }
            break;
        case 285:
            if (varbit_vm_necklace < 1) {
                return 0;
            }
            break;
        case 289:
            if (comlevel() < Obj.iron_arrowheads) {
                return 0;
            }
            break;
        case 294:
            if (varbit_fairyring_use == 0) {
                return 0;
            }
            break;
        case 300:
            if (cs2_4035() < 153) {
                return 0;
            }
            break;
        case 3000:
            if (dateMinutes() < varp_451) {
                return 0;
            }
            if (varp_qp < varbit_tog_qp_before_return && cs2_4218() > 0) {
                return 0;
            }
            break;
        case 3001:
            if (comlevel() < Obj.iron_arrowheads) {
                return 0;
            }
            break;
        case 3002:
            if (varbit_peng_spy_week_peng == 10) {
                return 0;
            }
            if (varbit_5275 == 50) {
                return 0;
            }
            if (varbit_peng_quest < 135) {
                return 0;
            }
            if (varbit_peng_spy_explain == 0) {
                return 0;
            }
            break;
        case 3003:
            if (varbit_eviltree_interactions_today >= 2) {
                return 0;
            }
            break;
        case 3005:
            if (stat(21) < 17) {
                return 0;
            }
            break;
        case 3007:
            if (varbit_crcs_agility_complete != 0 && varbit_crcs_magic_complete != 0 && varbit_crcs_ranged_complete != 0) {
                return 0;
            }
            break;
        case 3008:
            if (varp_1199 == dateRuneday()) {
                return 0;
            }
            break;
        case 3009:
            if (varbit_firedup_quest < 90) {
                return 0;
            }
            break;
        case 3010:
            if (dateMinutes() < varbit_6305) {
                return 0;
            }
            break;
        case 3011:
            if (varp_qp < 33) {
                return 0;
            }
            break;
        case 3012:
            if (statBase(20) < 50) {
                return 0;
            }
            break;
        case 3013:
            if (comlevel() < Obj.iron_arrowheads) {
                return 0;
            }
            break;
        case 3015:
            if (statBase(0) < 65 && statBase(1) < 65) {
                return 0;
            }
            break;
        case 3031:
            if (comlevel() < Obj.obj_48) {
                return 0;
            }
            break;
        case 3034:
            if (statBase(2) + statBase(0) < 130 && statBase(0) < 99 && statBase(2) < 99) {
                return 0;
            }
            break;
        case 3500:
            if (cs2_4098() != 3500) {
                return 0;
            }
            break;
        case 3501:
            if (cs2_4098() != 3501) {
                return 0;
            }
            break;
        case 3505:
            if (cs2_4098() != 3505) {
                return 0;
            }
            break;
        case 3511:
            if (cs2_4098() != 3511) {
                return 0;
            }
            break;
        case 3502:
            if (cs2_4098() != 3502) {
                return 0;
            }
            break;
        case 3503:
            if (cs2_4098() != 3503) {
                return 0;
            }
            break;
        case 3504:
            if (cs2_4098() != 3504) {
                return 0;
            }
            break;
        case 3506:
            if (cs2_4098() != 3506) {
                return 0;
            }
            break;
        case 3508:
            if (cs2_4098() != 3508) {
                return 0;
            }
            break;
        case 3509:
            if (cs2_4098() != 3509) {
                return 0;
            }
            break;
        case 3507:
            if (cs2_4098() != 3507) {
                return 0;
            }
            break;
        case 3523:
            if (cs2_4098() != 3523) {
                return 0;
            }
            break;
        case 3510:
            if (cs2_4098() != 3510) {
                return 0;
            }
            break;
        case 3512:
            if (cs2_4098() != 3512) {
                return 0;
            }
            break;
        case 3513:
            if (cs2_4098() != 3513) {
                return 0;
            }
            break;
        case 3514:
            if (cs2_4098() != 3514) {
                return 0;
            }
            break;
        case 3515:
            if (varp_tutorial < 135 || varp_tutorial > 160 || varbit_tutorial3_tool == 0 || varbit_tutorial3_tool == 1) {
                return 0;
            }
            break;
        case 3516:
            if (varp_tutorial < 135 || varp_tutorial > 160 || varbit_tutorial3_tool == 2 || varbit_tutorial3_tool == 3) {
                return 0;
            }
            break;
        case 3517:
            if (varp_tutorial < 140 || varbit_tutorial3_tool == 0 || varbit_tutorial3_tool == 1 || statBase(8) > 1) {
                return 0;
            }
            break;
        case 3518:
            if (varp_tutorial < 140 || varbit_tutorial3_tool == 2 || varbit_tutorial3_tool == 3 || statBase(14) > 1) {
                return 0;
            }
            break;
        case 3519:
            if (cs2_4098() != 3519) {
                return 0;
            }
            break;
        case 3520:
            if (cs2_4098() != 3521 || varbit_tutorial3_postquest > 2) {
                return 0;
            }
            break;
        case 3521:
            if (cs2_4098() != 3521 || varbit_tutorial3_postquest != 5) {
                return 0;
            }
            break;
        case 858:
            if (varp_priestperil < 60 && varbit_giantdwarf_quest < 5) {
                return 0;
            }
            break;
        case 881:
            if (varp_205 < 7 || varp_206 < 7) {
                return 0;
            }
            break;
        case 656:
            if (varbit_thzfe_makecuredisease != 1) {
                return 0;
            }
            break;
        case 623:
            if (varbit_thigui_quest < 20) {
                return 0;
            }
            break;
        case 659:
            if (varbit_myreque_2_quest < 280) {
                return 0;
            }
            break;
        case 961:
            if (varbit_fairyring_use == 0) {
                return 0;
            }
            break;
        case 985:
            if (invTotal(Inv.inv, Obj.rcguild_tablet_blood) + invTotal(Inv.bank, Obj.rcguild_tablet_blood) == 0 || varbit_myq4_main_quest < 490) {
                return 0;
            }
            break;
        case 976:
            if (varbit_myq4_vyrewatch_cremate_count < 200) {
                return 0;
            }
            break;
        case 991:
            if (cs2_6034() < 500) {
                return 0;
            }
            break;
        case 980:
            if (statBase(1) < 70 || (statBase(0) < 70 && statBase(4) < 70)) {
                return 0;
            }
            break;
        case 982:
            if (varbit_myq5_main < 110) {
                return 0;
            }
            break;
        default:
            return 1;
    }
    return 1;
}
