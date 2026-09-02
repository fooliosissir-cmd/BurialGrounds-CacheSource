/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_743

function cs2_743(intArg0: component, intArg1: number, intArg2: boolean): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 == true) {
            ifSetPosition(ccGetX(), ccGetY(), 0, 0, Component.interface_18.component_18_46);
            ifSetSize(ccGetWidth(), ccGetHeight(), 0, 0, Component.interface_18.component_18_46);
            ifSetHide(false, Component.interface_18.component_18_46);
        } else {
            ifSetHide(true, Component.interface_18.component_18_46);
        }
    }
}
