/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1252

function cs2_1252(intArg0: component, intArg1: number): void {
    let int2: number = ifGetTrans(intArg0);

    int2 = min(int2 + 255 * intArg1 / 30, 255);
    ifSetTrans(int2, intArg0);

    if (int2 >= 255) {
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, intArg0);
        return;
    }
}
