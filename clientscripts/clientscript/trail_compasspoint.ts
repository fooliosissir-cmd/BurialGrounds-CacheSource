/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,trail_compasspoint]

function trail_compasspoint(intArg0: component, intArg1: component): void {
    ifSetOnTimer(hook(trail_compass_timer, "iII", [0, intArg0, intArg1]), intArg0);
}
