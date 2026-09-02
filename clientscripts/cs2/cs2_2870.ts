/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2870

function cs2_2870(intArg0: component, intArg1: number): void {
    if (clientClock() >= intArg1) {
        ifSetHide(true, intArg0);
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }
}
