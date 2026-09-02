/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2790

function cs2_2790(): void {
    let int0: Enum = -1;
    let int1: Enum = -1;
    let int2: number = -1;
    let int3: graphic = -1;

    if (gender() == 1) {
        [int0, int2] = [Enum.player_kit_head_struct_female, 7];
        int3 = varc_1008;
    } else if (varc_774 == true) {
        ifSetGraphic(Graphic.player_kit_fancy_off_4, Component.interface_309.component_309_6);
        ifSetGraphic(Graphic.player_kit_fancy_3, Component.interface_309.component_309_7);
        [int0, int2] = [Enum.player_kit_beard_male_getidkit, 1];
        int1 = Enum.player_kit_male_beard_names;
        int3 = varc_1009;
    } else {
        ifSetGraphic(Graphic.player_kit_fancy_4, Component.interface_309.component_309_6);
        ifSetGraphic(Graphic.player_kit_fancy_off_3, Component.interface_309.component_309_7);
        [int0, int2] = [Enum.player_kit_head_struct_male, 0];
        int3 = varc_1008;
    }
    ccDeleteAll(Component.interface_309.component_309_10);
    let int4: number = 0;
    let int5: number = enumGetoutputcount(int0);
    let int6: struct = -1;
    let int7: graphic = -1;
    let str0: string = "";
    let int8: number = 0;
    let int9: number = 0;

    while (int4 < int5) {
        if (int1 == -1) {
            int6 = enumOp(type_int, type_struct, int0, int4);
            int7 = structParam(int6, Param.hair_default);
            str0 = structParam(int6, Param.hair_name);
        } else {
            int7 = enumOp(type_int, 75, int0, int4);
            str0 = enumOp(type_int, type_string, int1, int4);
        }
        ccCreate(Component.interface_309.component_309_10, 5, ifGetNextSubId(Component.interface_309.component_309_10));
        ccSetSize(17, 17, 0, 0);
        ccSetPosition(0, int8 + 1, 0, 0);
        ccCreate<1>(Component.interface_309.component_309_10, 4, ifGetNextSubId(Component.interface_309.component_309_10));
        ccSetSize<1>(20, 19, 1, 0);
        ccSetPosition<1>(0, int8, 2, 0);
        ccSetTextAlign<1>(0, 1, 0);
        ccSetColour<1>(colour(0xFF981F));
        ccSetTextFont<1>(Graphic.p12_full);
        ccSetText<1>(str0);
        if (int7 == int3) {
            ccSetGraphic(Graphic.options_radio_buttons_2);
            int9 = int8;
        } else {
            ccSetGraphic(Graphic.options_radio_buttons_0);
            ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
            ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
            ccHookMouseEnter<1>(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
            ccHookMouseExit<1>(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
            ccSetOp(1, str0);
            ccSetOp<1>(1, str0);
            ccSetOnOpt(hook(cs2_2831, "iKi", [event_opindex, int7, int2]));
            ccSetOnOpt<1>(hook(cs2_2831, "iKi", [event_opindex, int7, int2]));
        }
        int4 = int4 + 1;
        int8 = int8 + 19;
    }

    if (int8 > ifGetHeight(Component.interface_309.component_309_10)) {
        ifSetSize(20, 4, 1, 1, Component.interface_309.component_309_10);
        ifSetScrollSize(0, int8, Component.interface_309.component_309_10);
        if (int9 < ifGetScrollY(Component.interface_309.component_309_10)) {
            ifSetScrollPos(0, int9 - 5, Component.interface_309.component_309_10);
        } else if (int9 + 19 >= ifGetScrollY(Component.interface_309.component_309_10) + ifGetHeight(Component.interface_309.component_309_10)) {
            ifSetScrollPos(0, int9 + 25 - ifGetHeight(Component.interface_309.component_309_10), Component.interface_309.component_309_10);
        }
        ifSetHide(false, Component.interface_309.component_309_11);
        proc_scrollbar_vertical(Component.interface_309.component_309_11, Component.interface_309.component_309_10, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetSize(4, 4, 1, 1, Component.interface_309.component_309_10);
        ifSetScrollSize(0, 0, Component.interface_309.component_309_10);
        ifSetScrollPos(0, 0, Component.interface_309.component_309_10);
        ccDeleteAll(Component.interface_309.component_309_11);
        ifSetHide(true, Component.interface_309.component_309_11);
    }
    ccDeleteAll(Component.interface_309.component_309_16);
    int5 = enumGetoutputcount(Enum.player_kit_hair_index_to_basecolour);
    let int10: number = 5;
    let int11: number = 0;

    if (((int5 - 1) / int10 + 1) * 21 > ifGetHeight(Component.interface_309.component_309_16)) {
        [int10, int11] = [4, 2];
    }
    int4 = 0;
    int8 = 0;
    let int12: number = 0;
    let int13: graphic = -1;
    let int14: graphic = Graphic.emotes_40;

    while (int4 < int5) {
        int14 = enumOp(type_int, type_int, Enum.player_kit_hair_index_to_basecolour, int4);
        str0 = enumOp(type_int, type_string, Enum.player_kit_hair_colour_name, int4);
        ccCreate(Component.interface_309.component_309_16, 3, ifGetNextSubId(Component.interface_309.component_309_16));
        ccSetSize(21, 21, 0, 0);
        ccSetfill(true);
        ccSetPosition(int12 * ccGetWidth() + int11, int8, 0, 0);
        ccSetColour(enumOp(type_int, type_int, Enum.player_kit_hair_colour, int4));
        ccSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, event_comsubid, Component.interface_309.component_309_22, str0, 0, 512]));
        ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_309.component_309_22]));
        ccCreate<1>(Component.interface_309.component_309_16, 5, ifGetNextSubId(Component.interface_309.component_309_16));
        ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
        if (int14 == varc_1015) {
            ccSetGraphic<1>(Graphic.graphic_1043);
            int9 = int8;
        } else {
            int13 = Graphic.graphic_1041;
            ccSetGraphic<1>(int13);
            ccHookMouseExit<1>(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId<1>(), int13]));
            int13 = Graphic.graphic_1042;
            ccHookMouseEnter<1>(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId<1>(), int13]));
            ccSetOp<1>(1, str0);
            ccSetOnOpt<1>(hook(cs2_2832, "ii", [event_opindex, int14]));
        }
        int4 = int4 + 1;
        if (int12 < int10 - 1) {
            int12 = int12 + 1;
        } else {
            int12 = 0;
            int8 = int8 + ccGetHeight();
        }
    }

    if (int12 != 0) {
        int8 = int8 + 21;
    }

    if (int8 > ifGetHeight(Component.interface_309.component_309_16) || int10 < 5) {
        ifSetSize(20, 4, 1, 1, Component.interface_309.component_309_16);
        ifSetScrollSize(0, int8, Component.interface_309.component_309_16);
        if (int9 < ifGetScrollY(Component.interface_309.component_309_16)) {
            ifSetScrollPos(0, int9 - 5, Component.interface_309.component_309_16);
        } else if (int9 + 21 >= ifGetScrollY(Component.interface_309.component_309_16) + ifGetHeight(Component.interface_309.component_309_16)) {
            ifSetScrollPos(0, int9 + 25 - ifGetHeight(Component.interface_309.component_309_16), Component.interface_309.component_309_16);
        }
        ifSetHide(false, Component.interface_309.component_309_17);
        proc_scrollbar_vertical(Component.interface_309.component_309_17, Component.interface_309.component_309_16, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetSize(4, 4, 1, 1, Component.interface_309.component_309_16);
        ifSetScrollSize(0, 0, Component.interface_309.component_309_16);
        ifSetScrollPos(0, 0, Component.interface_309.component_309_16);
        ccDeleteAll(Component.interface_309.component_309_17);
        ifSetHide(true, Component.interface_309.component_309_17);
    }
}
