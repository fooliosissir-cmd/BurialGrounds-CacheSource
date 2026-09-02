/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5046

function cs2_5046(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg2 < 1) {
        cs2_5047(intArg1, 0, 40, intArg3, intArg4);
        ifSetOnTimer(hook(cs2_5046, "Iiiii", [intArg0, varc_hw10_cutscene, 1, intArg3, intArg4]), intArg0);
    } else if (intArg2 < 2) {
        cs2_5047(intArg1, 40, 80, intArg3, intArg4);
        ifSetOnTimer(hook(cs2_5046, "Iiiii", [intArg0, varc_hw10_cutscene, 2, intArg3, intArg4]), intArg0);
    } else {
        cs2_5047(intArg1, 80, 112, intArg3, intArg4);
        ifSetOnTimer(noHook(""), intArg0);
    }
}
