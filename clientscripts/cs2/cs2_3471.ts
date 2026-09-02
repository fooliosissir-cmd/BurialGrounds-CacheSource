/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3471

function cs2_3471(intArg0: component, intArg1: number): void {
    if (intArg1 < splineLength(0) - 1) {
        camMovealong(0, intArg1, 700, 700, 1, intArg1);
        ifSetOnCamFinished(hook(cs2_3471, "Ii", [intArg0, intArg1 + 1]), intArg0);
    } else {
        ifSetOnCamFinished(noHook(""), intArg0);
        camSmoothreset();
    }
}
