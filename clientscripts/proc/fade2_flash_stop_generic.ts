/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fade2_flash_stop_generic]

function fade2_flash_stop_generic(intArg0: component): void {
    ifSetTrans(255, intArg0);
    ifSetOnTimer(noHook(""), intArg0);
}
