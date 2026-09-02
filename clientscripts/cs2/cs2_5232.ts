/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5232

function cs2_5232(intArg0: component, intArg1: number): void {
    if (splineLength(0) == 5 && varc_tutorial3_cutscene_tracker == 2) {
        if (intArg1 == 1) {
            camMovealong(0, 1, 800, 700, 1, 1);
            ifSetOnCamFinished(hook(cs2_5232, "Ii", [intArg0, 2]), intArg0);
            return;
        }
        if (intArg1 == 2) {
            camMovealong(0, 2, 700, 40, 1, 2);
        }
    }
    ifSetOnCamFinished(noHook(""), intArg0);
}
