/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,assist_comp_sethide]

function assist_comp_sethide(intArg0: boolean, intArg1: component, intArg2: component): void {
    ifSetHide(intArg0, intArg1);

    if (intArg0 == true) {
        ifSetfill(false, intArg2);
    }
    deltooltip_action(Component.interface_301.component_301_85);
    varc_tooltip_time = 0;
}
