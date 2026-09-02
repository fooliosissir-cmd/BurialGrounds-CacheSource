/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5176

function cs2_5176(): void {
    let int0: number = -1;
    let int1: number = 60;
    let int2: number = 120;
    let int3: number = 34;
    let int4: number = 60;
    let int5: number = 10;
    let int6: number = 6;
    let int7: number = 60;
    let int8: number = 60;
    let int9: number = int6;
    let int10: number = 0;
    let int11: number = -1;
    let int12: number = -1;
    let int13: number = int3 - 21;
    let int14: number = 3;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: graphic = Graphic.aif_bronze_icon_button_1_0;
    let int19: graphic = Graphic.aif_bronze_icon_button_1_1;
    let int20: graphic = Graphic.aif_bronze_icon_button_1_2;
    let int21: graphic = Graphic.aif_bronze_icon_button_1_3;
    let int22: number = 5527;
    let int23: graphic = -1;
    let int24: number = 0;
    let int25: number = enumOp(type_int, type_int, Enum.hcape_enum_city_starting_goal, varbit_hcape_p_city);
    let int26: struct = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, int25);

    while (int26 != -1) {
        if (structParam(int26, Param.hcape_goal_type) == 0) {
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9, 0, 0, 0);
            ccSetSize(int1, int4, 0, 0);
            if (int25 == varc_hcape_active_goal) {
                int23 = int21;
            } else {
                int23 = int18;
            }
            ccSetGraphic(int23);
            ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int19]));
            ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int23]));
            ccSetOnClick(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int20]));
            ccSetOnRelease(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int23]));
            ccSetOp(1, "Goal details");
            ccSetOnOpt(hook(cs2_5179, "i", [int25]));
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9, 0, 0, 0);
            ccSetGraphic(structParam(int26, Param.hcape_goal_image));
            ccSetSize(int1, int4, 0, 0);
            int9 = int9 + int1 + int5;
        } else {
            int12 = int10;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9, 0, 0, 0);
            ccSetSize(7, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + 7, 0, 0, 0);
            ccSetSize(int2 - 14, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int2 - 7, 0, 0, 0);
            ccSetSize(7, 7, 0, 0);
            ccSethflip(true);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9, 7, 0, 0);
            ccSetSize(7, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + 7, 7, 0, 0);
            ccSetSize(int2 - 14, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int2 - 7, 7, 0, 0);
            ccSetSize(7, 7, 0, 0);
            ccSethflip(true);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9, 14, 0, 0);
            ccSetSize(7, int13, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + 7, 14, 0, 0);
            ccSetSize(int2 - 14, int13, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int2 - 7, 14, 0, 0);
            ccSetSize(7, int13, 0, 0);
            ccSethflip(true);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9, int3 - 7, 0, 0);
            ccSetSize(7, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + 7, int3 - 7, 0, 0);
            ccSetSize(int2 - 14, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int2 - 7, int3 - 7, 0, 0);
            ccSetSize(7, 7, 0, 0);
            ccSethflip(true);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int14, int3, 0, 0);
            ccSetSize(7, int4 - int3 - 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int14 + 7, int3, 0, 0);
            ccSetSize(int2 - 14 - int14 - int14, int4 - int3 - 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int2 - 7 - int14, int3, 0, 0);
            ccSetSize(7, int4 - int3 - 7, 0, 0);
            ccSethflip(true);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int14, int4 - 7, 0, 0);
            ccSetSize(7, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int14 + 7, int4 - 7, 0, 0);
            ccSetSize(int2 - 14 - int14 - int14, 7, 0, 0);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int2 - 7 - int14, int4 - 7, 0, 0);
            ccSetSize(7, 7, 0, 0);
            ccSethflip(true);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 4, int10);
            ccSetPosition(int9, 0, 0, 0);
            ccSetSize(int2, int3, 0, 0);
            ccSetText("Tasks Complete");
            ccSetTextAlign(1, 1, 0);
            ccSetColour(colour(0xEBE0BC));
            ccSetTextFont(Graphic.verdana_11pt_regular);
            int10 = int10 + 1;
            switch (int25) {
                case 4:
                    int15 = 56;
                    if (cs2_5200(int25) == 1) {
                        int16 = 56;
                    } else {
                        int16 = varc_hcape_task_count;
                    }
                    break;
                case 8:
                    int15 = 17;
                    if (cs2_5200(int25) == 1) {
                        int16 = 17;
                    } else {
                        int16 = varc_hcape_task_count;
                    }
                    break;
                case 12:
                    int15 = 11;
                    if (cs2_5200(int25) == 1) {
                        int16 = 11;
                    } else {
                        int16 = varc_hcape_task_count;
                    }
                    break;
            }
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int14 + 7, int3, 0, 0);
            ccSetSize(int2 - int14 - int14 - 14, int4 - int3 - 7, 0, 0);
            ccSetGraphic(Graphic.aif_resources_progress_bar_2);
            int10 = int10 + 1;
            int17 = (int2 - int14 - int14 - 14) * int16 / int15;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetPosition(int9 + int14 + 7, int3, 0, 0);
            ccSetSize(int17, int4 - int3 - 7, 0, 0);
            ccSetGraphic(Graphic.aif_resources_progress_bar_6);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 4, int10);
            ccSetPosition(int9, int3, 0, 0);
            ccSetSize(int2, int4 - int3 - 7, 0, 0);
            ccSetText(tostring(int16) + " of " + tostring(int15));
            ccSetTextAlign(1, 1, 0);
            ccSetColour(colour(0xEBE0BC));
            ccSetTextFont(Graphic.verdana_11pt_regular);
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 3, int10);
            ccSetPosition(int9, 0, 0, 0);
            ccSetSize(int2, int4, 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x000000));
            ccSetTrans(255);
            if (int25 == varc_hcape_active_goal) {
                int24 = 4;
            } else {
                int24 = 1;
            }
            ccHookMouseEnter(hook(cs2_5177, "ii", [int12, 2]));
            ccHookMouseExit(hook(cs2_5177, "ii", [int12, int24]));
            ccSetOnClick(hook(cs2_5177, "ii", [int12, 3]));
            ccSetOnRelease(hook(cs2_5177, "ii", [int12, int24]));
            ccSetOp(1, "Goal details");
            ccSetOnOpt(hook(cs2_5179, "i", [int25]));
            int9 = int9 + int2 + int5;
        }
        if (cs2_5200(int25) == 1) {
            int10 = int10 + 1;
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetSize(int7, int8, 0, 0);
            ccSetPosition(int9 - int5 - int7, int4 - int7, 0, 0);
            ccSetGraphic(Graphic.aif_herald_cape_icons_26);
        }
        int25 = structParam(int26, Param.hcape_goal_next_id);
        int26 = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, int25);
        int10 = int10 + 1;
    }
    int25 = 14;
    int26 = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, int25);

    while (int26 != -1) {
        if (structParam(int26, Param.hcape_goal_hide_if_incomplete) == 1 && cs2_5200(int25) == 0) {
            int25 = structParam(int26, Param.hcape_goal_next_id);
            int26 = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, int25);
        } else {
            ccCreate(Component.interface_1122.component_1122_82, 5, int10);
            ccSetSize(int1, int4, 0, 0);
            ccSetPosition(int9, 0, 0, 0);
            if (int25 == varc_hcape_active_goal) {
                int23 = int21;
            } else {
                int23 = int18;
            }
            ccSetGraphic(int23);
            ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int19]));
            ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int23]));
            ccSetOnClick(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int20]));
            ccSetOnRelease(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int23]));
            ccSetOp(1, "Goal details");
            if (varc_hcape_current_tier > 3) {
                ccSetOnOpt(hook(cs2_5179, "i", [int25]));
                int10 = int10 + 1;
                ccCreate(Component.interface_1122.component_1122_82, 5, int10);
                ccSetGraphic(structParam(int26, Param.hcape_goal_image));
                ccSetSize(int1, int4, 0, 0);
                ccSetPosition(int9, 0, 0, 0);
                if (cs2_5200(int25) == 1) {
                    int10 = int10 + 1;
                    ccCreate(Component.interface_1122.component_1122_82, 5, int10);
                    ccSetSize(int7, int8, 0, 0);
                    ccSetPosition(int9 + int1 - int7, int4 - int7, 0, 0);
                    ccSetGraphic(Graphic.aif_herald_cape_icons_26);
                }
            } else {
                ccSetOnOpt(hook(cs2_5179, "i", [13]));
                int10 = int10 + 1;
                ccCreate(Component.interface_1122.component_1122_82, 5, int10);
                ccSetGraphic(Graphic.aif_herald_cape_icons_15);
                ccSetSize(int1, int4, 0, 0);
                ccSetPosition(int9, 0, 0, 0);
            }
            int25 = structParam(int26, Param.hcape_goal_next_id);
            int26 = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, int25);
            int10 = int10 + 1;
            int9 = int9 + int1 + int5;
        }
    }
    let int27: number = int9 - int5 + int6;

    if (int27 > ifGetWidth(Component.interface_1122.component_1122_82)) {
        ifSetScrollSize(int27, ifGetHeight(Component.interface_1122.component_1122_82), Component.interface_1122.component_1122_82);
    }
    cs2_5182();
    cs2_5178(int12, 1);
}
