/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5016

function cs2_5016(intArg0: number): void {
    let int1: struct = -1;
    let int2: number = 0;
    let int3: component = cs2_4969(intArg0);
    let int4: number = -1;
    let int5: number = -1;

    if (clanProfileFind() == 1) {
        int1 = cs2_5116(loadClanVarbit<2598>(), loadClanVarbit<2580>());
        if (int1 == -1) {
            return;
        }
        switch (intArg0) {
            case 4:
                int4 = structParam(int1, Param.citadel_skillplot_1_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_1_map_hotspot_y);
                break;
            case 5:
                int4 = structParam(int1, Param.citadel_skillplot_2_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_2_map_hotspot_y);
                break;
            case 6:
                int4 = structParam(int1, Param.citadel_skillplot_3_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_3_map_hotspot_y);
                break;
            case 7:
                int4 = structParam(int1, Param.citadel_skillplot_4_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_4_map_hotspot_y);
                break;
            case 8:
                int4 = structParam(int1, Param.citadel_skillplot_5_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_5_map_hotspot_y);
                break;
            case 9:
                int4 = structParam(int1, Param.citadel_skillplot_6_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_6_map_hotspot_y);
                break;
            case 10:
                int4 = structParam(int1, Param.citadel_skillplot_7_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_7_map_hotspot_y);
                break;
            case 11:
                int4 = structParam(int1, Param.citadel_skillplot_8_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_8_map_hotspot_y);
                break;
            case 12:
                int4 = structParam(int1, Param.citadel_skillplot_9_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_9_map_hotspot_y);
                break;
            case 13:
                int4 = structParam(int1, Param.citadel_skillplot_10_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_10_map_hotspot_y);
                break;
            case 14:
                int4 = structParam(int1, Param.citadel_skillplot_11_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_11_map_hotspot_y);
                break;
            case 15:
                int4 = structParam(int1, Param.citadel_skillplot_12_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_skillplot_12_map_hotspot_y);
                break;
            case 3:
                int4 = structParam(int1, Param.citadel_battlefield_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_battlefield_map_hotspot_y);
                break;
            case 102:
                int4 = structParam(int1, Param.citadel_welcome_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_welcome_map_hotspot_y);
                break;
            case 103:
                int4 = structParam(int1, Param.citadel_square_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_square_map_hotspot_y);
                break;
            case 100:
                int4 = structParam(int1, Param.citadel_portal_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_portal_map_hotspot_y);
                break;
            case 101:
                int4 = structParam(int1, Param.citadel_keep_map_hotspot_x);
                int5 = structParam(int1, Param.citadel_keep_map_hotspot_y);
                break;
        }
        ifSetPosition(int4, int5, 0, 0, int3);
    }
}
