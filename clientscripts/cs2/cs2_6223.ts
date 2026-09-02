/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6223

function cs2_6223(intArg0: number, intArg1: number, intArg2: component, intArg3: number, intArg4: number): void {
    if (intArg0 <= intArg1) {
        camMovealong(0, intArg0, intArg3, intArg4, 1, intArg0);
        ifSetOnCamFinished(hook(cs2_6223, "iiIii", [intArg0 + 1, intArg1, intArg2, intArg3, intArg4]), intArg2);
    } else {
        ifSetOnCamFinished(noHook(""), intArg2);
    }
}
