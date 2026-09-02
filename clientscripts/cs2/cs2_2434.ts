/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2434

function cs2_2434(intArg0: number): void {
    varc_815 = intArg0 * 300 / 10;

    if (varc_815 > 0) {
        if (getWindowMode() < 2) {
            ifSetOnTimer(hook(gravestone_update_timer, "", []), Component.interface_548.component_548_37);
            ifSetHide(false, Component.interface_548.component_548_38);
            ifSetHide(false, Component.interface_548.component_548_39);
        } else {
            ifSetOnTimer(hook(gravestone_update_timer, "", []), Component.interface_746.component_746_15);
            ifSetHide(false, Component.interface_746.component_746_189);
            ifSetHide(false, Component.interface_746.component_746_188);
        }
    } else {
        gravestone_stop_timer();
    }
}
