/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2892

function cs2_2892(intArg0: component, intArg1: number): void {
    if (clientClock() - intArg1 >= 180) {
        varc_sfa_initial_disappear = 1;
    }

    if (clientClock() - intArg1 >= 1000) {
        ifSetOnTimer(noHook(""), Component.sfa.initial);
        ifSetHide(true, Component.sfa.initial);
    }
}
