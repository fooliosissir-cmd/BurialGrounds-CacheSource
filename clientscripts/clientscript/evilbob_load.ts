/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,evilbob_load]

function evilbob_load(intArg0: component, intArg1: component): void {
    ifSetHide(false, intArg0);
    ifSetHide(true, intArg1);
    varc_ame_evilbob_start = false;
    ifSetOnVarcTransmit(hook(evilbob_start, "IIY", [intArg0, intArg1], [679]), intArg0);
}
