/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6120

function cs2_6120(intArg0: component, intArg1: boolean, intArg2: number, intArg3: number): void {
    intArg3 = intArg3 + 1;

    if (intArg3 > intArg2) {
        ifSetHide(intArg1, intArg0);
        ifSetOnTimer(noHook(""), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_6120, "I1ii", [event_com, intArg1, intArg2, intArg3]), intArg0);
    }
}
