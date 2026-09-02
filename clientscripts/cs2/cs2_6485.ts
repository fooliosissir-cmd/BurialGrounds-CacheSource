/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6485

function cs2_6485(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetOnTimer(hook(cs2_6486, "I", [intArg0]), intArg0);
    ifSetOnTimer(hook(cs2_6486, "I", [intArg1]), intArg1);
    ifSetOnTimer(hook(cs2_6486, "I", [intArg2]), intArg2);
}
