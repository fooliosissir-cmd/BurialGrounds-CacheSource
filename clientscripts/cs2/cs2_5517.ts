/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5517

function cs2_5517(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetTrans(max(0, ccGetTrans() - 15));
        if (ccGetTrans() == 0) {
            ccSetOnTimer(noHook(""));
        }
    }
}
