/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2775

function cs2_2775(intArg0: number, intArg1: component): void {
    if (clientClock() < intArg0) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg1);
    ifSetColour(colour(0xFF3030), intArg1);
}
