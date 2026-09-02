/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tutorial3_fadein]

function proc_tutorial3_fadein(intArg0: number, intArg1: component): void {
    if (ccFind(intArg1, 0) == 1) {
        ccSetfill(true);
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 1, 1);
        ccSetTrans(0);
        ccSetOnTimer(hook(clientscript_tutorial3_fadein, "iI", [clientClock() + intArg0, intArg1]));
    }
}
