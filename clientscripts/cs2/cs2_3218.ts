/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3218

function cs2_3218(intArg0: component, intArg1: component, intArg2: component, strArg0: string, intArg3: number): void {
    ifSetPosition(cs2_1551(varc_1099, strArg0, Graphic.verdana_11pt_regular, ifGetX(intArg0) + 6), ifGetY(intArg2), 0, 0, intArg2);
    let int4: number = ifGetWidth(intArg0) - 11;
    let int5: number = stringLength(strArg0);
    let str1: string = "";

    if (varc_1099 > 0) {
        str1 = subString(strArg0, 0, min(varc_1099, int5));
    }
    let int6: number = stringWidth(str1, Graphic.verdana_11pt_regular) - int4;
    ifSetPosition(6, ifGetY(intArg1), 0, 0, intArg1);
    ifSetSize(max(stringWidth(strArg0, Graphic.verdana_11pt_regular), int4), ifGetHeight(intArg1), 0, 0, intArg1);

    if (int6 > 0) {
        ifSetPosition(ifGetX(intArg1) - int6, ifGetY(intArg1), 0, 0, intArg1);
        ifSetPosition(ifGetX(intArg2) - int6, ifGetY(intArg2), 0, 0, intArg2);
    }

    if (appletHasFocus() == 1) {
        ifSetHide(false, intArg2);
    } else {
        ifSetHide(true, intArg2);
    }

    if (intArg3 == 16) {
        ifSetOnTimer(hook(cs2_3955, "iI", [clientClock(), intArg2]), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_3219, "iIi", [clientClock(), intArg2, intArg3]), intArg0);
    }
}
