/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5350

function cs2_5350(intArg0: number, intArg1: component): void {
    let int2: Enum = Enum.enum_5181;
    let str0: string = "Home";
    let int3: number = 0;

    if (varbit_9487 == 1) {
        int2 = Enum.enum_5182;
        str0 = "Auras";
        int3 = 1;
    } else if (varbit_9487 == 9) {
        int2 = Enum.enum_5724;
        str0 = "Cosmetic Auras";
        int3 = 9;
    } else if (varbit_9487 == 2) {
        int2 = Enum.enum_3875;
        str0 = "Emotes";
        int3 = 2;
    } else if (varbit_9487 == 3) {
        if (gender() == 0) {
            int2 = Enum.enum_5189;
        } else {
            int2 = Enum.enum_5188;
        }
        str0 = "Costumes";
        int3 = 3;
    } else if (varbit_9487 == 4) {
        int2 = Enum.enum_5184;
        str0 = "Titles";
        int3 = 4;
    } else if (varbit_9487 == 5) {
        int2 = Enum.enum_5183;
        str0 = "Re-colour";
        int3 = 5;
    } else if (varbit_9487 == 6) {
        str0 = "Special Offers";
        int3 = 6;
    } else if (varbit_9487 == 7) {
        str0 = "Limited Edition";
        int3 = 7;
    } else if (varbit_9487 == 8) {
        str0 = "My Favourites";
        int3 = 8;
    }
    let int4: component = Component.interface_1143.component_1143_5;
    let int5: number = ifGetScrollY(int4);
    let int6: component = Component.interface_1143.component_1143_77;
    let int7: component = Component.interface_1143.component_1143_78;
    let int8: component = Component.interface_1143.component_1143_76;
    let int9: component = Component.interface_1143.component_1143_66;
    let int10: component = Component.interface_1143.component_1143_67;
    let int11: component = Component.interface_1143.component_1143_68;
    let int12: component = Component.interface_1143.component_1143_69;
    let int13: component = Component.interface_1143.component_1143_70;
    let int14: component = Component.interface_1143.component_1143_71;
    let int15: component = Component.interface_1143.component_1143_60;
    let int16: component = Component.interface_1143.component_1143_61;
    let int17: component = Component.interface_1143.component_1143_62;
    let int18: component = Component.interface_1143.component_1143_63;
    let int19: component = Component.interface_1143.component_1143_64;
    let int20: component = Component.interface_1143.component_1143_65;
    ccDeleteAll(int4);
    ccDeleteAll(int6);
    ccDeleteAll(int7);
    ccDeleteAll(int8);
    ccDeleteAll(int9);
    ccDeleteAll(int10);
    ccDeleteAll(int11);
    ccDeleteAll(int12);
    ccDeleteAll(int13);
    ccDeleteAll(int14);
    ccDeleteAll(int15);
    ccDeleteAll(int16);
    ccDeleteAll(int17);
    ccDeleteAll(int18);
    ccDeleteAll(int19);
    ccDeleteAll(int20);
    ifSetHide(true, Component.interface_1143.component_1143_79);
    ifSetText(append("Now Viewing: ", str0), Component.interface_1143.component_1143_80);
    let int21: number = 0;
    let int22: number = 6;
    let int23: number = int22;
    let int24: number = int22;
    let int25: number = 0;
    let int26: struct = -1;
    let int27: graphic = Graphic.aif_item_button_red_1_0;
    let int28: graphic = Graphic.aif_item_button_red_1_1;
    let int29: graphic = Graphic.aif_item_button_red_1_2;
    let int30: number = 0;
    let int31: number = 0;
    let int32: number = 0;
    let int33: number = 0;
    let int34: number = 0;
    let str1: string = "";
    let int35: component = -1;
    let int36: number = 0;
    let int37: number = 0;
    let str2: string = "See More";
    let int38: number = 0;

    if (int3 == 0) {
        int27 = Graphic.aif_item_button_green_1_0;
        int28 = Graphic.aif_item_button_green_1_1;
        int29 = Graphic.aif_item_button_green_1_2;
        int22 = 20;
        int23 = 0;
        int24 = int22;
        ccCreate(int8, 5, int21);
        int21 = int21 + 1;
        ccSetPosition(17, 24, 0, 0);
        ccSetGraphic(Graphic.aif_loyalty_scroll_bckgrd_1);
        int36 = 311;
        int37 = 311;
        ccSetSize(int36, int37, 0, 0);
        ccSetOp(1, str2);
        ccCreate(int8, 5, int21);
        int21 = int21 + 1;
        ccSetGraphic(Graphic.graphic_10133);
        ccSetSize(219, 219, 0, 0);
        ccSetPosition(17, 24, 0, 0);
        ccSetPosition(ccGetX() + (int36 - ccGetWidth()) / 2, ccGetY() + 20 + (int37 - ccGetHeight()) / 2, 0, 0);
        ccCreate(int8, 5, int21);
        int21 = int21 + 1;
        ccSetPosition(0, 62, 0, 0);
        ccSetSize(348, 34, 0, 0);
        switch (mapLang()) {
            case 1:
                ccSetGraphic(Graphic.graphic_7808);
                break;
            case 2:
                ccSetGraphic(Graphic.graphic_7807);
                break;
            case 3:
                ccSetGraphic(Graphic.graphic_7809);
                break;
            default:
                ccSetGraphic(Graphic.graphic_7806);
                break;
        }
        ccCreate(int8, 4, int21);
        int21 = int21 + 1;
        ccSetPosition(165, 275, 0, 0);
        ccSetText(str2);
        ccSetTextFont(Graphic.graphic_4040);
        ccSetTextShadow(true);
        ccSetColour(colour(0xE5BD59));
        ccSetTextAlign(2, 1, 13);
        ccSetSize(122, 24, 0, 0);
        while (int38 < enumGetoutputcount(int2)) {
            int26 = enumOp(type_int, type_struct, int2, int38);
            ccCreate(int8, 5, int21);
            int21 = int21 + 1;
            ccSetPosition(int23, int24, 2, 0);
            ccSetGraphic(int29);
            int30 = 68;
            int31 = 92;
            int23 = int23 + int30;
            ccSetSize(int30, int31, 0, 0);
            switch (structParam(int26, Param.param_1937)) {
                case 1:
                    int35 = int9;
                    break;
                case 9:
                    int35 = int10;
                    break;
                case 2:
                    int35 = int11;
                    break;
                case 3:
                    int35 = int12;
                    break;
                case 4:
                    int35 = int13;
                    break;
                case 5:
                    int35 = int14;
                    break;
            }
            ccCreate(int35, 4, ifGetNextSubId(int35));
            ccSetPosition(int23 - int30, int24, 2, 0);
            ccSetSize(int30 * 3, int31, 0, 0);
            ccSetOp(1, str2);
            ccHookMouseEnter(hook(cs2_5360, "Iiii1", [int8, int21 + 1, int21, int21 - 1, true]));
            ccHookMouseExit(hook(cs2_5360, "Iiii1", [int8, int21 + 1, int21, int21 - 1, false]));
            ccCreate(int8, 5, int21);
            int21 = int21 + 1;
            ccSetPosition(int23, int24, 2, 0);
            int23 = int23 + int30;
            ccSetGraphic(int28);
            ccSetSize(int30, int31, 0, 0);
            ccCreate(int8, 5, int21);
            int21 = int21 + 1;
            ccSetPosition(int23, int24, 2, 0);
            int23 = int23 + int30;
            ccSetGraphic(int27);
            ccSetSize(int30, int31, 0, 0);
            ccCreate(int8, 5, int21);
            int21 = int21 + 1;
            if (structParam(int26, Param.param_1937) == 1) {
                ccSetObject(structParam(int26, Param.param_1935), -1);
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(int23 - 63, int24 + 29, 2, 0);
            } else if (structParam(int26, Param.param_1937) == 9) {
                ccSetObject(structParam(int26, Param.param_1935), -1);
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(int23 - 63, int24 + 29, 2, 0);
            } else if (structParam(int26, Param.param_1937) == 2) {
                ccSetGraphic(structParam(int26, Param.emotes2_icon));
                ccSetSize(48, 48, 0, 0);
                ccSetPosition(int23 - 65, int24 + 21, 2, 0);
            } else if (structParam(int26, Param.param_1937) == 3) {
                ccSetGraphic(structParam(int26, Param.param_1441));
                ccSetSize(40, 50, 0, 0);
                ccSetPosition(int23 - 61, int24 + 20, 2, 0);
            } else if (structParam(int26, Param.param_1937) == 4) {
                ccSetGraphic(Graphic.aid_loyalty_catgry_icons_3);
                ccSetSize(42, 42, 0, 0);
                ccSetPosition(int23 - 63, int24 + 25, 2, 0);
            } else if (structParam(int26, Param.param_1937) == 5) {
                ccSetObject(structParam(int26, Param.param_1935), -1);
                ccSetSize(36, 32, 0, 0);
                ccSetPosition(int23 - 62, int24 + 29, 2, 0);
            }
            if (structParam(int26, Param.param_1933) > 0) {
                ccCreate(int8, 5, int21);
                int21 = int21 + 1;
                ccSetPosition(int23 - 44, int24 + 4, 2, 0);
                ccSetGraphic(Graphic.aif_loyalty_icon_3);
                ccSetSize(40, 34, 0, 0);
            }
            ccCreate(int8, 4, int21);
            int21 = int21 + 1;
            ccSetPosition(13, int24 + 13, 2, 0);
            if (structParam(int26, Param.param_1937) == 4) {
                int34 = enumOp(type_struct, type_int, Enum.enum_5185, int26);
                if (gender() == 0) {
                    ccSetText(enumOp(type_int, type_string, Enum.enum_3886, int34));
                } else {
                    ccSetText(enumOp(type_int, type_string, Enum.enum_3887, int34));
                }
                ccSetText(subString(ccGetText(), 0, stringLength(ccGetText()) - 1));
            } else {
                ccSetText(structParam(int26, Param.param_1930));
            }
            if (structParam(int26, Param.param_1933) > 0) {
                ccSetText(append(ccGetText(), "<br>" + tostringLocalised(structParam(int26, Param.param_1933), 1) + " Points"));
            } else {
                ccSetText(append(ccGetText(), "<br>" + tostringLocalised(structParam(int26, Param.param_1932), 1) + " Points"));
            }
            ccSetTextFont(Graphic.graphic_4040);
            ccSetTextShadow(true);
            ccSetColour(colour(0xE6BE78));
            ccSetTextAlign(1, 1, 13);
            ccSetSize(122, 60, 0, 0);
            ccCreate(int8, 4, int21);
            int21 = int21 + 1;
            ccSetPosition(13, int24 + 13 + 24 + 24, 2, 0);
            ccSetText(str2);
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetTextShadow(true);
            ccSetColour(colour(0xE6BE78));
            ccSetTextAlign(2, 1, 12);
            ccSetSize(122, 24, 0, 0);
            int24 = int24 + int31 + int22;
            int23 = 0;
            int38 = int38 + 1;
        }
    } else if (int3 == 6) {
        [int32, int23, int24, int31, int21] = cs2_5352(int32, int23, int24, int31, int22, int21, int33, int27, int28, int29);
        str1 = "There Are No Items Currently On Special Offer";
        int25 = int24 + int31 + int22;
    } else if (int3 == 7) {
        [int32, int23, int24, int31, int21] = cs2_5353(int32, int23, int24, int31, int22, int21, int33, int27, int28, int29);
        str1 = "There Are No Limited Edition Items Currently Available";
        int25 = int24 + int31 + int22;
    } else if (int3 == 8) {
        [int32, int23, int24, int31, int21] = cs2_4727(int32, int23, int24, int31, int22, int21, int33, int27, int28, int29);
        str1 = "Your Favourites List Is Currently Empty";
        int25 = int24 + int31 + int22;
    } else if (int3 == 1) {
        [int32, int23, int24, int31, int21] = cs2_4344(int32, int23, int24, int31, int22, int21, int33, int27, int28, int29);
        str1 = "There Are No Items Currently Available In This Category";
        int25 = int24 + int31 + int22;
    } else if (int3 == 9) {
        [int32, int23, int24, int31, int21] = cs2_6000(int32, int23, int24, int31, int22, int21, int33, int27, int28, int29);
        str1 = "There Are No Items Currently Available In This Category";
        int25 = int24 + int31 + int22;
    } else {
        [int32, int23, int24, int31, int21] = cs2_4726(int2, int32, int23, int24, int31, int22, int21, int33, int27, int28, int29);
        str1 = "There Are No Items Currently Available In This Category";
        int25 = int24 + int31 + int22;
    }

    if (int21 == 0) {
        ccCreate(int8, 4, int21);
        int21 = int21 + 1;
        ccSetPosition(0, 0, 1, 1);
        ccSetText(str1);
        ccSetTextFont(Graphic.graphic_4040);
        ccSetTextShadow(true);
        ccSetColour(colour(0xE6BE78));
        ccSetTextAlign(1, 1, 13);
        ccSetSize(0, 0, 1, 1);
    }

    if (int25 > ifGetHeight(int4)) {
        ifSetScrollSize(ifGetWidth(int4), int25, int4);
        if (varbit_9487 == intArg0) {
            ifSetScrollPos(0, int5, int4);
        } else {
            ifSetScrollPos(0, 0, int4);
        }
        ifSetSize(ifGetWidth(int4), int25, 0, 0, int6);
        ifSetSize(ifGetWidth(int4), int25, 0, 0, int7);
        ifSetSize(ifGetWidth(int4), int25, 0, 0, int8);
        proc_scrollbar_vertical(Component.interface_1143.component_1143_6, int4, Graphic.aif_scrollbar_dragger_4_3, Graphic.aif_scrollbar_dragger_4_0, Graphic.aif_scrollbar_dragger_4_1, Graphic.aif_scrollbar_dragger_4_2, Graphic.aif_scrollbar_arrow_4_1, Graphic.aif_scrollbar_arrow_4_0);
    } else {
        ifSetScrollSize(ifGetWidth(int4), ifGetHeight(int4), int4);
        ifSetScrollPos(0, 0, int4);
        ifSetSize(ifGetWidth(int4), ifGetHeight(int4), 0, 0, int6);
        ifSetSize(ifGetWidth(int4), ifGetHeight(int4), 0, 0, int7);
        ifSetSize(ifGetWidth(int4), ifGetHeight(int4), 0, 0, int8);
        ccDeleteAll(Component.interface_1143.component_1143_6);
    }
    ifSetOnVarTransmit(hook(cs2_5349, "iIY", [int3, intArg1], [2226, 2391, 2444, 2541, 2392, 2393, 2394, 2445, 2542]), intArg1);
}
