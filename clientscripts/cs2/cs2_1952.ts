/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1952

function cs2_1952(): void {
    let int0: component = -1;
    let int1: component = -1;

    if (getWindowMode() < 2) {
        int0 = Component.interface_548.component_548_41;
        int1 = Component.interface_548.component_548_197;
    } else {
        int0 = Component.interface_746.component_746_17;
        int1 = Component.interface_746.component_746_187;
    }
    ifSetText("", int1);
    ifSetHide(true, int0);
    varc_tooltip_built = 0;
}
