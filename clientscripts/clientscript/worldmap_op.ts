/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_op]

function worldmap_op(intArg0: number, intArg1: component, intArg2: coord): void {
    if (intArg0 == 1) {
        ifSetOnTimer(hook(cs2_2054, "iIc", [clientClock() + 3, intArg1, intArg2]), intArg1);
    }
}
