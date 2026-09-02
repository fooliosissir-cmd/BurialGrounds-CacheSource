/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6328

function cs2_6328(intArg0: component, intArg1: number): void {
    if (clientClock() < intArg1) {
        return;
    }
    let int2: number = min(ifGetTrans(intArg0) + 20, 255);
    ifSetTrans(int2, intArg0);

    if (int2 >= 255) {
        ifSetOnTimer(noHook(""), intArg0);
    }
}
