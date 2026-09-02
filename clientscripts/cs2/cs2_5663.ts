/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5663

function cs2_5663(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 < 150) {
        intArg2 = intArg2 + 1;
        ifSetOnTimer(hook(cs2_5663, "Iii", [intArg0, intArg1, intArg2]), intArg0);
        return;
    }
    ifSetPosition(0, intArg1, 1, 0, intArg0);
    intArg1 = intArg1 - 1;

    if (intArg1 <= 0) {
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_5663, "Iii", [intArg0, intArg1, intArg2]), intArg0);
    }
}
