/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5404

function cs2_5404(intArg0: component, strArg0: string): void {
    ifSetText(strArg0, Component.interface_1172.component_1172_6);
    varc_dom_taunt_x_pos = 0;
    ifSetHide(false, Component.interface_1172.component_1172_2);
    ifSetHide(true, Component.interface_1172.component_1172_5);
    ifSetHide(true, Component.interface_1172.component_1172_7);
    ifSetOnTimer(hook(cs2_5405, "iII", [1, Component.interface_1172.component_1172_2, intArg0]), Component.interface_1172.component_1172_2);
}
