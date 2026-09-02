/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1348

function cs2_1348(intArg0: Enum, intArg1: number, intArg2: component, intArg3: graphic, intArg4: component, intArg5: component, intArg6: component, intArg7: colour, intArg8: colour, intArg9: colour, intArg10: graphic, intArg11: number, intArg12: number, intArg13: graphic, intArg14: graphic, intArg15: graphic, intArg16: graphic, intArg17: graphic, intArg18: graphic): void {
    if (ccFind(intArg6, intArg12) == 1) {
        ccSetvflip(true);
    }
    ccCreate(intArg2, 5, ifGetNextSubId(intArg2));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
    ccSetGraphic(intArg3);
    ccSettiling(true);
    ccCreate(intArg2, 3, ifGetNextSubId(intArg2));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
    ccSetColour(colour(0x000000));
    ifSetScrollSize(ifGetWidth(intArg4), intArg1 * 15, intArg4);
    let int19: number = 0;
    let int20: number = -1;
    let str0: string = "";

    while (int19 <= intArg1) {
        int20 = ifGetNextSubId(intArg4);
        str0 = enumOp(type_int, type_string, intArg0, int19);
        ccCreate(intArg4, 4, int20);
        ccSetText(str0);
        ccSetTextAlign(0, 1, 0);
        ccSetPosition(5, int19 * 15, 0, 0);
        ccSetSize(ifGetWidth(intArg4) - 16, 15, 0, 0);
        ccSetTextShadow(false);
        ccSetTextFont(intArg10);
        if (int19 >= intArg1) {
            ccSetColour(intArg8);
            ccHookMouseExit(hook(cs2_1354, "Iii", [intArg4, int20, intArg8]));
            ccSetOnClick(hook(cs2_1350, "IIIIiisi", [intArg2, intArg4, intArg5, intArg6, intArg11, intArg12, str0, intArg8]));
        } else {
            ccSetColour(intArg7);
            ccHookMouseExit(hook(cs2_1354, "Iii", [intArg4, int20, intArg7]));
            ccSetOnClick(hook(cs2_1350, "IIIIiisi", [intArg2, intArg4, intArg5, intArg6, intArg11, intArg12, str0, intArg7]));
        }
        ccHookMouseEnter(hook(cs2_1353, "Iii", [intArg4, int20, intArg9]));
        int19 = int19 + 1;
    }

    if (intArg5 != -1) {
        proc_scrollbar_vertical(intArg5, intArg4, intArg13, intArg14, intArg15, intArg16, intArg17, intArg18);
        ifSetHide(false, intArg5);
    }
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg4);
}
