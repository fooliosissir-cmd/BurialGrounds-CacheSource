/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_270

function cs2_270(intArg0: number, intArg1: component): void {
    if (intArg0 <= splineLength(0) - 2) {
        if (intArg0 != splineLength(0) - 2) {
            camMovealong(0, intArg0, 1000, 1000, 1, intArg0);
        } else {
            camMovealong(0, intArg0, 250, 50, 1, intArg0);
        }
    } else {
        ifSetOnCamFinished(noHook(""), intArg1);
        return;
    }
    ifSetOnCamFinished(hook(cs2_270, "iI", [min(splineLength(0) - 1, 1 + intArg0), intArg1]), intArg1);
}
