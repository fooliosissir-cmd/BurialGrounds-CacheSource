/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5197

function cs2_5197(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 == 0) {
        ifSetHide(true, Component.interface_1122.component_1122_51);
        ifSetHide(true, Component.interface_1122.component_1122_239);
        ifSetHide(true, Component.interface_1122.component_1122_251);
        ifSetHide(true, Component.interface_1122.component_1122_263);
        ifSetHide(true, Component.interface_1122.component_1122_275);
        ifSetHide(false, intArg0);
    } else if (intArg1 == varbit_hcape_cs_if_tier) {
        ifSetHide(false, intArg0);
    } else {
        ifSetHide(true, intArg0);
    }
    varc_hcape_local_tier = intArg1;
    cs2_5202(1);
}
