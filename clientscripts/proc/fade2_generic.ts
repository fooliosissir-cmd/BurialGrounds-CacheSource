/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fade2_generic]

function fade2_generic(intArg0: component, intArg1: number, intArg2: colour): void {
    ifSetColour(intArg2, intArg0);

    if (intArg1 > 0) {
        ifSetTrans(0, intArg0);
    } else {
        ifSetTrans(255, intArg0);
    }
    ifSetOnTimer(hook(fade2_timer, "iI", [intArg1, intArg0]), intArg0);
}
