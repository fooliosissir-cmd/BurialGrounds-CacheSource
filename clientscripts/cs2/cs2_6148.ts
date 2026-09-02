/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6148

function cs2_6148(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    if (varc_fremsaga_bilrach_interrogate_cutscene >= 3) {
        ifSetOnCamFinished(noHook(""), intArg0);
        return;
    }

    if (intArg5 < splineLength(0) - 2) {
        intArg5 = intArg5 + 1;
        camMovealong(0, intArg5, intArg4, intArg4, 1, 0);
        ifSetOnCamFinished(hook(cs2_6148, "Iiiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg0);
    } else {
        cs2_6147(intArg0, intArg1, intArg2, intArg4, intArg3);
    }
}
