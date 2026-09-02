/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2054

function cs2_2054(intArg0: number, intArg1: component, intArg2: coord): void {
    if (clientClock() >= intArg0) {
        worldMapJumptosourcecoord(intArg2);
        ifSetOnTimer(noHook(""), intArg1);
    }
}
