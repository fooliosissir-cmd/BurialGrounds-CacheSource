/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_free_setup]

function dom_free_setup(): void {
    if (varbit_dom_allow_spectators == 0) {
        ifSetHide(true, Component.interface_1168.component_1168_289);
        ifSetHide(false, Component.interface_1168.component_1168_290);
    } else {
        ifSetHide(false, Component.interface_1168.component_1168_289);
        ifSetHide(true, Component.interface_1168.component_1168_290);
    }

    if (varbit_dom_skip_taunt == 0) {
        ifSetHide(true, Component.interface_1168.component_1168_357);
        ifSetHide(false, Component.interface_1168.component_1168_358);
    } else {
        ifSetHide(false, Component.interface_1168.component_1168_357);
        ifSetHide(true, Component.interface_1168.component_1168_358);
    }

    if (varbit_dom_skip_victory == 0) {
        ifSetHide(true, Component.interface_1168.component_1168_360);
        ifSetHide(false, Component.interface_1168.component_1168_361);
    } else {
        ifSetHide(false, Component.interface_1168.component_1168_360);
        ifSetHide(true, Component.interface_1168.component_1168_361);
    }
    ifSetHide(true, Component.interface_1168.component_1168_13);
    ifSetHide(true, Component.interface_1168.component_1168_12);
    proc_dom_free_boss_tab_select();
    proc_dom_free_class_select(1);
    varc_tooltip_built = 0;
}
