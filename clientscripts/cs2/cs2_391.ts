/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_391

function cs2_391(): void {
    let int0: component = -1;
    let int1: Enum = -1;
    let int2: Enum = -1;
    let int3: Enum = -1;
    let int4: number = -1;
    let int5: graphic = -1;
    let int6: Enum = -1;
    let int7: Enum = -1;
    let int8: Enum = -1;
    let int9: number = -1;
    let int10: graphic = -1;
    let str0: string = "";

    switch (varc_1020) {
        case 0:
            int0 = Component.interface_1028.component_1028_116;
            int6 = Enum.player_kit_skin_index_to_basecolour;
            int7 = Enum.enum_746;
            int8 = Enum.enum_747;
            int9 = 4;
            int10 = varc_1019;
            str0 = "Select skin colour:";
            ifSetHide(true, Component.interface_1028.component_1028_123);
            break;
        case 1:
            int0 = Component.interface_1028.component_1028_117;
            if (gender() == 1) {
                int1 = Enum.enum_3302;
                int2 = Enum.enum_3303;
                int4 = 7;
            } else {
                int1 = Enum.enum_3304;
                int2 = Enum.enum_3305;
                int4 = 0;
            }
            int5 = varc_1008;
            int6 = Enum.player_kit_hair_index_to_basecolour;
            int7 = Enum.player_kit_hair_colour;
            int8 = Enum.player_kit_hair_colour_name;
            int9 = 0;
            int10 = varc_1015;
            str0 = "Select hairstyle:";
            ifSetHide(true, Component.interface_1028.component_1028_123);
            break;
        case 2:
            int0 = Component.interface_1028.component_1028_121;
            if (gender() != 1) {
                int1 = Enum.player_kit_beard_male_getidkit_onlythegood;
                int2 = Enum.enum_3306;
                int3 = Enum.player_kit_male_beard_names;
                int4 = 1;
                int5 = varc_1009;
                int6 = Enum.player_kit_hair_index_to_basecolour;
                int7 = Enum.player_kit_hair_colour;
                int8 = Enum.player_kit_hair_colour_name;
                int9 = 0;
                int10 = varc_1015;
            }
            str0 = "Select facial hair:";
            ifSetHide(true, Component.interface_1028.component_1028_123);
            break;
        case 3:
            int0 = Component.interface_1028.component_1028_118;
            if (gender() == 1) {
                int1 = Enum.enum_3299;
                int2 = Enum.enum_3298;
                int3 = Enum.enum_1590;
                int4 = 9;
            } else {
                int1 = Enum.enum_3287;
                int2 = Enum.enum_3286;
                int3 = Enum.enum_689;
                int4 = 2;
            }
            int5 = varc_1010;
            int6 = Enum.player_kit_torso_colourcode_onlythegood;
            int7 = Enum.enum_2347;
            int8 = Enum.enum_2348;
            int9 = 1;
            int10 = varc_playerdesign3_torsocol;
            str0 = "Select torso:";
            ifSetHide(false, Component.interface_1028.component_1028_123);
            break;
        case 6:
            int0 = Component.interface_1028.component_1028_119;
            if (gender() == 1) {
                int1 = Enum.enum_3301;
                int2 = Enum.enum_3300;
                int3 = Enum.enum_1606;
                int4 = 12;
            } else {
                int1 = Enum.enum_3289;
                int2 = Enum.enum_3288;
                int3 = Enum.enum_1585;
                int4 = 5;
            }
            int5 = varc_1013;
            int6 = Enum.player_kit_torso_colourcode_onlythegood;
            int7 = Enum.enum_2347;
            int8 = Enum.enum_2348;
            int9 = 2;
            int10 = varc_playerdesign3_legscol;
            str0 = "Select legs:";
            ifSetHide(false, Component.interface_1028.component_1028_123);
            break;
        case 7:
            int0 = Component.interface_1028.component_1028_120;
            if (gender() == 1) {
                int1 = Enum.enum_1137;
                int2 = Enum.enum_3295;
                int3 = Enum.enum_3294;
                int4 = 13;
            } else {
                int1 = Enum.enum_1136;
                int2 = Enum.enum_3292;
                int3 = Enum.enum_3291;
                int4 = 6;
            }
            int5 = varc_1014;
            int6 = Enum.player_kit_feet_colourcodes;
            int7 = Enum.player_kit_feet_colours;
            int8 = Enum.enum_3296;
            int9 = 3;
            int10 = varc_playerdesign3_feetcol;
            str0 = "Select footwear:";
            ifSetHide(false, Component.interface_1028.component_1028_123);
            break;
    }
    ccDeleteAll(Component.interface_1028.component_1028_115);
    ifSetOnMouseOver(noHook(""), int0);
    ifSetOnMouseLeave(hook(cs2_382, "", []), int0);
    cs2_376(Component.interface_1028.component_1028_115, int0, -1, colour(0xDFBA38), colour(0xC37C00), 0, 0);

    if (int0 != Component.interface_1028.component_1028_116) {
        ifSetOnMouseOver(hook(cs2_375, "IIiiiii", [Component.interface_1028.component_1028_115, event_com, -1, colour(0xBFA549), colour(0xBFA549), 0, 6]), Component.interface_1028.component_1028_116);
        ifSetOnMouseLeave(hook(cs2_377, "Ii", [Component.interface_1028.component_1028_115, 6]), Component.interface_1028.component_1028_116);
    }
    ifSetOnMouseRepeat(hook(cs2_378, "sIii", [ifGetOp(1, Component.interface_1028.component_1028_116), event_com, -1, event_mousex]), Component.interface_1028.component_1028_116);

    if (int0 != Component.interface_1028.component_1028_117) {
        ifSetOnMouseOver(hook(cs2_375, "IIiiiii", [Component.interface_1028.component_1028_115, event_com, -1, colour(0xBFA549), colour(0xBFA549), 0, 6]), Component.interface_1028.component_1028_117);
        ifSetOnMouseLeave(hook(cs2_377, "Ii", [Component.interface_1028.component_1028_115, 6]), Component.interface_1028.component_1028_117);
    }
    ifSetOnMouseRepeat(hook(cs2_378, "sIii", [ifGetOp(1, Component.interface_1028.component_1028_117), event_com, -1, event_mousex]), Component.interface_1028.component_1028_117);

    if (int0 != Component.interface_1028.component_1028_121) {
        ifSetOnMouseOver(hook(cs2_375, "IIiiiii", [Component.interface_1028.component_1028_115, event_com, -1, colour(0xBFA549), colour(0xBFA549), 0, 6]), Component.interface_1028.component_1028_121);
        ifSetOnMouseLeave(hook(cs2_377, "Ii", [Component.interface_1028.component_1028_115, 6]), Component.interface_1028.component_1028_121);
    }
    ifSetOnMouseRepeat(hook(cs2_378, "sIii", [ifGetOp(1, Component.interface_1028.component_1028_121), event_com, -1, event_mousex]), Component.interface_1028.component_1028_121);

    if (int0 != Component.interface_1028.component_1028_118) {
        ifSetOnMouseOver(hook(cs2_375, "IIiiiii", [Component.interface_1028.component_1028_115, event_com, -1, colour(0xBFA549), colour(0xBFA549), 0, 6]), Component.interface_1028.component_1028_118);
        ifSetOnMouseLeave(hook(cs2_377, "Ii", [Component.interface_1028.component_1028_115, 6]), Component.interface_1028.component_1028_118);
    }
    ifSetOnMouseRepeat(hook(cs2_378, "sIii", [ifGetOp(1, Component.interface_1028.component_1028_118), event_com, -1, event_mousex]), Component.interface_1028.component_1028_118);

    if (int0 != Component.interface_1028.component_1028_119) {
        ifSetOnMouseOver(hook(cs2_375, "IIiiiii", [Component.interface_1028.component_1028_115, event_com, -1, colour(0xBFA549), colour(0xBFA549), 0, 6]), Component.interface_1028.component_1028_119);
        ifSetOnMouseLeave(hook(cs2_377, "Ii", [Component.interface_1028.component_1028_115, 6]), Component.interface_1028.component_1028_119);
    }
    ifSetOnMouseRepeat(hook(cs2_378, "sIii", [ifGetOp(1, Component.interface_1028.component_1028_119), event_com, -1, event_mousex]), Component.interface_1028.component_1028_119);

    if (int0 != Component.interface_1028.component_1028_120) {
        ifSetOnMouseOver(hook(cs2_375, "IIiiiii", [Component.interface_1028.component_1028_115, event_com, -1, colour(0xBFA549), colour(0xBFA549), 0, 6]), Component.interface_1028.component_1028_120);
        ifSetOnMouseLeave(hook(cs2_377, "Ii", [Component.interface_1028.component_1028_115, 6]), Component.interface_1028.component_1028_120);
    }
    ifSetOnMouseRepeat(hook(cs2_378, "sIii", [ifGetOp(1, Component.interface_1028.component_1028_120), event_com, -1, event_mousex]), Component.interface_1028.component_1028_120);
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: struct = -1;
    let int16: graphic = -1;
    let int17: number = -1;
    let int18: number = 0;
    let str1: string = "";
    ccDeleteAll(Component.interface_1028.component_1028_128);
    ccDeleteAll(Component.interface_1028.component_1028_125);

    if (int1 != -1 && int2 != -1 && int4 != -1) {
        int14 = (ifGetWidth(Component.interface_1028.component_1028_128) - 4 * 65) / 3;
        int12 = enumGetoutputcount(int1);
        while (int11 < int12) {
            ccCreate(Component.interface_1028.component_1028_128, 5, int11);
            ccSetSize(65, 65, 0, 0);
            ccSetPosition(int11 % 4 * (65 + int14), int11 / 4 * (65 + int14), 0, 0);
            ccSetGraphic(enumOp(type_int, type_graphic, int2, int11));
            if (varc_1020 == 1) {
                int15 = enumOp(type_int, type_struct, int1, int11);
                if (int15 != -1) {
                    str1 = structParam(int15, Param.hair_name);
                    ccSetOp(1, str1);
                    int16 = structParam(int15, Param.hair_default);
                } else {
                    str1 = "";
                    int16 = -1;
                }
            } else {
                str1 = enumOp(type_int, type_string, int3, int11);
                ccSetOp(1, str1);
                int16 = enumOp(type_int, 75, int1, int11);
            }
            if (int5 == int16) {
                int17 = int11;
                int18 = ccGetY();
                if (stringLength(str1) > 0) {
                    str0 = str0 + " " + str1;
                }
                ccSetOnMouseLeave(hook(cs2_382, "", []));
            } else {
                ccSetOnOp(hook(cs2_355, "iKi", [event_opindex, int16, int4]));
                ccSetOnMouseOver(hook(cs2_373, "Iiii1", [event_com, event_comsubid, int12 + 1, 2, true]));
                ccSetOnMouseLeave(hook(cs2_373, "Iiii1", [event_com, event_comsubid, int12 + 1, 2, false]));
            }
            if (stringLength(str1) > 0) {
                ccSetOnMouseRepeat(hook(cs2_378, "sIii", [str1, event_com, event_comsubid, event_mousex]));
            }
            int13 = ccGetY();
            int11 = int11 + 1;
        }
        int13 = int13 + 65;
        ccCreate<1>(Component.interface_1028.component_1028_128, 3, int12);
        if (int17 != -1 && ccFind(Component.interface_1028.component_1028_128, int17) == 1) {
            ccSetSize<1>(ccGetWidth() - 6, ccGetHeight() - 6, 0, 0);
            ccSetPosition<1>(ccGetX() + 3, ccGetY() + 3, 0, 0);
            ccSetColour<1>(colour(0x000000));
            ccSetTrans<1>(175);
            ccSetfill<1>(true);
        } else {
            ccSetHide<1>(true);
        }
    }
    let int19: number = 3466;

    if (int13 > ifGetHeight(Component.interface_1028.component_1028_128)) {
        ifSetScrollSize(0, int13, Component.interface_1028.component_1028_128);
        if (int18 < ifGetScrollY(Component.interface_1028.component_1028_128)) {
            ifSetScrollPos(0, int18 - 15, Component.interface_1028.component_1028_128);
        } else if (int18 + 65 >= ifGetScrollY(Component.interface_1028.component_1028_128) + ifGetHeight(Component.interface_1028.component_1028_128)) {
            ifSetScrollPos(0, int18 + 65 + 15 - ifGetHeight(Component.interface_1028.component_1028_128), Component.interface_1028.component_1028_128);
        }
        cs2_186(Component.interface_1028.component_1028_126, Component.interface_1028.component_1028_128, Graphic.graphic_6118, Graphic.graphic_6119, Graphic.graphic_6120, Graphic.graphic_6115, Graphic.graphic_6116, Graphic.graphic_6117, Graphic.graphic_6122, Graphic.graphic_6121, Graphic.graphic_6124, Graphic.graphic_6123, Graphic.graphic_6126, Graphic.graphic_6125);
    } else {
        ifSetScrollPos(0, 0, Component.interface_1028.component_1028_128);
        ifSetScrollSize(0, 0, Component.interface_1028.component_1028_128);
        ccDeleteAll(Component.interface_1028.component_1028_126);
        if (varc_1020 == 0) {
            cs2_374(Component.interface_1028.component_1028_128, "Please choose your skin colour" + "<br>" + "from the selection on the right.", 20);
        } else if (varc_1020 == 2 && gender() == 1) {
            cs2_374(Component.interface_1028.component_1028_128, "Female characters cannot have" + "<br>" + "facial hair in RuneScape.", 20);
        }
    }
    cs2_374(Component.interface_1028.component_1028_125, str0, 0);
    ccDeleteAll(Component.interface_1028.component_1028_132);
    let int20: graphic = -1;
    int17 = -1;
    int11 = 0;
    int18 = 0;
    let int21: number = 0;

    if (int6 != -1 && int7 != -1 && int9 != -1) {
        int12 = enumGetoutputcount(int6);
        int21 = int12 + 6;
        while (int11 < int12) {
            ccCreate(Component.interface_1028.component_1028_132, 3, int11);
            ccSetSize(15, 17 - 2, 1, 0);
            ccSetPosition(0, int11 * 17 + 1, 1, 0);
            ccSetfill(true);
            ccSetColour(enumOp(type_int, type_int, int7, int11));
            str1 = enumOp(type_int, type_string, int8, int11);
            ccSetOp(1, str1);
            int20 = enumOp(type_int, type_int, int6, int11);
            if (int10 == int20) {
                int17 = int11;
                int18 = ccGetY();
                ccSetOnMouseLeave(hook(cs2_382, "", []));
            } else {
                ccSetOnOp(hook(cs2_357, "iii", [event_opindex, int20, int9]));
                ccSetOnMouseOver(hook(cs2_375, "IIiiiii", [event_com, event_com, event_comsubid, colour(0xBFA549), colour(0xBFA549), 1, int21]));
                ccSetOnMouseLeave(hook(cs2_377, "Ii", [event_com, int21]));
            }
            if (stringLength(str1) > 0) {
                ccSetOnMouseRepeat(hook(cs2_381, "sIii", [str1, event_com, event_comsubid, event_mousey]));
            }
            int11 = int11 + 1;
        }
    } else {
        int12 = 0;
    }
    int13 = max(int12 * 17, 0);

    if (int13 > ifGetHeight(Component.interface_1028.component_1028_129) - 12) {
        ifSetSize(23, 12, 1, 1, Component.interface_1028.component_1028_132);
        ifSetPosition(5, 0, 0, 1, Component.interface_1028.component_1028_132);
        ifSetScrollSize(0, int13, Component.interface_1028.component_1028_132);
        if (int18 < ifGetScrollY(Component.interface_1028.component_1028_132)) {
            ifSetScrollPos(0, int18 - 5, Component.interface_1028.component_1028_132);
        } else if (int18 + 17 >= ifGetScrollY(Component.interface_1028.component_1028_132) + ifGetHeight(Component.interface_1028.component_1028_132)) {
            ifSetScrollPos(0, int18 + 17 + 5 - ifGetHeight(Component.interface_1028.component_1028_132), Component.interface_1028.component_1028_132);
        }
        ifSetHide(false, Component.interface_1028.component_1028_131);
        cs2_186(Component.interface_1028.component_1028_131, Component.interface_1028.component_1028_132, Graphic.graphic_6118, Graphic.graphic_6119, Graphic.graphic_6120, Graphic.graphic_6115, Graphic.graphic_6116, Graphic.graphic_6117, Graphic.graphic_6122, Graphic.graphic_6121, Graphic.graphic_6124, Graphic.graphic_6123, Graphic.graphic_6126, Graphic.graphic_6125);
    } else {
        ifSetSize(10, 12, 1, 1, Component.interface_1028.component_1028_132);
        ifSetPosition(0, 0, 1, 1, Component.interface_1028.component_1028_132);
        ifSetScrollSize(0, 0, Component.interface_1028.component_1028_132);
        ifSetScrollPos(0, 0, Component.interface_1028.component_1028_132);
        ccDeleteAll(Component.interface_1028.component_1028_131);
        ifSetHide(true, Component.interface_1028.component_1028_131);
    }

    if (int17 != -1) {
        cs2_376(Component.interface_1028.component_1028_132, Component.interface_1028.component_1028_132, int17, colour(0xDFBA38), colour(0xC37C00), 1, int12);
    } else {
        cs2_376(Component.interface_1028.component_1028_132, -1, -1, colour(0x000000), colour(0x000000), 1, int12);
    }
    cs2_389();
}
