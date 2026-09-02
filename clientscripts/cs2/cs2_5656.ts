/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5656

function cs2_5656(intArg0: boolean, intArg1: component, intArg2: number): void {
    if (intArg0 == true) {
        ifSetTrans(0, intArg1);
    }

    if (intArg2 < 500) {
        intArg2 = intArg2 + 1;
        ifSetOnTimer(hook(cs2_5656, "1Ii", [false, intArg1, intArg2]), intArg1);
        return;
    }

    if (ifGetTrans(intArg1) < 255) {
        ifSetTrans(min(ifGetTrans(intArg1) + 5, 255), intArg1);
    }

    if (ifGetTrans(intArg1) >= 255) {
        ifSetHide(true, intArg1);
        ifSetTrans(0, intArg1);
        ifSetOnTimer(noHook(""), intArg1);
    } else {
        ifSetOnTimer(hook(cs2_5656, "1Ii", [false, intArg1, intArg2]), intArg1);
    }
}
