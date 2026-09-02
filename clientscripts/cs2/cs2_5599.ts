/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5599

function cs2_5599(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    if (splineLength(0) > intArg1 + 1) {
        camMovealong(0, intArg1, intArg2, intArg3, 1, intArg1);
    }

    if (splineLength(0) == intArg1 + 1) {
        ifSetOnCamFinished(noHook(""), intArg0);
    } else {
        intArg1 = intArg1 + 1;
        ifSetOnCamFinished(hook(cs2_5599, "Iiii", [event_com, intArg1, 2000, 2000]), intArg0);
    }
}
