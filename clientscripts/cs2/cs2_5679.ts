/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5679

function cs2_5679(intArg0: component, intArg1: component): void {
    if (ifGetHide(intArg1) == 1) {
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, intArg0);
    }
}
