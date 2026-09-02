/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_667

function cs2_667(intArg0: number, intArg1: component, intArg2: number): void {
    if (ccFind(intArg1, intArg2) == 1) {
        ccSetfill(true);
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 1, 1);
        ccSetTrans(0);
        ccSetOnTimer(hook(cs2_668, "iIi", [clientClock() + intArg0, intArg1, intArg2]));
    }
}
