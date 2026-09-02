/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1229

function cs2_1229(intArg0: number, intArg1: component, intArg2: component, intArg3: component): void {
    if (intArg0 != 1) {
        return;
    }
    ifSetOnOpt(noHook(""), intArg2);
    ifSetOnTimer(noHook(""), intArg1);
    ifClearops(intArg2);
    ifSetHide(true, intArg2);
    ifSetHide(true, intArg3);
    ifSetHide(true, intArg1);
}
