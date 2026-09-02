/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,emotes2_sort]

function emotes2_sort(intArg0: component, intArg1: component, intArg2: Enum, intArg3: number, intArg4: number, intArg5: number): void {
    let int6: number = 48;
    let int7: number = 48;
    let int8: number = 0;
    let int9: number = 0;
    let int10: struct = -1;
    let int11: number = -1;
    let int12: number = -1;
    let str0: string = "";
    let int13: number = 1;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 1;

    if (ifGetScrollWidth(intArg0) > 0) {
        int16 = ifGetScrollWidth(intArg0);
    } else {
        int16 = ifGetWidth(intArg0);
    }
    int16 = int16 / (int6 + intArg3);

    while (int8 < enumGetoutputcount(intArg2)) {
        int18 = 0;
        int10 = enumOp(type_int, type_struct, intArg2, int8);
        if (ccFind(intArg0, int8) == 1) {
            int13 = cs2_4718(int10);
            if (intArg5 == 0) {
                int18 = 1;
                if (structParam(int10, Param.emotes2_tag1) == 13 || structParam(int10, Param.emotes2_tag1) == 14) {
                    if (varbit_worldmap_modifier == 2) {
                        int18 = 1;
                    } else {
                        int18 = 0;
                    }
                }
            } else if (intArg5 == 1) {
                if (int13 == 1) {
                    int18 = 1;
                }
                if (structParam(int10, Param.emotes2_tag1) == 13 || structParam(int10, Param.emotes2_tag1) == 14) {
                    if (varbit_worldmap_modifier == 2) {
                        int18 = 1;
                    } else {
                        int18 = 0;
                    }
                }
            } else if (intArg5 == structParam(int10, Param.emotes2_tag1)) {
                int18 = 1;
            } else if (intArg5 == structParam(int10, Param.emotes2_tag2)) {
                int18 = 1;
            } else if (intArg5 == structParam(int10, Param.emotes2_tag3)) {
                int18 = 1;
            } else if (intArg5 == structParam(int10, Param.emotes2_tag4)) {
                int18 = 1;
            } else if (intArg5 == structParam(int10, Param.param_1426)) {
                int18 = 1;
            }
            if (int18 == 1) {
                ccSetHide(false);
                int14 = (int6 + intArg3) * (int9 % int16);
                int15 = int9 / int16 * (int7 + intArg4);
                ccSetPosition(int14, int15, 0, 0);
                int9 = int9 + 1;
            } else {
                ccSetHide(true);
            }
        }
        int8 = int8 + 1;
    }

    if (intArg4 + int15 + int7 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, int7 + int15, intArg0);
        ifSetHide(false, intArg1);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ifSetScrollPos(0, 0, intArg0);
        ccDeleteAll(intArg1);
        ifSetHide(true, intArg1);
    }
}
