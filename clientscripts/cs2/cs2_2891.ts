/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2891

function cs2_2891(intArg0: number, intArg1: component): void {
    if (clientClock() >= intArg0) {
        proc_component_flash_stop(Component.sfa.alert);
        ifSetHide(true, Component.sfa.alert);
        ifSetOnTimer(noHook(""), intArg1);
    }
}
