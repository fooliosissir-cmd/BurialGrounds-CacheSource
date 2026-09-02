/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6333

function cs2_6333(intArg0: component): void {
    let int1: number = max(ifGetTrans(intArg0) - 40, 50);

    ifSetTrans(int1, intArg0);

    if (int1 <= 50) {
        ifSetOnTimer(noHook(""), intArg0);
    }
}
