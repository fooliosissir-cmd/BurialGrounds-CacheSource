/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5797

function cs2_5797(intArg0: number, intArg1: struct, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: component, intArg7: component, intArg8: component, intArg9: component, intArg10: number): number {
    let int11: number = 1;
    let int12: number = intArg4;
    let int13: number = intArg4;

    ifSetSize(0, int12, 1, 0, intArg6);

    if (intArg3 == 1) {
        ccDeleteAll(intArg6);
        if (intArg7 != -1) {
            ccDeleteAll(intArg7);
        }
        ccDeleteAll(intArg8);
        ifSetScrollSize(0, 0, intArg9);
        ifSetSize(0, 0, 1, 1, intArg6);
        ifSetSize(17, 0, 1, 1, intArg9);
    }

    while (int11 < intArg2 + 1) {
        int13 = cs2_5798(intArg0, intArg1, int11, "", int12, intArg6, intArg7, intArg10);
        if (int12 == int13) {
            int11 = intArg2 + 1;
        } else {
            int11 = int11 + 1;
        }
        int12 = int13;
    }
    ifSetSize(ifGetWidth(intArg6), int12, 0, 0, intArg6);

    if (intArg7 != -1) {
        ifSetSize(ifGetWidth(intArg7), int12, 0, 0, intArg7);
    }

    if (int12 < intArg5) {
        ifSetHide(true, intArg8);
        ifSetSize(3, 0, 1, 1, intArg9);
    } else {
        int12 = int12 + 5;
        ifSetScrollSize(0, max(int12, ifGetHeight(intArg9)), intArg9);
        ifSetSize(ifGetWidth(intArg8) + 2, 0, 1, 1, intArg9);
        ifSetHide(false, intArg8);
        proc_scrollbar_vertical(intArg8, intArg9, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
    varc_1772 = int13;
    return int13;
}
