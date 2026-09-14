/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5351

function cs2_5351(intArg0: struct, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: graphic, intArg9: graphic, intArg10: graphic): [number, number, number, number, number] {
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 74907653;
    let int14: component = Component.interface_1143.component_1143_76;
    let int15: component = Component.interface_1143.component_1143_66;
    let int16: component = Component.interface_1143.component_1143_67;
    let int17: component = Component.interface_1143.component_1143_68;
    let int18: component = Component.interface_1143.component_1143_69;
    let int19: component = Component.interface_1143.component_1143_70;
    let int20: component = Component.interface_1143.component_1143_71;
    let int21: component = Component.interface_1143.component_1143_60;
    let int22: component = Component.interface_1143.component_1143_61;
    let int23: component = Component.interface_1143.component_1143_62;
    let int24: component = Component.interface_1143.component_1143_63;
    let int25: component = Component.interface_1143.component_1143_64;
    let int26: component = Component.interface_1143.component_1143_65;
    let int27: component = -1;
    let int28: number = 0;
    let int29: Enum = -1;
    let int30: number = 0;
    let int31: graphic = -1;
    let int32: graphic = -1;
    let str0: string = "";
    let int33: number = 0;
    let int34: graphic = Graphic.aif_fav_button_1_0;
    let int35: graphic = Graphic.aif_fav_button_1_1;
    let int36: graphic = Graphic.aif_fav_button_1_3;
    let int37: graphic = Graphic.aif_fav_button_1_3;
    let int38: graphic = Graphic.aif_fav_button_1_1;
    let int39: graphic = Graphic.aif_fav_button_1_3;
    let int40: graphic = Graphic.aif_fav_button_1_0;
    let int41: colour = colour(0xE6BE78);
    let int42: number = 0;
    let str1: string = "Over";

    if (intArg0 != -1) {
        if (intArg1 >= 3) {
            intArg2 = intArg5;
            intArg3 = intArg3 + intArg4 + intArg5;
            intArg1 = 0;
        }
        switch (structParam(intArg0, Param.param_1937)) {
            case 1:
                int27 = int15;
                int29 = Enum.enum_5182;
                break;
            case 9:
                int27 = int16;
                int29 = Enum.enum_5724;
                break;
            case 2:
                int27 = int17;
                int29 = Enum.enum_3875;
                break;
            case 3:
                int27 = int18;
                if (gender() == 0) {
                    int29 = Enum.enum_5189;
                } else {
                    int29 = Enum.enum_5188;
                }
                break;
            case 4:
                int27 = int19;
                int29 = Enum.enum_5184;
                break;
            case 5:
                int27 = int20;
                int29 = Enum.enum_5183;
                break;
        }
        int28 = 0;
        while (intArg0 != enumOp(type_int, type_struct, int29, int28) && int28 < enumGetoutputcount(int29)) {
            int28 = int28 + 1;
        }
        int33 = int28;
        ccCreate(int14, 5, intArg6);
        intArg6 = intArg6 + 1;
        ccSetPosition(intArg2, intArg3, 0, 0);
        ccSetGraphic(intArg8);
        int12 = 58;
        intArg4 = 68;
        intArg2 = intArg2 + int12;
        ccSetSize(int12, intArg4, 0, 0);
        ccCreate(int14, 4, intArg6);
        intArg6 = intArg6 + 1;
        ccSetPosition(intArg2 - int12, intArg3, 0, 0);
        ccSetSize(int12 * 3, intArg4, 0, 0);
        ccSetOnMouseOver(hook(cs2_5359, "IiJ1", [int14, event_comsubid, intArg0, true]));
        ccSetOnMouseLeave(hook(cs2_5359, "IiJ1", [int14, event_comsubid, intArg0, false]));
        ccCreate(int14, 5, intArg6);
        intArg6 = intArg6 + 1;
        ccSetPosition(intArg2, intArg3, 0, 0);
        intArg2 = intArg2 + int12;
        ccSetGraphic(intArg9);
        ccSetSize(int12, intArg4, 0, 0);
        ccCreate(int14, 5, intArg6);
        intArg6 = intArg6 + 1;
        ccSetPosition(intArg2, intArg3, 0, 0);
        intArg2 = intArg2 + int12;
        intArg2 = intArg2 + intArg5;
        ccSetGraphic(intArg10);
        ccSetSize(int12, intArg4, 0, 0);
        switch (structParam(intArg0, Param.param_1937)) {
            case 1:
                if (int33 <= 31) {
                    int30 = testBit(varp_2229, int33);
                } else if (int33 <= 62) {
                    int30 = testBit(varp_2443, int33 - 31);
                } else {
                    int30 = testBit(varp_2539, int33 - 62);
                }
                break;
            case 9:
                int30 = testBit(varp_2540, int33);
                break;
            case 2:
                int30 = testBit(varp_2230, int33);
                int42 = 1;
                break;
            case 3:
                int30 = testBit(varp_2231, int33);
                break;
            case 4:
                if (int33 < 16) {
                    int30 = testBit(varp_2232, int33);
                } else {
                    int30 = testBit(varp_2447, int33 - 16);
                }
                break;
            case 5:
                int30 = testBit(varp_2232, int33 + 16);
                int42 = 1;
                break;
        }
        if (int30 == 0) {
            int31 = Graphic.aif_buy_button_group_3_0;
            int32 = Graphic.aif_buy_button_group_3_2;
            str0 = "Buy";
        } else {
            int31 = Graphic.aif_buy_button_group_3_1;
            int32 = Graphic.aif_buy_button_group_3_3;
            str0 = "Reclaim";
            if (int42 == 1) {
                str0 = "Unlocked";
            }
        }
        ccCreate(int14, 5, intArg6);
        ccSetPosition(intArg2 - 103, intArg3 + 50, 0, 0);
        ccSetGraphic(int31);
        ccSetSize(90, 23, 0, 0);
        if (int30 != 1 || int42 != 1) {
            ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [int14, intArg6, int32]));
            ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [int14, intArg6, int31]));
        }
        intArg6 = intArg6 + 1;
        int28 = 0;
        while (int28 < int33) {
            if (ccFind(int27, int28) == 0) {
                ccCreate(int27, 4, int28);
                ccSetHide(true);
            }
            int28 = int28 + 1;
        }
        ccCreate(int27, 4, int33);
        ccSetPosition(intArg2 - 103, intArg3 + 50, 0, 0);
        ccSetText(str0);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetColour(int41);
        ccSetTextAlign(1, 1, 0);
        ccSetSize(90, 23, 0, 0);
        if (int30 != 1 || int42 != 1) {
            ccSetOp(1, str0);
        }
        ccCreate(int14, 4, intArg6);
        intArg6 = intArg6 + 1;
        ccSetPosition(intArg2 - 120, intArg3 + 10, 0, 0);
        if (structParam(intArg0, Param.param_1937) == 4) {
            int11 = enumOp(type_struct, type_int, Enum.enum_5185, intArg0);
            if (gender() == 0) {
                ccSetText(enumOp(type_int, type_string, Enum.enum_3886, int11));
            } else {
                ccSetText(enumOp(type_int, type_string, Enum.enum_3887, int11));
            }
            ccSetText(subString(ccGetText(), 0, stringLength(ccGetText()) - 1));
        } else {
            ccSetText(structParam(intArg0, Param.param_1930));
        }
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetTextShadow(true);
        ccSetColour(int41);
        ccSetTextAlign(1, 1, 12);
        ccSetSize(107, 24, 0, 0);
        if (paraheight(ccGetText(), ccGetWidth(), ccGetfontmetrics()) > 1) {
            intArg7 = 0;
        } else {
            intArg7 = -5;
        }
        ccCreate(int14, 4, intArg6);
        intArg6 = intArg6 + 1;
        ccSetPosition(intArg2 - 117, intArg3 + 34 + intArg7, 0, 0);
        ccSetTextFont(Graphic.graphic_4040);
        ccSetTextShadow(true);
        if (structParam(intArg0, Param.param_1933) > 0) {
            ccSetText(append(tostringLocalised(structParam(intArg0, Param.param_1933), 1), " Points"));
            ccSetColour(colour(0x56A5CC));
        } else {
            ccSetText(append(tostringLocalised(structParam(intArg0, Param.param_1932), 1), " Points"));
            ccSetColour(colour(0xDB9000));
        }
        ccSetTextAlign(1, 1, 13);
        ccSetSize(79, 19, 0, 0);
        switch (structParam(intArg0, Param.param_1937)) {
            case 1:
                int27 = int21;
                break;
            case 9:
                int27 = int22;
                break;
            case 2:
                int27 = int23;
                break;
            case 3:
                int27 = int24;
                break;
            case 4:
                int27 = int25;
                break;
            case 5:
                int27 = int26;
                break;
        }
        switch (structParam(intArg0, Param.param_1937)) {
            case 1:
                if (int33 <= 31) {
                    int30 = testBit(varp_2391, int33);
                } else if (int33 <= 62) {
                    int30 = testBit(varp_2444, int33 - 31);
                } else {
                    int30 = testBit(varp_2541, int33 - 62);
                }
                break;
            case 9:
                int30 = testBit(varp_2542, int33);
                break;
            case 2:
                int30 = testBit(varp_2392, int33);
                break;
            case 3:
                int30 = testBit(varp_2393, int33);
                break;
            case 4:
                if (int33 < 16) {
                    int30 = testBit(varp_2394, int33);
                } else {
                    int30 = testBit(varp_2445, int33 - 16);
                }
                break;
            case 5:
                int30 = testBit(varp_2394, int33 + 16);
                break;
        }
        int28 = 0;
        while (int28 < int33) {
            if (ccFind(int27, int28) == 0) {
                ccCreate(int27, 4, int28);
                ccSetHide(true);
            }
            int28 = int28 + 1;
        }
        ccCreate(int27, 5, int33);
        ccSetPosition(intArg2 - 36, intArg3 + 33 + intArg7, 0, 0);
        if (int30 == 0) {
            int34 = int40;
            int35 = int38;
            int36 = int37;
            ccSetOp(1, "Add to Favourites");
            if (varbit_9487 != 8) {
                ccSetOnOp(hook(cs2_5354, "Iiddddd", [int27, int33, int36, int37, int39, int38, int40]));
            }
        } else {
            int34 = int39;
            int35 = int37;
            int36 = int38;
            ccSetOp(1, "Remove from Favourites");
            if (varbit_9487 != 8) {
                ccSetOnOp(hook(cs2_5354, "Iiddddd", [int27, int33, int36, int37, int39, int38, int40]));
            }
        }
        ccSetGraphic(int34);
        ccSetSize(21, 21, 0, 0);
        ccSetOnMouseOver(hook(graphic_swapper_child, "Iid", [int27, int33, int35]));
        ccSetOnMouseLeave(hook(graphic_swapper_child, "Iid", [int27, int33, int34]));
        int33 = int33 + 1;
        ccCreate(int14, 5, intArg6);
        intArg6 = intArg6 + 1;
        if (structParam(intArg0, Param.param_1937) == 1) {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(intArg2 - 162, intArg3 + 18, 0, 0);
            ccSetObject(structParam(intArg0, Param.param_1935), -1);
        } else if (structParam(intArg0, Param.param_1937) == 9) {
            ccSetGraphic(structParam(intArg0, Param.param_2283));
            ccSetSize(42, 43, 0, 0);
            ccSetPosition(intArg2 - 166, intArg3 + 12, 0, 0);
        } else if (structParam(intArg0, Param.param_1937) == 2) {
            ccSetGraphic(structParam(intArg0, Param.emotes2_icon));
            ccSetSize(48, 48, 0, 0);
            ccSetPosition(intArg2 - 170, intArg3 + 11, 0, 0);
        } else if (structParam(intArg0, Param.param_1937) == 3) {
            ccSetGraphic(structParam(intArg0, Param.param_1441));
            ccSetSize(40, 50, 0, 0);
            ccSetPosition(intArg2 - 166, intArg3 + 10, 0, 0);
        } else if (structParam(intArg0, Param.param_1937) == 4) {
            ccSetGraphic(Graphic.aid_loyalty_catgry_icons_3);
            ccSetSize(42, 42, 0, 0);
            ccSetPosition(intArg2 - 166, intArg3 + 14, 0, 0);
        } else if (structParam(intArg0, Param.param_1937) == 5) {
            ccSetSize(36, 32, 0, 0);
            ccSetPosition(intArg2 - 161, intArg3 + 18, 0, 0);
            ccSetObject(structParam(intArg0, Param.param_1935), -1);
        }
        if (structParam(intArg0, Param.param_1933) > 0) {
            ccCreate(int14, 5, intArg6);
            intArg6 = intArg6 + 1;
            ccSetPosition(intArg2 - 175, intArg3 + 5, 0, 0);
            ccSetGraphic(Graphic.aif_loyalty_icon_3);
            ccSetSize(40, 34, 0, 0);
        }
        intArg1 = intArg1 + 1;
    }
    return [intArg1, intArg2, intArg3, intArg4, intArg6];
}
