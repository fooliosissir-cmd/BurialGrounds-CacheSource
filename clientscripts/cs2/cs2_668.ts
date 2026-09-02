/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_668

function cs2_668(intArg0: number, intArg1: component, intArg2: number): void {
    let int3: number = 0;
    let int4: number = 0;

    if (ccFind(intArg1, intArg2) == 1) {
        int3 = intArg0 - clientClock();
        if (int3 <= 0) {
            ccSetOnTimer(noHook(""));
            ccDelete();
            return;
        }
        int4 = 255 - ccGetTrans();
        ccSetTrans(min(ccGetTrans() + int4 / int3, 254));
    }
}
