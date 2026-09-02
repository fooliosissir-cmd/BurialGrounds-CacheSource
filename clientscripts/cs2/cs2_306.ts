/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_306

function cs2_306(intArg0: number, intArg1: component): void {
    if (clientClock() - intArg0 < 15) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg1);
    ifSetColour(colour(0xFFFFFF), intArg1);
}
