/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,player_kit_body_redraw]

function player_kit_body_redraw(): void {
    let int0: Enum = -1;
    let int1: Enum = -1;
    let int2: number = -1;
    let int3: graphic = -1;
    let int4: Enum = -1;
    let int5: Enum = -1;
    let int6: Enum = -1;
    let int7: number = -1;
    let int8: graphic = -1;

    switch (varc_player_kit_body_layer) {
        case 1:
            ifSetGraphic(Graphic.player_kit_fancy_off_0, Component.interface_729.component_729_6);
            ifSetGraphic(Graphic.player_kit_fancy_1, Component.interface_729.component_729_7);
            ifSetGraphic(Graphic.player_kit_fancy_off_5, Component.interface_729.component_729_8);
            ifSetGraphic(Graphic.player_kit_fancy_off_2, Component.interface_729.component_729_9);
            if (gender() == 1) {
                [int0, int2] = [Enum.enum_693, 10];
                int1 = Enum.enum_1593;
            } else {
                [int0, int2] = [Enum.enum_711, 3];
                int1 = Enum.enum_702;
            }
            int3 = varc_1011;
            int4 = Enum.enum_3282;
            int5 = Enum.enum_2347;
            int6 = Enum.enum_2348;
            int7 = 1;
            int8 = varc_playerdesign3_torsocol;
            break;
        case 2:
            ifSetGraphic(Graphic.player_kit_fancy_off_0, Component.interface_729.component_729_6);
            ifSetGraphic(Graphic.player_kit_fancy_off_1, Component.interface_729.component_729_7);
            ifSetGraphic(Graphic.player_kit_fancy_5, Component.interface_729.component_729_8);
            ifSetGraphic(Graphic.player_kit_fancy_off_2, Component.interface_729.component_729_9);
            if (gender() == 1) {
                [int0, int2] = [Enum.player_kit_bracelet_f_completelist, 11];
            } else {
                [int0, int2] = [Enum.player_kit_bracelet_m_completelist, 4];
            }
            int1 = Enum.player_kit_bracelet_generic_names;
            int3 = varc_1012;
            break;
        case 3:
            ifSetGraphic(Graphic.player_kit_fancy_off_0, Component.interface_729.component_729_6);
            ifSetGraphic(Graphic.player_kit_fancy_off_1, Component.interface_729.component_729_7);
            ifSetGraphic(Graphic.player_kit_fancy_off_5, Component.interface_729.component_729_8);
            ifSetGraphic(Graphic.player_kit_fancy_2, Component.interface_729.component_729_9);
            if (gender() == 1) {
                [int0, int2] = [Enum.enum_1607, 12];
                int1 = Enum.enum_1606;
            } else {
                [int0, int2] = [Enum.enum_1586, 5];
                int1 = Enum.enum_1585;
            }
            int3 = varc_1013;
            int4 = Enum.enum_3284;
            int5 = Enum.enum_2347;
            int6 = Enum.enum_2348;
            int7 = 2;
            int8 = varc_playerdesign3_legscol;
            break;
        default:
            varc_player_kit_body_layer = 0;
            ifSetGraphic(Graphic.player_kit_fancy_0, Component.interface_729.component_729_6);
            ifSetGraphic(Graphic.player_kit_fancy_off_1, Component.interface_729.component_729_7);
            ifSetGraphic(Graphic.player_kit_fancy_off_5, Component.interface_729.component_729_8);
            ifSetGraphic(Graphic.player_kit_fancy_off_2, Component.interface_729.component_729_9);
            if (gender() == 1) {
                [int0, int2] = [Enum.enum_1591, 9];
                int1 = Enum.enum_1590;
            } else {
                [int0, int2] = [Enum.enum_690, 2];
                int1 = Enum.enum_689;
            }
            int3 = varc_1010;
            int4 = Enum.enum_3282;
            int5 = Enum.enum_2347;
            int6 = Enum.enum_2348;
            int7 = 1;
            int8 = varc_playerdesign3_torsocol;
            break;
    }
    ccDeleteAll(Component.interface_729.component_729_12);
    let int9: number = 0;
    let int10: number = enumGetoutputcount(int0);
    let int11: graphic = -1;
    let str0: string = "";
    let int12: number = 0;
    let int13: number = 0;

    while (int9 < int10) {
        int11 = enumOp(type_int, 75, int0, int9);
        str0 = enumOp(type_int, type_string, int1, int9);
        ccCreate(Component.interface_729.component_729_12, 5, ifGetNextSubId(Component.interface_729.component_729_12));
        ccSetSize(17, 17, 0, 0);
        ccSetPosition(0, int12 + 1, 0, 0);
        ccCreate<1>(Component.interface_729.component_729_12, 4, ifGetNextSubId(Component.interface_729.component_729_12));
        ccSetSize<1>(20, 19, 1, 0);
        ccSetPosition<1>(0, int12, 2, 0);
        ccSetTextAlign<1>(0, 1, 0);
        ccSetColour<1>(colour(0xFF981F));
        ccSetTextFont<1>(Graphic.p12_full);
        ccSetText<1>(str0);
        if (int11 == int3) {
            ccSetGraphic(Graphic.options_radio_buttons_2);
            int13 = int12;
        } else {
            ccSetGraphic(Graphic.options_radio_buttons_0);
            ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
            ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
            ccSetOnMouseOver<1>(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
            ccSetOnMouseLeave<1>(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
            ccSetOp(1, str0);
            ccSetOp<1>(1, str0);
            ccSetOnOp(hook(cs2_1514, "iKi", [event_opindex, int11, int2]));
            ccSetOnOp<1>(hook(cs2_1514, "iKi", [event_opindex, int11, int2]));
        }
        int9 = int9 + 1;
        int12 = int12 + 19;
    }

    if (int12 > ifGetHeight(Component.interface_729.component_729_12)) {
        ifSetSize(20, 4, 1, 1, Component.interface_729.component_729_12);
        ifSetScrollSize(0, int12, Component.interface_729.component_729_12);
        if (int13 < ifGetScrollY(Component.interface_729.component_729_12)) {
            ifSetScrollPos(0, int13 - 5, Component.interface_729.component_729_12);
        } else if (int13 + 19 >= ifGetScrollY(Component.interface_729.component_729_12) + ifGetHeight(Component.interface_729.component_729_12)) {
            ifSetScrollPos(0, int13 + 25 - ifGetHeight(Component.interface_729.component_729_12), Component.interface_729.component_729_12);
        }
        ifSetHide(false, Component.interface_729.component_729_13);
        proc_scrollbar_vertical(Component.interface_729.component_729_13, Component.interface_729.component_729_12, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetSize(4, 4, 1, 1, Component.interface_729.component_729_12);
        ifSetScrollSize(0, 0, Component.interface_729.component_729_12);
        ifSetScrollPos(0, 0, Component.interface_729.component_729_12);
        ccDeleteAll(Component.interface_729.component_729_13);
        ifSetHide(true, Component.interface_729.component_729_13);
    }
    ccDeleteAll(Component.interface_729.component_729_17);

    if (int5 == -1) {
        ifSetSize(4, 4, 1, 1, Component.interface_729.component_729_17);
        ifSetScrollSize(0, 0, Component.interface_729.component_729_17);
        ifSetScrollPos(0, 0, Component.interface_729.component_729_17);
        ccDeleteAll(Component.interface_729.component_729_18);
        ifSetHide(true, Component.interface_729.component_729_18);
        return;
    }
    int10 = enumGetoutputcount(int5);
    let int14: number = 5;
    let int15: number = 0;

    if (((int10 - 1) / int14 + 1) * 21 > ifGetHeight(Component.interface_729.component_729_17)) {
        [int14, int15] = [4, 2];
    }
    int9 = 0;
    int12 = 0;
    let int16: number = 0;
    let int17: graphic = -1;
    let int18: graphic = Graphic.emotes_40;

    while (int9 < int10) {
        int18 = enumOp(type_int, type_int, int4, int9);
        str0 = enumOp(type_int, type_string, int6, int9);
        ccCreate(Component.interface_729.component_729_17, 3, ifGetNextSubId(Component.interface_729.component_729_17));
        ccSetSize(21, 21, 0, 0);
        ccSetfill(true);
        ccSetPosition(int16 * ccGetWidth() + int15, int12, 0, 0);
        ccSetColour(enumOp(type_int, type_int, int5, int9));
        ccSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, event_comsubid, Component.interface_729.component_729_23, str0, 0, 512]));
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_729.component_729_23]));
        ccCreate<1>(Component.interface_729.component_729_17, 5, ifGetNextSubId(Component.interface_729.component_729_17));
        ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
        if (int18 == int8) {
            ccSetGraphic<1>(Graphic.graphic_1043);
            int13 = int12;
        } else {
            int17 = Graphic.graphic_1041;
            ccSetGraphic<1>(int17);
            ccSetOnMouseLeave<1>(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId<1>(), int17]));
            int17 = Graphic.graphic_1042;
            ccSetOnMouseOver<1>(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId<1>(), int17]));
            ccSetOp<1>(1, str0);
            ccSetOnOp<1>(hook(player_kit_body_colourbutton, "iii", [event_opindex, int18, int7]));
        }
        int9 = int9 + 1;
        if (int16 < int14 - 1) {
            int16 = int16 + 1;
        } else {
            int16 = 0;
            int12 = int12 + ccGetHeight();
        }
    }

    if (int16 != 0) {
        int12 = int12 + 21;
    }

    if (int12 > ifGetHeight(Component.interface_729.component_729_17) || int14 < 5) {
        ifSetSize(20, 4, 1, 1, Component.interface_729.component_729_17);
        ifSetScrollSize(0, int12, Component.interface_729.component_729_17);
        if (int13 < ifGetScrollY(Component.interface_729.component_729_17)) {
            ifSetScrollPos(0, int13 - 5, Component.interface_729.component_729_17);
        } else if (int13 + 21 >= ifGetScrollY(Component.interface_729.component_729_17) + ifGetHeight(Component.interface_729.component_729_17)) {
            ifSetScrollPos(0, int13 + 25 - ifGetHeight(Component.interface_729.component_729_17), Component.interface_729.component_729_17);
        }
        ifSetHide(false, Component.interface_729.component_729_18);
        proc_scrollbar_vertical(Component.interface_729.component_729_18, Component.interface_729.component_729_17, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetSize(4, 4, 1, 1, Component.interface_729.component_729_17);
        ifSetScrollSize(0, 0, Component.interface_729.component_729_17);
        ifSetScrollPos(0, 0, Component.interface_729.component_729_17);
        ccDeleteAll(Component.interface_729.component_729_18);
        ifSetHide(true, Component.interface_729.component_729_18);
    }
}
