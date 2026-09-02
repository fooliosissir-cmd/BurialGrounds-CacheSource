/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1875

function cs2_1875(intArg0: component, intArg1: component, strArg0: string): void {
    let int2: component = Component.interface_906.component_906_165;

    ifSetPosition(cs2_1551(varc_1097, strArg0, Graphic.p11_full, ifGetX(int2) - 15), ifGetY(intArg1), 0, 0, intArg1);
    let int3: number = ifGetWidth(int2) - 0;
    let int4: number = stringLength(strArg0);
    let str1: string = "";

    if (varc_1097 > 0) {
        str1 = subString(strArg0, 0, min(varc_1097, int4));
    }
    let int5: number = stringWidth(str1, Graphic.p11_full) - int3;
    ifSetPosition(0, 0, 0, 1, intArg0);
    ifSetSize(max(stringWidth(strArg0, Graphic.p11_full), int3), ifGetHeight(intArg0), 0, 0, intArg0);

    if (int5 > 0) {
        ifSetPosition(ifGetX(intArg0) - int5, ifGetY(intArg0), 0, 0, intArg0);
        ifSetPosition(min(ifGetX(intArg1) - int5, int3 - 1), ifGetY(intArg1), 0, 0, intArg1);
    }

    if (appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
    ifSetOnTimer(hook(cs2_1876, "iI", [clientClock(), intArg1]), intArg0);
}
