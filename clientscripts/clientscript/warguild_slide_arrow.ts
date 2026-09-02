/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,warguild_slide_arrow]

function warguild_slide_arrow(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        if (ifGetY(intArg0) < 1 - ifGetHeight(intArg0)) {
            ifSetOnTimer(noHook(""), intArg0);
            ifSetHide(true, intArg0);
        } else {
            ifSetPosition(0, ifGetY(intArg0) - 1, 2, 0, intArg0);
            if (ifGetTrans(intArg0) < 245) {
                ifSetTrans(ifGetTrans(intArg0) + 10, intArg0);
            }
        }
    } else if (ifGetY(intArg0) > 30) {
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, intArg0);
    } else {
        ifSetPosition(0, ifGetY(intArg0) + 1, 2, 0, intArg0);
        if (ifGetTrans(intArg0) < 245) {
            ifSetTrans(ifGetTrans(intArg0) + 10, intArg0);
        }
    }
}
