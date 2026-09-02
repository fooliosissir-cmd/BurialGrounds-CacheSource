/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3467

function cs2_3467(intArg0: component, intArg1: number, intArg2: number): void {
    if (clientClock() - intArg1 < intArg2) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg0);
    proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
}
