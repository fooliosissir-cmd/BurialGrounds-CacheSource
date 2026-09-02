/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4906

function cs2_4906(intArg0: number): void {
    let int1: struct = -1;
    let int2: struct = -1;
    let int3: coord = 0;
    let int4: component = cs2_4968(intArg0);
    let int5: number = -1;
    let int6: number = -1;
    let int7: number = 1;

    if (varc_clan_stronghold_main_map_next_week == 1) {
        int7 = 0;
    }
    let int8: number = 0;
    let int9: number = 0;
    let int10: component = -1;

    if (clanProfileFind() == 1) {
        if (varc_clan_stronghold_main_map_next_week == 0) {
            int1 = cs2_5116(loadClanVarbit<2598>(), loadClanVarbit<2580>());
            int2 = cs2_5117(loadClanVarbit<2598>(), loadClanVarbit<2580>());
        } else {
            int1 = cs2_5116(loadClanVarbit<2074>(), loadClanVarbit<2580>());
            int2 = cs2_5117(loadClanVarbit<2074>(), loadClanVarbit<2580>());
        }
        if (int1 == -1) {
            return;
        }
        if (int2 == -1) {
            return;
        }
        int8 = cs2_4978(intArg0);
        if (int8 < 4) {
            int8 = intArg0;
        }
        if (int7 == 1) {
            int9 = intArg0;
        } else {
            int9 = int8;
        }
        switch (int9) {
            case 4:
                int5 = structParam(int1, Param.citadel_skillplot_1_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_1_map_hotspot_y);
                break;
            case 5:
                int5 = structParam(int1, Param.citadel_skillplot_2_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_2_map_hotspot_y);
                break;
            case 6:
                int5 = structParam(int1, Param.citadel_skillplot_3_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_3_map_hotspot_y);
                break;
            case 7:
                int5 = structParam(int1, Param.citadel_skillplot_4_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_4_map_hotspot_y);
                break;
            case 8:
                int5 = structParam(int1, Param.citadel_skillplot_5_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_5_map_hotspot_y);
                break;
            case 9:
                int5 = structParam(int1, Param.citadel_skillplot_6_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_6_map_hotspot_y);
                break;
            case 10:
                int5 = structParam(int1, Param.citadel_skillplot_7_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_7_map_hotspot_y);
                break;
            case 11:
                int5 = structParam(int1, Param.citadel_skillplot_8_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_8_map_hotspot_y);
                break;
            case 12:
                int5 = structParam(int1, Param.citadel_skillplot_9_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_9_map_hotspot_y);
                break;
            case 13:
                int5 = structParam(int1, Param.citadel_skillplot_10_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_10_map_hotspot_y);
                break;
            case 14:
                int5 = structParam(int1, Param.citadel_skillplot_11_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_11_map_hotspot_y);
                break;
            case 15:
                int5 = structParam(int1, Param.citadel_skillplot_12_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_skillplot_12_map_hotspot_y);
                break;
            case 3:
                int5 = structParam(int1, Param.citadel_battlefield_map_hotspot_x);
                int6 = structParam(int1, Param.citadel_battlefield_map_hotspot_y);
                break;
            case 2:
                int5 = structParam(int1, Param.citadel_keep_map_hotspot_x) + 14;
                int6 = structParam(int1, Param.citadel_keep_map_hotspot_y);
                break;
            case 1:
                int5 = structParam(int1, Param.citadel_keep_map_hotspot_x) - 14;
                int6 = structParam(int1, Param.citadel_keep_map_hotspot_y);
                break;
            case 16:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_1_relative_coord);
                break;
            case 17:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_2_relative_coord);
                break;
            case 18:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_3_relative_coord);
                break;
            case 19:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_4_relative_coord);
                break;
            case 20:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_5_relative_coord);
                break;
            case 21:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_6_relative_coord);
                break;
            case 22:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_7_relative_coord);
                break;
            case 23:
                int3 = structParam(int2, Param.citadel_2x2_hotspot_8_relative_coord);
                break;
            case 24:
                int3 = structParam(int2, Param.citadel_3x3_hotspot_1_relative_coord);
                break;
            case 25:
                int3 = structParam(int2, Param.citadel_3x3_hotspot_2_relative_coord);
                break;
            case 26:
                int3 = structParam(int2, Param.citadel_3x3_hotspot_3_relative_coord);
                break;
            case 27:
                int3 = structParam(int2, Param.citadel_3x3_hotspot_4_relative_coord);
                break;
            case 28:
                int3 = structParam(int2, Param.citadel_3x3_hotspot_5_relative_coord);
                break;
            case 29:
                int3 = structParam(int2, Param.citadel_4x4_hotspot_1_relative_coord);
                break;
            case 30:
                int3 = structParam(int2, Param.citadel_4x4_hotspot_2_relative_coord);
                break;
            case 31:
                int3 = structParam(int2, Param.citadel_4x4_hotspot_3_relative_coord);
                break;
            case 32:
                int3 = structParam(int2, Param.citadel_4x4_hotspot_4_relative_coord);
                break;
            case 33:
                int3 = structParam(int2, Param.citadel_4x4_hotspot_5_relative_coord);
                break;
            case 34:
                int3 = structParam(int2, Param.citadel_5x5_hotspot_1_relative_coord);
                break;
            case 35:
                int3 = structParam(int2, Param.param_1778);
                break;
            case 36:
                int3 = structParam(int2, Param.param_1779);
                break;
            case 37:
                int3 = structParam(int2, Param.param_1780);
                break;
            case 38:
                int3 = structParam(int2, Param.param_1781);
                break;
            case 39:
                int3 = structParam(int2, Param.param_1782);
                break;
            case 40:
                int3 = structParam(int2, Param.param_1783);
                break;
            case 41:
                int3 = structParam(int2, Param.param_1784);
                break;
            case 42:
                int3 = structParam(int2, Param.param_1785);
                break;
            case 43:
                int3 = structParam(int2, Param.param_1786);
                break;
            case 44:
                int3 = structParam(int2, Param.param_1787);
                break;
            case 45:
                int3 = structParam(int2, Param.param_1788);
                break;
            case 46:
                int3 = structParam(int2, Param.param_1789);
                break;
            case 47:
                int3 = structParam(int2, Param.param_1790);
                break;
            case 48:
                int3 = structParam(int2, Param.param_1791);
                break;
        }
        if (int3 != 0 && int3 != -1) {
            [int5, int6] = cs2_4909(int3);
            int5 = int5 + 14;
            int6 = int6 + 3;
        }
        ifSetPosition(int5, int6, 0, 0, int4);
        int10 = cs2_5213(intArg0);
        if (int10 != -1) {
            ifSetPosition(int5, int6, 0, 0, int10);
        }
    }
}
