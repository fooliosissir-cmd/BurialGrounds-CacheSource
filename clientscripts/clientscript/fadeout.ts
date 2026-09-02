/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fadeout]

function clientscript_fadeout(intArg0: number, intArg1: component): void {
    let int2: number = 0;

    if (ccFind(intArg1, 0) == 1) {
        int2 = intArg0 - clientClock();
        if (int2 <= 0) {
            ccSetTrans(0);
            ccSetOnTimer(noHook(""));
            return;
        }
        ccSetTrans(max(ccGetTrans() - ccGetTrans() / int2, 1));
    }
}
