/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tutorial3_cameracontrols_init]

function tutorial3_cameracontrols_init(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetOnTimer(hook(tutorial3_cameracontrols_pulsate, "iII", [clientClock(), intArg1, intArg2]), intArg0);
}
