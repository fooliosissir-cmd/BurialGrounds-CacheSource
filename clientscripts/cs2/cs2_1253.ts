/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1253

function cs2_1253(intArg0: component): void {
    let int1: number = ifGetTrans(intArg0);

    int1 = max(int1 - 255 / 30, 0);
    ifSetTrans(int1, intArg0);

    if (int1 <= 0) {
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }
}
