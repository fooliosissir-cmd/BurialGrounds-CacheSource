/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5613

function cs2_5613(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    [intArg2, intArg3, intArg4] = cs2_5614(intArg0, intArg1, intArg2, intArg3, intArg4);
    ifSetOnTimer(hook(cs2_5613, "Iiiii", [intArg0, intArg1, intArg2, intArg3, intArg4]), intArg0);
}
