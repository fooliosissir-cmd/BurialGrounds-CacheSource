/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6113

function cs2_6113(intArg0: component, intArg1: number): void {
    let int2: number = ifGetTrans(intArg0);

    int2 = int2 - intArg1;

    if (int2 < 0) {
        int2 = 0;
        ifSetOnTimer(noHook(""), intArg0);
    }
    ifSetTrans(int2, intArg0);
}
