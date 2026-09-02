/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6199

function cs2_6199(intArg0: component, intArg1: component, strArg0: string): void {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = stringLength(strArg0);
    let str1: string = "";
    let int5: component = -1;

    if (varc_1920 == 1) {
        int5 = Component.interface_906.component_906_360;
        ifSetPosition(cs2_1551(varc_1921, strArg0, Graphic.verdana_11pt_regular, ifGetX(int5) + 4), ifGetY(intArg1), 0, 0, intArg1);
        if (varc_1921 > 0) {
            str1 = subString(strArg0, 0, min(varc_1921, int4));
        }
    } else if (varc_1920 == 2) {
        int5 = Component.interface_906.component_906_367;
        ifSetPosition(cs2_1551(varc_1922, strArg0, Graphic.verdana_11pt_regular, ifGetX(int5) + 4), ifGetY(intArg1), 0, 0, intArg1);
        if (varc_1922 > 0) {
            str1 = subString(strArg0, 0, min(varc_1922, int4));
        }
    }
    let int6: number = ifGetWidth(int5) - 6;
    let int7: number = stringWidth(str1, Graphic.verdana_11pt_regular) - int6;
    ifSetPosition(4, 0, 0, 1, intArg0);
    ifSetSize(max(stringWidth(strArg0, Graphic.verdana_11pt_regular), int6), ifGetHeight(intArg0), 0, 0, intArg0);

    if (int7 > 0) {
        ifSetPosition(ifGetX(intArg0) - int7, ifGetY(intArg0), 0, 0, intArg0);
        ifSetPosition(min(ifGetX(intArg1) - int7, int6 - 1), ifGetY(intArg1), 0, 0, intArg1);
    }

    if (appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
    ifSetOnTimer(hook(cs2_6201, "iI", [clientClock(), intArg1]), intArg0);
}
