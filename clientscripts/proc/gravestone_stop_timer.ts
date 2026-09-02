/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gravestone_stop_timer]

function gravestone_stop_timer(): void {
    varc_815 = 0;
    cs2_1952();

    if (getWindowMode() < 2) {
        ifSetOnTimer(noHook(""), Component.interface_548.component_548_37);
        ifSetHide(true, Component.interface_548.component_548_39);
        ifSetHide(true, Component.interface_548.component_548_38);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_746.component_746_15);
        ifSetHide(true, Component.interface_746.component_746_189);
        ifSetHide(true, Component.interface_746.component_746_188);
    }
}
