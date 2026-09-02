/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_arrow_update]

function worldmap_arrow_update(intArg0: component, intArg1: coord, strArg0: string, intArg2: struct, intArg3: component, intArg4: number, intArg5: number, intArg6: number, intArg7: number): void {
    if (intArg1 == -1 || intArg1 == 0) {
        ccDeleteAll(intArg0);
        ifSetHide(true, intArg0);
        return;
    }
    let [int8, int9] = worldMapGetDisplayCoord(intArg1);

    if (int8 < 0 || int9 < 0) {
        intArg1 = moveCoord(0, coordX(intArg1), cs2_686(coordY(intArg1) - 1, 4), coordZ(intArg1));
        [int8, int9] = worldMapGetDisplayCoord(intArg1);
        if (int8 < 0 || int9 < 0) {
            intArg1 = moveCoord(0, coordX(intArg1), cs2_686(coordY(intArg1) - 1, 4), coordZ(intArg1));
            [int8, int9] = worldMapGetDisplayCoord(intArg1);
            if (int8 < 0 || int9 < 0) {
                intArg1 = moveCoord(0, coordX(intArg1), cs2_686(coordY(intArg1) - 1, 4), coordZ(intArg1));
                [int8, int9] = worldMapGetDisplayCoord(intArg1);
                if (int8 < 0 || int9 < 0) {
                    ccDeleteAll(intArg0);
                    ifSetHide(true, intArg0);
                    return;
                }
            }
        }
    }
    ifSetHide(false, intArg0);
    let int10: number = ifGetWidth(intArg3);
    let int11: number = ifGetHeight(intArg3);

    if (intArg2 == -1) {
        intArg2 = Struct.worldmap_overlay_style_default;
    }
    int8 = scale(int10, intArg6 - intArg7, int8 - intArg7);
    int9 = scale(int11, intArg4 - intArg5, int9 - intArg5);
    int8 = max(min(int8, int10), 0);
    int9 = max(min(int9, int11), 0);
    int8 = int8 - int10 / 2;
    int9 = int11 / 2 - int9;
    ifSetPosition(int8, int9, 1, 1, intArg0);
    let int12: graphic = structParam(intArg2, Param.param_132);
    let int13: graphic = structParam(intArg2, Param.param_133);
    let int14: number = -1;

    if (int8 <= 0 - int10 / 2) {
        if (int9 <= 0 - int11 / 2) {
            int14 = 3;
        } else if (int9 >= int11 / 2) {
            int14 = 1;
        } else {
            int14 = 2;
        }
    } else if (int8 >= int10 / 2) {
        if (int9 <= 0 - int11 / 2) {
            int14 = 5;
        } else if (int9 >= int11 / 2) {
            int14 = 7;
        } else {
            int14 = 6;
        }
    } else if (int9 <= 0 - int11 / 2) {
        int14 = 4;
    } else if (int9 >= int11 / 2) {
        int14 = 0;
    }
    let int15: graphic = Graphic.emotes_40;
    let int16: graphic = Graphic.emotes_40;
    let int17: graphic = Graphic.emotes_40;
    let int18: graphic = Graphic.emotes_40;
    let str1: string = "Scroll map";
    let str2: string = "";

    if (stringLength(strArg0) > 0) {
        if (intArg0 == Component.interface_755.component_755_36) {
            str2 = "Your position";
        } else {
            str2 = removetags(cs2_2332(strArg0, "<br>", " "));
        }
        str1 = "Scroll map:";
    }

    if (int14 == -1) {
        cs2_2048(intArg0, 0, structParam(intArg2, Param.param_130), int12, int13, 0, 0, 0, false, false, false, 0, str2, str1, intArg1);
        int15 = int13 / 2;
        int16 = int13 / 2;
        int17 = int12 / 2;
        int18 = int12 / 2;
        cs2_2048(intArg0, 1, structParam(intArg2, Param.param_131), int12, int13, 0, 0, 0, false, false, false, 1, "", "", -1);
    } else {
        int12 = structParam(intArg2, Param.param_136);
        int13 = structParam(intArg2, Param.param_645);
        switch (int14) {
            case 0:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_134), int12, int13, 0, 0 - int13 / 2, 49152, false, false, false, 0, str2, str1, intArg1);
                int15 = int13;
                int16 = Graphic.emotes_40;
                int17 = int12 / 2;
                int18 = int12 / 2;
                break;
            case 1:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_135), int12, int13, int12 / 2, 0 - int13 / 2, 32768, false, false, false, 0, str2, str1, intArg1);
                int15 = int13;
                int16 = Graphic.emotes_40;
                int17 = Graphic.emotes_40;
                int18 = int12;
                break;
            case 2:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_134), int12, int13, int12 / 2, 0, 32768, false, false, false, 0, str2, str1, intArg1);
                int15 = int13 / 2;
                int16 = int13 / 2;
                int17 = Graphic.emotes_40;
                int18 = int12;
                break;
            case 3:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_135), int12, int13, int12 / 2, int13 / 2, 16384, false, false, false, 0, str2, str1, intArg1);
                int15 = Graphic.emotes_40;
                int16 = int13;
                int17 = Graphic.emotes_40;
                int18 = int12;
                break;
            case 4:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_134), int12, int13, 0, int13 / 2, 16384, false, false, false, 0, str2, str1, intArg1);
                int15 = Graphic.emotes_40;
                int16 = int13;
                int17 = int12 / 2;
                int18 = int12 / 2;
                break;
            case 5:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_135), int12, int13, 0 - int12 / 2, int13 / 2, 0, false, false, false, 0, str2, str1, intArg1);
                int15 = Graphic.emotes_40;
                int16 = int13;
                int17 = int12;
                int18 = Graphic.emotes_40;
                break;
            case 6:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_134), int12, int13, 0 - int12 / 2, 0, 0, false, false, false, 0, str2, str1, intArg1);
                int15 = int13 / 2;
                int16 = int13 / 2;
                int17 = int12;
                int18 = Graphic.emotes_40;
                break;
            case 7:
                cs2_2048(intArg0, 0, structParam(intArg2, Param.param_135), int12, int13, 0 - int12 / 2, 0 - int13 / 2, 49152, false, false, false, 0, str2, str1, intArg1);
                int15 = int13;
                int16 = Graphic.emotes_40;
                int17 = int12;
                int18 = Graphic.emotes_40;
                break;
        }
        worldmap_hidegraphic(intArg0, 1);
    }
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: graphic = Graphic.emotes_40;
    let int24: graphic = Graphic.emotes_40;
    let int25: number = 0;
    let int26: number = 0;
    let int27: graphic = -1;
    let int28: graphic = -1;
    let int29: graphic = -1;
    let int30: number = 0;

    if (stringLength(strArg0) > 0) {
        int23 = structParam(intArg2, Param.worldmap_overlay_textbox_marginwidth);
        int24 = structParam(intArg2, Param.worldmap_overlay_textbox_marginheight);
        int27 = structParam(intArg2, Param.worldmap_overlay_textbox_lefttop);
        int28 = structParam(intArg2, Param.worldmap_overlay_textbox_top);
        int29 = structParam(intArg2, Param.worldmap_overlay_textbox_left);
        int19 = parawidth(strArg0, int10, Graphic.menu_font_small) + int23 + int23;
        int20 = paraheight(strArg0, int19, Graphic.menu_font_small) * 13 + 2 + int24 + int24;
        if (int15 + int20 < int9 + int11 / 2) {
            int22 = 0 - (int15 + int20 / 2);
        } else {
            int22 = int16 + int20 / 2;
        }
        int30 = int8 + int10 / 2 - int19 / 2;
        if (int30 <= 0) {
            int21 = 0 - int30;
        } else {
            int30 = int8 + int10 / 2 + int19 / 2;
            if (int30 >= int10) {
                int21 = int10 - int30;
            }
        }
        int25 = (int19 - int23) / 2;
        int26 = (int20 - int24) / 2;
        cs2_2048(intArg0, 2, structParam(intArg2, Param.worldmap_overlay_textbox_filler), int19 - int23 * 2, int20 - int24 * 2, int21, int22, 0, true, false, false, 0, "", "", -1);
        cs2_2048(intArg0, 3, int28, int19 - int23 * 2, int24, int21, int22 - int26, 0, true, false, false, 0, "", "", -1);
        cs2_2048(intArg0, 4, int28, int19 - int23 * 2, int24, int21, int22 + int26, 0, true, false, true, 0, "", "", -1);
        cs2_2048(intArg0, 5, int29, int23, int20 - int24 * 2, int21 - int25, int22, 0, true, false, false, 0, "", "", -1);
        cs2_2048(intArg0, 6, int29, int23, int20 - int24 * 2, int21 + int25, int22, 0, true, true, false, 0, "", "", -1);
        cs2_2048(intArg0, 7, int27, int23, int24, int21 - int25, int22 - int26, 0, false, false, false, 0, "", "", -1);
        cs2_2048(intArg0, 8, int27, int23, int24, int21 + int25, int22 - int26, 0, false, true, false, 0, "", "", -1);
        cs2_2048(intArg0, 9, int27, int23, int24, int21 - int25, int22 + int26, 0, false, false, true, 0, "", "", -1);
        cs2_2048(intArg0, 10, int27, int23, int24, int21 + int25, int22 + int26, 0, false, true, true, 0, "", "", -1);
        cs2_2051(intArg0, 11, strArg0, int19, int20, int21 + 1, int22 + 1, structParam(intArg2, Param.worldmap_overlay_text_shadowcolour), "", "", -1);
        cs2_2051(intArg0, 12, strArg0, int19, int20, int21, int22, structParam(intArg2, Param.worldmap_overlay_text_colour), str2, str1, intArg1);
    } else {
        if (ccFind(intArg0, 2) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 3) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 4) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 5) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 6) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 7) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 8) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 9) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 10) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 11) == 1) {
            ccDelete();
        }
        if (ccFind(intArg0, 12) == 1) {
            ccDelete();
        }
    }
    let int31: number = 0;
    let int32: number = 0;

    if (int21 < 0) {
        int31 = max(0 - (int21 - int19 / 2), int17);
    } else if (int19 > 0) {
        int31 = max(int21 + int19 / 2, int18);
    } else {
        int31 = max(int17, int18);
    }

    if (int22 <= 0) {
        int32 = max(int15 + int20, int16);
    } else {
        int32 = int16 + int20;
    }
    [int31, int32] = [int31 * 2 + 2, int32 * 2 + 2];
    ifSetSize(int31, int32, 0, 0, intArg0);
}
