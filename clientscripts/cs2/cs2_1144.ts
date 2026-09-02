/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1144

function cs2_1144(intArg0: component): void {
    if (splineLength(0) == 7) {
        camMovealong(0, 5, 600, 400, 1, 5);
    }
    ifSetOnCamFinished(noHook(""), intArg0);
}
