/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1735

function cs2_1735(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetHide(false);
        ccSetOnTimer(hook(cs2_1736, "Ii", [intArg0, intArg1]));
    }
}
