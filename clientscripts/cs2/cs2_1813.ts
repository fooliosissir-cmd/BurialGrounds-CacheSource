/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1813

function cs2_1813(intArg0: number, intArg1: component): void {
    if (clientClock() >= intArg0) {
        ifSetText("", intArg1);
        ifSetOnTimer(noHook(""), intArg1);
    }
}
