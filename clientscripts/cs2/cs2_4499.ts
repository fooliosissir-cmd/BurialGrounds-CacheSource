/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4499

function cs2_4499(intArg0: Enum, intArg1: number, strArg0: string, intArg2: number, intArg3: number, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component): void {
    if (intArg2 == -1) {
        intArg2 = enumGetoutputcount(intArg0) - 1;
    } else {
        intArg2 = intArg2;
    }
    ccDeleteAll(intArg7);
    let int9: number = 0;
    let int10: number = 5;
    let int11: number = 0;

    while (int9 <= intArg2) {
        ccCreate(intArg7, 4, int9);
        ccSetText(enumOp(type_int, type_string, intArg0, int9));
        if (stringLength(enumOp(type_int, type_string, intArg0, int9)) == 0) {
            ccSetPosition(5, int10, 0, 0);
            ccSetSize(5, 0, 1, 0);
            ccSetHide(true);
        } else {
            ccSetPosition(5, int10, 0, 0);
            ccSetSize(5, 15, 1, 0);
            if (intArg4 == Component.interface_190.component_190_27) {
                ccSetTextFont(Graphic.p11_full);
            } else {
                ccSetTextFont(Graphic.verdana_11pt_regular);
            }
            ccSetColour(colour(0xEFB063));
            ccSetTextShadow(true);
            ccSetOnMouseOver(hook(cs2_4502, "IIi", [intArg6, intArg7, event_comsubid]));
            int11 = int11 + 1;
        }
        int10 = int10 + ccGetHeight();
        int9 = 1 + int9;
    }

    if (intArg1 == 1) {
        dropdown_sort(intArg7, int9 - 1);
    }
    intArg3 = min(int11, intArg3);
    intArg3 = max(intArg3, 1);
    let int12: number = 15 * intArg3;
    let int13: number = int12 + 5 * 2;
    let int14: component = ifGetLayer(intArg7);

    if (int14 == -1) {
        return;
    }
    let int15: component = ifGetLayer(int14);

    if (int15 == -1) {
        return;
    }
    let int16: component = ifGetLayer(int15);

    if (int16 == -1) {
        return;
    }
    ifSetSize(ifGetWidth(int15), int13 + ifGetHeight(intArg4), 0, 0, int15);
    ifSetSize(ifGetWidth(int15), int13, 0, 0, int14);

    if (ifGetLayer(int15) == -1) {
        return;
    }

    if (ifGetHeight(int16) < ifGetHeight(int15)) {
        return;
    }

    if (ifGetHeight(int16) < ifGetY(int15) + ifGetHeight(int15) && ifGetY(int15) + ifGetHeight(intArg4) - ifGetHeight(int15) < 0) {
        return;
    }

    if (ifGetY(int15) + int13 > ifGetHeight(ifGetLayer(int15))) {
        ifSetPosition(ifGetX(int15), ifGetY(int15) - (ifGetHeight(int15) - ifGetHeight(intArg4)), 0, 0, int15);
        ifSetPosition(0, 0, 0, 0, int14);
        ifSetPosition(0, 0, 0, 2, intArg4);
    } else {
        ifSetPosition(0, 0, 0, 0, intArg4);
        ifSetPosition(0, 0, 0, 2, int14);
    }
    ifSetHide(true, int14);
    ifSetOnClick(hook(cs2_4505, "III", [intArg7, intArg4, intArg8]), intArg4);
    ifSetSize(0, 15, 1, 0, intArg6);
    ifSetHide(true, intArg6);
    ifSetScrollSize(0, int10 + 5, intArg7);
    ccDeleteAll(intArg5);
    proc_scrollbar_vertical(intArg5, intArg7, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    cs2_4501(intArg4, strArg0);
}
