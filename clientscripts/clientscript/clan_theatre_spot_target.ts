/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_theatre_spot_target]

function clan_theatre_spot_target(intArg0: component, intArg1: component): void {
    ifSetHide(false, intArg1);
    ifSetOnOp(hook(cs2_5295, "II", [intArg0, intArg1]), intArg0);
}
