/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5624

function cs2_5624(intArg0: component, intArg1: component, intArg2: number): void {
    if (intArg2 == 1) {
        ifSetModelAnim(15702, intArg1);
    } else {
        ifSetModelAnim(15700, intArg1);
    }
    ifSetOnTimer(hook(cs2_5625, "II", [intArg0, intArg1]), intArg0);
}
