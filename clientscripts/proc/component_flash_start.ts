/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,component_flash_start]

function proc_component_flash_start(intArg0: component): void {
    ifSetHide(false, intArg0);
    ifSetOnTimer(hook(component_flash_timer, "I", [intArg0]), intArg0);
}
