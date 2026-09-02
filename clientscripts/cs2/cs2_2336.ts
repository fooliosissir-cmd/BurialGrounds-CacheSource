/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2336

function cs2_2336(intArg0: component, intArg1: number): void {
    if (getWindowMode() != intArg1) {
        ifSetOnTimer(hook(cs2_2336, "Ii", [intArg0, getWindowMode()]), intArg0);
        cs2_2337(intArg0);
    }
}
