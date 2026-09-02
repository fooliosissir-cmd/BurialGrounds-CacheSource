/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5302

function cs2_5302(intArg0: component, intArg1: component): void {
    if (ifGetHide(intArg0) == 1) {
        cs2_5306();
        ifSetHide(false, intArg0);
        ifSetGraphic(Graphic.aif_symbol_set_1_5, intArg1);
    } else {
        ifSetHide(true, intArg0);
        ifSetGraphic(Graphic.aif_symbol_set_1_4, intArg1);
        proc_deltooltip(Component.interface_824.component_824_33);
    }
}
