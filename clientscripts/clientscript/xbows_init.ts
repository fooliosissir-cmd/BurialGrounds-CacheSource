/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xbows_init]

function xbows_init(intArg0: component, intArg1: obj, intArg2: number): void {
    ifSetOnInvTransmit(hook(clientscript_xbows_rune_update, "IoiY", [intArg0, intArg1, intArg2], [93]), intArg0);
    proc_xbows_rune_update(intArg0, intArg1, intArg2);
}
