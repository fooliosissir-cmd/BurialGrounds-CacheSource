/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5403

function cs2_5403(intArg0: component, strArg0: string): void {
    ifSetText(strArg0, Component.interface_1172.component_1172_4);
    varc_dom_taunt_x_pos = 0;
    ifSetHide(true, Component.interface_1172.component_1172_2);
    ifSetHide(false, Component.interface_1172.component_1172_5);
    ifSetHide(true, Component.interface_1172.component_1172_7);
    ifSetOnTimer(hook(cs2_5405, "iII", [0, Component.interface_1172.component_1172_5, intArg0]), Component.interface_1172.component_1172_5);
}
