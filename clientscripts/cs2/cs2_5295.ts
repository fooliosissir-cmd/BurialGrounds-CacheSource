/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5295

function cs2_5295(intArg0: component, intArg1: component): void {
    ifSetHide(true, intArg1);
    ifSetOnTargetLeave(noHook(""), intArg0);
}
