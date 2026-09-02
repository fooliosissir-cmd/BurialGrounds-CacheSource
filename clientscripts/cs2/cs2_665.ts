/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_665

function cs2_665(intArg0: colour, intArg1: number, intArg2: component, intArg3: number): void {
    ccCreate(intArg2, 3, intArg3);
    ccSetTrans(255);
    ccSetfill(true);
    ccSetColour(intArg0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    intArg1 = min(intArg1, 250);
    ccSetOnTimer(hook(cs2_666, "iIi", [clientClock() + intArg1, intArg2, intArg3]));
}
