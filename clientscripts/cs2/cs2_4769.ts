/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4769

function cs2_4769(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number): [number, number, number, number, number, number, number, number] {
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: component = -1;
    let int14: component = -1;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let int29: number = 0;
    let int30: number = 0;
    let int31: number = 0;
    let int32: number = 0;
    let int33: number = 0;
    let int34: number = 0;
    let int35: number = 0;
    let int36: number = 0;
    let int37: number = 0;
    let int38: number = 0;
    let int39: number = 0;
    let int40: number = 0;

    if (intArg0 == 1) {
        int11 = 300;
        int13 = Component.interface_1115.component_1115_67;
        int14 = Component.interface_1115.component_1115_66;
    } else if (intArg0 == 2) {
        int11 = 600;
        int13 = Component.interface_1115.component_1115_65;
        int14 = Component.interface_1115.component_1115_64;
    } else {
        int11 = 900;
        int13 = Component.interface_1115.component_1115_63;
        int14 = Component.interface_1115.component_1115_62;
        varc_clan_build_core_jobs = 0;
        varc_clan_build_plot_jobs = 0;
    }

    while (intArg1 <= 31 && int12 == 0) {
        int10 = cs2_4790(intArg1);
        if (int10 > int11 || int10 == 0) {
            int12 = 1;
        } else {
            [intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24, int25, int26, int27, int28, int29, int30, int31, int32, int33, int34, int35, int36, int37, int38, int39] = cs2_4795(intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8);
            if (int15 + int16 + int17 + int18 + int19 + int20 == 0) {
                int40 = 0;
            } else if (int33 + int34 + int35 + int36 + int37 + int38 > 0) {
                int40 = 3;
            } else if (int27 + int28 + int29 + int30 + int31 + int32 > 0) {
                int40 = 2;
            } else if (int21 + int22 + int23 + int24 + int25 + int26 > 0) {
                int40 = 1;
            }
            int9 = cs2_4770(int13, int9, int10, int39, int40, intArg1);
            if (int9 == 0) {
                return [0, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8];
            }
            intArg1 = intArg1 + 1;
        }
    }
    let int41: number = 38;
    let int42: number = int9 / 8 * int41;

    if (int9 > 0) {
        int9 = cs2_4771(int13, int9);
    }
    int42 = int42 + 10;
    ifSetScrollSize(ifGetWidth(int13), int42, int13);
    ifSetScrollPos(0, 0, int13);
    proc_scrollbar_vertical(int14, int13, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    return [intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8];
}
