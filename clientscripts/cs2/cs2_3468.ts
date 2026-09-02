/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3468

function cs2_3468(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number): void {
    if (intArg1 < splineLength(0) - 1) {
        camMovealong(0, intArg1, intArg2, intArg3, 1, intArg1);
        ifSetOnCamFinished(hook(cs2_3468, "Iiiiiiiiiiii", [intArg0, intArg1 + 1, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, 0, 0]), intArg0);
    } else {
        ifSetOnCamFinished(noHook(""), intArg0);
    }
}
