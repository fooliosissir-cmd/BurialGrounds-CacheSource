/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5206

function cs2_5206(): void {
    let int0: number = 60;
    let int1: number = ifGetWidth(Component.interface_1122.component_1122_87) - int0 * 4;
    let int2: number = int1 / 5;
    let int3: number = int2 + (int1 - int2 * 5) / 2;
    let int4: number = 0;
    let int5: number = 0;
    let int6: graphic = Graphic.aif_bronze_icon_button_1_0;
    let int7: graphic = Graphic.aif_bronze_icon_button_1_1;
    let int8: graphic = Graphic.aif_bronze_icon_button_1_2;
    let int9: graphic = Graphic.aif_bronze_icon_button_1_3;
    let int10: graphic = Graphic.aif_bronze_icon_button_1_4;
    let int11: number = ifGetScrollX(Component.interface_1122.component_1122_87);
    let int12: number = ifGetScrollY(Component.interface_1122.component_1122_87);

    ccDeleteAll(Component.interface_1122.component_1122_87);
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = enumGetoutputcount(Enum.hcape_enum_crest_id_to_struct);
    let int16: struct = -1;
    let int17: struct = -1;
    let int18: number = 0;

    while (int13 < int15) {
        int16 = enumOp(type_int, type_struct, Enum.hcape_enum_crest_id_to_struct, int13);
        if (int13 != 0 && int16 == -1) {
            return;
        }
        int17 = enumOp(type_int, type_struct, Enum.hcape_enum_goal_id_to_struct, structParam(int16, Param.param_1885));
        if (int17 != -1 && structParam(int17, Param.hcape_goal_hide_if_incomplete) == 1 && cs2_5200(structParam(int16, Param.param_1885)) == 0) {
            int13 = int13 + 1;
            int18 = 0;
            while (int18 < 3) {
                ccCreate(Component.interface_1122.component_1122_87, 3, int14);
                ccSetPosition(0, 0, 0, 0);
                ccSetSize(1, 1, 0, 0);
                ccSetHide(true);
                int14 = int14 + 1;
                int18 = int18 + 1;
            }
        } else {
            int4 = int3 + int13 % 4 * (int2 + int0);
            int5 = int2 + int13 / 4 * (int2 + int0);
            ccCreate(Component.interface_1122.component_1122_87, 5, int14);
            ccSetPosition(int4, int5, 0, 0);
            ccSetSize(int0, int0, 0, 0);
            if (varbit_hcape_cs_if_crest == int13) {
                ccSetGraphic(int9);
                int14 = int14 + 1;
                ccCreate(Component.interface_1122.component_1122_87, 5, int14);
                ccSetPosition(int4, int5, 0, 0);
                ccSetSize(int0, int0, 0, 0);
                ccSetGraphic(structParam(int16, Param.param_1883));
                int14 = int14 + 1;
                ccCreate(Component.interface_1122.component_1122_87, 5, int14);
                ccSetPosition(int4, int5, 0, 0);
                ccSetSize(int0, int0, 0, 0);
                ccSetGraphic(-1);
            } else if (structParam(int16, Param.param_1885) == 0 || cs2_5200(structParam(int16, Param.param_1885)) == 1) {
                ccSetGraphic(int6);
                ccSetOnMouseOver(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int7]));
                ccSetOnMouseLeave(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int6]));
                ccSetOnClick(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int8]));
                ccSetOnRelease(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int6]));
                ccSetOp(1, "Select crest");
                ccSetOnOp(hook(cs2_5207, "Iii", [event_com, event_comsubid, int13]));
                int14 = int14 + 1;
                ccCreate(Component.interface_1122.component_1122_87, 5, int14);
                ccSetPosition(int4, int5, 0, 0);
                ccSetSize(int0, int0, 0, 0);
                ccSetGraphic(structParam(int16, Param.param_1883));
                int14 = int14 + 1;
                ccCreate(Component.interface_1122.component_1122_87, 5, int14);
                ccSetPosition(int4, int5, 0, 0);
                ccSetSize(int0, int0, 0, 0);
                ccSetGraphic(-1);
            } else {
                ccSetGraphic(int10);
                int14 = int14 + 1;
                ccCreate(Component.interface_1122.component_1122_87, 5, int14);
                ccSetPosition(int4, int5, 0, 0);
                ccSetSize(int0, int0, 0, 0);
                ccSetGraphic(structParam(int16, Param.param_1883));
                ccSetTrans(196);
                int14 = int14 + 1;
                ccCreate(Component.interface_1122.component_1122_87, 5, int14);
                ccSetPosition(int4, int5, 0, 0);
                ccSetSize(int0, int0, 0, 0);
                ccSetGraphic(Graphic.aif_herald_cape_icons_15);
            }
            int14 = int14 + 1;
            int13 = int13 + 1;
        }
    }
    let int19: number = int15 / 4;

    if (int15 % 4 != 0) {
        int19 = int19 + 1;
    }
    let int20: number = int19 * (int0 + int2) + int2;
    ifSetScrollSize(ifGetWidth(Component.interface_1122.component_1122_87), int20, Component.interface_1122.component_1122_87);
    ifSetScrollPos(int11, int12, Component.interface_1122.component_1122_87);
    proc_scrollbar_vertical(Component.interface_1122.component_1122_88, Component.interface_1122.component_1122_87, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
