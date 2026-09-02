/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_726

function cs2_726(intArg0: component, intArg1: component): void {
    if (ifHasSub(intArg1) == 0 || varc_199 == -1) {
        ccDeleteAll(intArg0);
        varc_199 = -1;
        ifSetOnTimer(noHook(""), intArg0);
        ifSetOnResize(noHook(""), intArg0);
        return;
    }
    ifSetOnTimer(hook(cs2_727, "II", [intArg0, intArg1]), intArg0);
    ifSetOnResize(hook(cs2_726, "II", [intArg0, intArg1]), intArg0);
    ccCreate(intArg0, 3, 0);
    ccSetPosition(0, 0, 3, 3);
    ccSetSize(16384, 16384, 2, 2);
    ccSetColour(varc_199);
    ccSetTrans(varc_213);
    ccSetfill(true);
}
