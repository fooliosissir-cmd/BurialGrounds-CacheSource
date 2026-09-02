/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5518

function cs2_5518(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetTrans(min(255, ccGetTrans() + 15));
        if (ccGetTrans() == 255) {
            ccSetOnTimer(noHook(""));
        }
    }
}
