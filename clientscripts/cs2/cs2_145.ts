/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_145

function cs2_145(intArg0: component, intArg1: number): void {
    if (clientClock() >= intArg1) {
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, intArg0);
    }
}
