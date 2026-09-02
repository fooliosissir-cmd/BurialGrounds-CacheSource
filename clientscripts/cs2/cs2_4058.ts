/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4058

function cs2_4058(intArg0: component, intArg1: component, intArg2: component): void {
    let int3: number = 5;

    if (ifGetY(intArg0) > 1 - ifGetHeight(intArg0)) {
        ifSetPosition(0, ifGetY(intArg0) - int3, 1, 0, intArg0);
    } else {
        ifSetOnTimer(noHook(""), intArg2);
        ifSetHide(true, intArg0);
        ifSetHide(false, intArg1);
        ifSetPosition(0, 1 - ifGetHeight(intArg1), 1, 0, intArg1);
        ifSetOnTimer(hook(cs2_4059, "II", [intArg1, intArg2]), intArg2);
    }
}
