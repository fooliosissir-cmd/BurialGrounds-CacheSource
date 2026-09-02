/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xbows_bolts]

function xbows_bolts(intArg0: component, intArg1: obj): void {
    ifSetOnInvTransmit(hook(clientscript_xbows_bolts_update, "IoY", [intArg0, intArg1], [93]), intArg0);
    proc_xbows_bolts_update(intArg0, intArg1);
}
