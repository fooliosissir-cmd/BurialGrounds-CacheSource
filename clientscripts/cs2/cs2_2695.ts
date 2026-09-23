/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2695

function cs2_2695(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: struct, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): void {
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: component = -1;
    let int15: component = -1;
    let int16: component = -1;
    let int17: component = -1;
    let int18: component = -1;
    let int19: component = -1;

    if (intArg10 == 1) {
        int14 = Component.interface_742.component_742_4;
        int15 = Component.interface_742.component_742_20;
        int16 = Component.interface_742.component_742_21;
        int17 = Component.interface_742.component_742_22;
        int18 = Component.interface_742.component_742_3;
        int19 = Component.interface_742.component_742_6;
    } else if (intArg10 == 2) {
        int14 = Component.interface_911.component_911_1;
        int15 = Component.interface_911.component_911_74;
        int16 = Component.interface_911.component_911_73;
        int17 = Component.interface_911.component_911_66;
        int18 = Component.interface_911.component_911_65;
        int19 = Component.interface_911.component_911_3;
    } else {
        int14 = Component.interface_882.component_882_4;
        int15 = Component.interface_882.component_882_5;
        int16 = Component.interface_882.component_882_6;
        int17 = Component.interface_882.component_882_7;
        int18 = Component.interface_882.component_882_3;
        int19 = Component.interface_882.component_882_28;
    }
    let int20: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        int11 = cc_getx_absolute() + if_getx_absolute(int19);
        int20 = cc_gety_absolute();
        int12 = int20 + ccGetHeight() - 1 + trh_esc_mouseleave(int19);
        int13 = ccGetWidth();
    }

    if (ifGetHide(int15) == 0 && ifGetX(int15) == int11 && ifGetY(int15) == int12) {
        return;
    }
    ccDeleteAll(int16);
    ccDeleteAll(int17);
    ifSetScrollPos(0, 0, int16);
    let int21: Enum = structParam(intArg5, Param.param_683);
    let int22: number = graphics_options_detailget(intArg5);
    let int23: number = cs2_829(intArg5, int21);
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;

    while (int25 <= int23) {
        if (int26 != int22) {
            ccCreate(int16, 4, ifGetNextSubId(int16));
            ccSetSize(2, 15, 1, 0);
            ccSetPosition(0, int24, 1, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x26527B)]));
            if (intArg5 != Struct.struct_1009) {
                if (int25 < int23) {
                    ccSetColour(colour(0xEBE0BC));
                    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xEBE0BC)]));
                } else {
                    ccSetColour(colour(0x00B1E1));
                    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x00B1E1)]));
                }
            } else if (int25 > 0) {
                ccSetColour(colour(0xEBE0BC));
                ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xEBE0BC)]));
            } else {
                ccSetColour(colour(0x00B1E1));
                ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x00B1E1)]));
            }
            if (graphics_options_detailavailable(intArg5, int26) == false) {
                ccSetColour(colour(0x646464));
                ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x646464)]));
                ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x646464)]));
            }
            if (int21 != -1) {
                ccSetText(enumOp(type_int, type_string, int21, int26));
            } else {
                ccSetText(graphics_options_resolutions(int25));
            }
            ccSetOnClick(hook(cs2_2699, "iJiiiii", [int26, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10]));
            int24 = int24 + ccGetHeight();
        }
        int25 = int25 + 1;
        int26 = int26 + 1;
    }
    int24 = int24 + 2;
    let int27: number = 0;

    if (intArg10 == 1) {
        int27 = 334;
    } else {
        int27 = ifGetHeight(int14);
    }
    let int28: number = 1;

    if (int27 < int12 + int24) {
        int12 = int20 + 1 - int24 + trh_esc_mouseleave(int19);
        ifSetPosition(0, 0, 1, 0, int18);
        int28 = 0;
    } else {
        ifSetPosition(0, 0, 1, 2, int18);
        ifSetScrollSize(0, 0, int16);
        ifSetHide(true, int17);
    }
    ifSetPosition(int11, int12, 0, 0, int15);
    ifSetSize(int13, int24, 0, 0, int15);
    ifSetHide(false, int15);

    if (ccFind(intArg0, intArg2) == 1) {
        ccSetGraphic(Graphic.graphic_2556);
    }

    if (intArg4 != -1 && ccFind(intArg0, intArg4) == 1) {
        ccSetColour(colour(0xB2AA9F));
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnClick(hook(cs2_2696, "IiiiiJiiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10]));
        ccSetOnMouseOver(hook(cs2_2691, "Ii1ii1", [event_com, intArg2, true, intArg3, colour(0x80786D), false]));
        ccSetOnMouseLeave(hook(cs2_2691, "Ii1ii1", [event_com, intArg2, false, intArg3, colour(0x5F5B52), false]));
        if (ccFind<1>(intArg0, intArg3) == 1) {
            ccSetColour<1>(colour(0xB2AA9F));
            if (int28 == 1) {
                ccSetSize<1>(ccGetWidth<1>(), ccGetHeight() + 5, 0, 0);
            }
        }
    }
    ifSetOnClick(hook(cs2_2696, "IiiiiJiiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10]), int14);
}
