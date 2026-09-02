/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5754

function cs2_5754(intArg0: Enum, intArg1: number, strArg0: string, intArg2: number, intArg3: number, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component): void {
    if (intArg2 == -1) {
        intArg2 = enumGetoutputcount(intArg0) - 1;
    } else {
        intArg2 = intArg2;
    }

    if (varp_2504 != 0) {
        strArg0 = enumOp(type_stat, type_string, Enum.stat_to_string, varp_2504);
    } else {
        strArg0 = "Combat";
    }
    ccDeleteAll(intArg7);
    let int9: number = 0;
    let int10: number = 5;
    let int11: number = 0;
    let int12: number = 0;

    while (int9 <= intArg2) {
        int11 = enumOp(type_int, type_int, intArg0, int9);
        if (cs2_5733(int11) == 1) {
            ccCreate(intArg7, 4, int12);
            if (int11 != 1) {
                ccSetText(enumOp(type_int, type_string, Enum.statstring, int11));
            } else {
                ccSetText("Combat");
            }
            if (stringLength(enumOp(type_int, type_string, Enum.statstring, int11)) == 0) {
                ccSetPosition(5, int10, 0, 0);
                ccSetSize(5, 0, 1, 0);
                ccSetHide(true);
            } else {
                ccSetPosition(5, int10, 0, 0);
                ccSetSize(5, 15, 1, 0);
                ccSetTextFont(Graphic.verdana_11pt_regular);
                ccSetColour(colour(0xEFB063));
                ccSetTextShadow(true);
                ccHookMouseEnter(hook(cs2_4502, "IIi", [intArg6, intArg7, event_comsubid]));
                int12 = 1 + int12;
            }
            int10 = int10 + ccGetHeight();
        }
        int9 = 1 + int9;
    }

    if (intArg1 == 1) {
        dropdown_sort(intArg7, int12 - 1);
    }
    intArg3 = min(int12, intArg3);
    intArg3 = max(intArg3, 1);
    let int13: number = 15 * intArg3;
    let int14: number = int13 + 5 * 2;
    let int15: component = ifGetLayer(intArg7);

    if (int15 == -1) {
        return;
    }
    let int16: component = ifGetLayer(int15);

    if (int16 == -1) {
        return;
    }
    let int17: component = ifGetLayer(int16);

    if (int17 == -1) {
        return;
    }
    ifSetSize(ifGetWidth(int16), int14 + ifGetHeight(intArg4), 0, 0, int16);
    ifSetSize(ifGetWidth(int16), int14, 0, 0, int15);

    if (ifGetLayer(int16) == -1) {
        return;
    }

    if (ifGetHeight(int17) < ifGetHeight(int16)) {
        return;
    }

    if (ifGetHeight(int17) < ifGetY(int16) + ifGetHeight(int16) && ifGetY(int16) + ifGetHeight(intArg4) - ifGetHeight(int16) < 0) {
        return;
    }

    if (ifGetY(int16) + int14 > ifGetHeight(ifGetLayer(int16))) {
        ifSetPosition(ifGetX(int16), ifGetY(int16) - (ifGetHeight(int16) - ifGetHeight(intArg4)), 0, 0, int16);
        ifSetPosition(0, 0, 0, 0, int15);
        ifSetPosition(0, 0, 0, 2, intArg4);
    } else {
        ifSetPosition(0, 0, 0, 0, intArg4);
        ifSetPosition(0, 0, 0, 2, int15);
    }
    ifSetHide(true, int15);
    ifSetOnClick(hook(cs2_4505, "III", [intArg7, intArg4, intArg8]), intArg4);
    ifSetSize(0, 15, 1, 0, intArg6);
    ifSetHide(true, intArg6);
    ifSetScrollSize(0, int10 + 5, intArg7);
    ccDeleteAll(intArg5);
    proc_scrollbar_vertical(intArg5, intArg7, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    cs2_4501(intArg4, strArg0);
}
