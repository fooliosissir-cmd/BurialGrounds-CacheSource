/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_969

function cs2_969(intArg0: component): void {
    let int1: number = clientClock() % 32;

    if (cs2_970(intArg0) == 0) {
        if (ifGetTrans(intArg0) != 0) {
            ifSetTrans(0, intArg0);
        } else {
            ifSetOnTimer(noHook(""), intArg0);
        }
    } else if (int1 < 8) {
        ifSetTrans(0, intArg0);
    } else if (int1 < 16) {
        ifSetTrans(85, intArg0);
    } else if (int1 < 24) {
        ifSetTrans(255, intArg0);
    } else {
        ifSetTrans(85, intArg0);
    }
}
