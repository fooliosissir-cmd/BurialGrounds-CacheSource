/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dom_free_boss_tab_select]

function proc_dom_free_boss_tab_select(): void {
    ifSetHide(false, Component.interface_1168.component_1168_10);
    ifSetHide(true, Component.interface_1168.component_1168_11);
    ifSetHide(true, Component.interface_1168.component_1168_12);

    if (ifGetScrollHeight(Component.interface_1168.component_1168_10) > ifGetHeight(Component.interface_1168.component_1168_10)) {
        ifSetHide(false, Component.interface_1168.component_1168_13);
    }
    ifSetColour(colour(0xFFFFFF), Component.interface_1168.component_1168_79);
    ifSetColour(colour(0xF5B241), Component.interface_1168.component_1168_78);
    varc_dom_free_current_tab_info_handicaps = 0;
}
