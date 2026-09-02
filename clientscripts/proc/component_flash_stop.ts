/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,component_flash_stop]

function proc_component_flash_stop(intArg0: component): void {
    ifSetOnTimer(noHook(""), intArg0);
    ifSetTrans(0, intArg0);
}
