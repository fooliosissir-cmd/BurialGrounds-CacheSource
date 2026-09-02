/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3628

function cs2_3628(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: obj, intArg6: number, intArg7: number, intArg8: number): void {
    intArg7 = intArg7 + 1;

    if (intArg7 == 1) {
        ifSetPosition(intArg1 + intArg3, intArg2 + intArg4, 0, 0, intArg0);
        ifSetObject(intArg5, -1, intArg0);
    } else {
        ifSetPosition(intArg1 + intArg3 * (intArg8 - intArg7) / intArg8, intArg2 + intArg4 * (intArg8 - intArg7) / intArg8, 0, 0, intArg0);
    }

    if (intArg7 == intArg8) {
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_3628, "Iiiiioiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8]), intArg0);
    }
}
