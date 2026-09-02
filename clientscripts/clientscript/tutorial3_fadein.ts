/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_fadein]

function clientscript_tutorial3_fadein(intArg0: number, intArg1: component): void {
    let int2: number = 0;
    let int3: number = 0;

    if (ccFind(intArg1, 0) == 1) {
        int2 = intArg0 - clientClock();
        if (int2 <= 0) {
            ccSetOnTimer(noHook(""));
            ccDelete();
            return;
        }
        int3 = 255 - ccGetTrans();
        ccSetTrans(min(ccGetTrans() + int3 / int2, 254));
    }
}
