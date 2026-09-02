/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1738

function cs2_1738(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetTrans(0);
        ccSetOnTimer(noHook(""));
    }
}
