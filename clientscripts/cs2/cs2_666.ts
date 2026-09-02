/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_666

function cs2_666(intArg0: number, intArg1: component, intArg2: number): void {
    let int3: number = 0;

    if (ccFind(intArg1, intArg2) == 1) {
        int3 = intArg0 - clientClock();
        if (int3 <= 0) {
            ccSetTrans(0);
            ccSetOnTimer(noHook(""));
            return;
        }
        ccSetTrans(max(ccGetTrans() - ccGetTrans() / int3, 1));
    }
}
