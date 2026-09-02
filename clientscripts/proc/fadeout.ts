/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fadeout]

function proc_fadeout(intArg0: colour, intArg1: number, intArg2: component): void {
    ccCreate(intArg2, 3, 0);
    ccSetTrans(255);
    ccSetfill(true);
    ccSetColour(intArg0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    intArg1 = min(intArg1, 250);
    ccSetOnTimer(hook(clientscript_fadeout, "iI", [clientClock() + intArg1, intArg2]));
}
