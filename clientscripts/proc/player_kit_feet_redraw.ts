/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,player_kit_feet_redraw]

function player_kit_feet_redraw(): void {
    let int0: Enum = -1;
    let int1: Enum = -1;

    if (gender() == 1) {
        int0 = Enum.enum_1137;
        int1 = Enum.enum_3294;
    } else {
        int0 = Enum.enum_1136;
        int1 = Enum.enum_3291;
    }
    ccDeleteAll(Component.interface_728.component_728_7);
    let int2: number = 0;
    let int3: number = enumGetoutputcount(int0);
    let int4: graphic = -1;
    let str0: string = "";
    let int5: number = 0;
    let int6: number = 0;

    while (int2 < int3) {
        int4 = enumOp(type_int, 75, int0, int2);
        str0 = enumOp(type_int, type_string, int1, int2);
        ccCreate(Component.interface_728.component_728_7, 5, ifGetNextSubId(Component.interface_728.component_728_7));
        ccSetSize(17, 17, 0, 0);
        ccSetPosition(0, int5 + 1, 0, 0);
        ccCreate<1>(Component.interface_728.component_728_7, 4, ifGetNextSubId(Component.interface_728.component_728_7));
        ccSetSize<1>(20, 19, 1, 0);
        ccSetPosition<1>(0, int5, 2, 0);
        ccSetTextAlign<1>(0, 1, 0);
        ccSetColour<1>(colour(0xFF981F));
        ccSetTextFont<1>(Graphic.p12_full);
        ccSetText<1>(str0);
        if (int4 == varc_1014) {
            ccSetGraphic(Graphic.options_radio_buttons_2);
            int6 = int5;
        } else {
            ccSetGraphic(Graphic.options_radio_buttons_0);
            ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
            ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
            ccSetOnMouseOver<1>(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
            ccSetOnMouseLeave<1>(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
            ccSetOp(1, str0);
            ccSetOp<1>(1, str0);
            ccSetOnOp(hook(cs2_1507, "iK", [event_opindex, int4]));
            ccSetOnOp<1>(hook(cs2_1507, "iK", [event_opindex, int4]));
        }
        int2 = int2 + 1;
        int5 = int5 + 19;
    }

    if (int5 > ifGetHeight(Component.interface_728.component_728_7)) {
        ifSetSize(20, 4, 1, 1, Component.interface_728.component_728_7);
        ifSetScrollSize(0, int5, Component.interface_728.component_728_7);
        if (int6 < ifGetScrollY(Component.interface_728.component_728_7)) {
            ifSetScrollPos(0, int6 - 5, Component.interface_728.component_728_7);
        } else if (int6 + 19 >= ifGetScrollY(Component.interface_728.component_728_7) + ifGetHeight(Component.interface_728.component_728_7)) {
            ifSetScrollPos(0, int6 + 25 - ifGetHeight(Component.interface_728.component_728_7), Component.interface_728.component_728_7);
        }
        ifSetHide(false, Component.interface_728.component_728_8);
        proc_scrollbar_vertical(Component.interface_728.component_728_8, Component.interface_728.component_728_7, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetSize(4, 4, 1, 1, Component.interface_728.component_728_7);
        ifSetScrollSize(0, 0, Component.interface_728.component_728_7);
        ifSetScrollPos(0, 0, Component.interface_728.component_728_7);
        ccDeleteAll(Component.interface_728.component_728_8);
        ifSetHide(true, Component.interface_728.component_728_8);
    }
    ccDeleteAll(Component.interface_728.component_728_12);
    int3 = enumGetoutputcount(Enum.player_kit_feet_colourcodes);
    let int7: number = 6;

    if (((int3 - 1) / int7 + 1) * 21 > ifGetHeight(Component.interface_728.component_728_12)) {
        int7 = 5;
    }
    int2 = 0;
    int5 = 0;
    let int8: number = 0;
    let int9: graphic = -1;
    let int10: graphic = Graphic.emotes_40;

    while (int2 < int3) {
        str0 = enumOp(type_int, type_string, Enum.enum_3296, int2);
        int10 = enumOp(type_int, type_int, Enum.player_kit_feet_colourcodes, int2);
        ccCreate(Component.interface_728.component_728_12, 3, ifGetNextSubId(Component.interface_728.component_728_12));
        ccSetSize(21, 21, 0, 0);
        ccSetfill(true);
        ccSetPosition(int8 * ccGetWidth(), int5, 0, 0);
        ccSetColour(enumOp(type_int, type_int, Enum.player_kit_feet_colours, int2));
        ccSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, event_comsubid, Component.interface_728.component_728_18, str0, 0, 512]));
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_728.component_728_18]));
        ccCreate<1>(Component.interface_728.component_728_12, 5, ifGetNextSubId(Component.interface_728.component_728_12));
        ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
        if (int10 == varc_playerdesign3_feetcol) {
            ccSetGraphic<1>(Graphic.graphic_1043);
            int6 = int5;
        } else {
            int9 = Graphic.graphic_1041;
            ccSetGraphic<1>(int9);
            ccSetOnMouseLeave<1>(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId<1>(), int9]));
            int9 = Graphic.graphic_1042;
            ccSetOnMouseOver<1>(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId<1>(), int9]));
            ccSetOp<1>(1, str0);
            ccSetOnOp<1>(hook(player_kit_feet_colourbutton, "ii", [event_opindex, int10]));
        }
        int2 = int2 + 1;
        if (int8 < int7 - 1) {
            int8 = int8 + 1;
        } else {
            int8 = 0;
            int5 = int5 + ccGetHeight();
        }
    }

    if (int8 != 0) {
        int5 = int5 + 21;
    }

    if (int5 > ifGetHeight(Component.interface_728.component_728_12) || int7 < 6) {
        ifSetSize(20, 4, 1, 1, Component.interface_728.component_728_12);
        ifSetScrollSize(0, int5, Component.interface_728.component_728_12);
        if (int6 < ifGetScrollY(Component.interface_728.component_728_12)) {
            ifSetScrollPos(0, int6 - 5, Component.interface_728.component_728_12);
        } else if (int6 + 21 >= ifGetScrollY(Component.interface_728.component_728_12) + ifGetHeight(Component.interface_728.component_728_12)) {
            ifSetScrollPos(0, int6 + 25 - ifGetHeight(Component.interface_728.component_728_12), Component.interface_728.component_728_12);
        }
        ifSetHide(false, Component.interface_728.component_728_13);
        proc_scrollbar_vertical(Component.interface_728.component_728_13, Component.interface_728.component_728_12, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetSize(4, 4, 1, 1, Component.interface_728.component_728_12);
        ifSetScrollSize(0, 0, Component.interface_728.component_728_12);
        ifSetScrollPos(0, 0, Component.interface_728.component_728_12);
        ccDeleteAll(Component.interface_728.component_728_13);
        ifSetHide(true, Component.interface_728.component_728_13);
    }
}
