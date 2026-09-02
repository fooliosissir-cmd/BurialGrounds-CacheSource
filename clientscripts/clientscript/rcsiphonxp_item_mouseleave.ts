/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcsiphonxp_item_mouseleave]

function rcsiphonxp_item_mouseleave(intArg0: component, intArg1: number): void {
    if (intArg1 != varc_rcsiphonxp_selected_item && ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(Graphic.aif_runecrafting_bkgrd_button2_0);
    }
    proc_deltooltip(Component.interface_1273.component_1273_18);
}
