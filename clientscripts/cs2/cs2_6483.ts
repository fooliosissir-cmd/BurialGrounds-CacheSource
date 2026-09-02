/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6483

function cs2_6483(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetOnTimer(hook(cs2_6484, "I", [intArg0]), intArg0);
    ifSetOnTimer(hook(cs2_6484, "I", [intArg1]), intArg1);
    ifSetOnTimer(hook(cs2_6484, "I", [intArg2]), intArg2);
}
