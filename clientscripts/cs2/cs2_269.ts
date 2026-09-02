/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_269

function cs2_269(intArg0: number, intArg1: component): void {
    if (intArg0 <= splineLength(0) - 2) {
        camMovealong(0, intArg0, 1500, 1500, 1, intArg0);
    } else {
        ifSetOnCamFinished(noHook(""), intArg1);
        camSmoothreset();
        cs2_675();
        return;
    }
    ifSetOnCamFinished(hook(cs2_269, "iI", [min(splineLength(0) - 1, 1 + intArg0), intArg1]), intArg1);
}
