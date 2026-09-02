/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2319

function cs2_2319(): void {
    if (varbit_bank_show_equipscreen == 1) {
        ifSetHide(true, Component.interface_762.component_762_0);
        ifSetHide(true, Component.interface_763.component_763_0);
        ifSetHide(false, Component.interface_667.component_667_1);
        ifSetHide(false, Component.interface_763.component_763_1);
    } else {
        ifSetHide(false, Component.interface_762.component_762_0);
        ifSetHide(false, Component.interface_763.component_763_0);
        ifSetHide(true, Component.interface_667.component_667_1);
        ifSetHide(true, Component.interface_763.component_763_1);
    }
    cs2_722();
}
