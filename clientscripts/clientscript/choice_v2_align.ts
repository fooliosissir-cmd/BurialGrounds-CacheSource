/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,choice_v2_align]

function choice_v2_align(intArg0: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string): void {
    ifSetHide(false, Component.interface_1188.component_1188_11);
    ifSetHide(false, Component.interface_1188.component_1188_13);
    ifSetHide(false, Component.interface_1188.component_1188_14);
    ifSetHide(false, Component.interface_1188.component_1188_15);
    ifSetHide(false, Component.interface_1188.component_1188_16);

    if (intArg0 == 2) {
        ifSetText(strArg0, Component.interface_1188.component_1188_3);
        ifSetText(strArg1, Component.interface_1188.component_1188_24);
        ifSetHide(true, Component.interface_1188.component_1188_14);
        ifSetHide(true, Component.interface_1188.component_1188_15);
        ifSetHide(true, Component.interface_1188.component_1188_16);
        ifSetPosition(0, 55, 1, 0, Component.interface_1188.component_1188_11);
        ifSetPosition(0, 80, 1, 0, Component.interface_1188.component_1188_13);
    } else if (intArg0 == 3) {
        ifSetText(strArg0, Component.interface_1188.component_1188_3);
        ifSetText(strArg1, Component.interface_1188.component_1188_24);
        ifSetText(strArg2, Component.interface_1188.component_1188_29);
        ifSetHide(true, Component.interface_1188.component_1188_15);
        ifSetHide(true, Component.interface_1188.component_1188_16);
        ifSetPosition(0, 45, 1, 0, Component.interface_1188.component_1188_11);
        ifSetPosition(0, 70, 1, 0, Component.interface_1188.component_1188_13);
        ifSetPosition(0, 95, 1, 0, Component.interface_1188.component_1188_14);
    } else if (intArg0 == 4) {
        ifSetText(strArg0, Component.interface_1188.component_1188_3);
        ifSetText(strArg1, Component.interface_1188.component_1188_24);
        ifSetText(strArg2, Component.interface_1188.component_1188_29);
        ifSetText(strArg3, Component.interface_1188.component_1188_34);
        ifSetHide(true, Component.interface_1188.component_1188_16);
        ifSetPosition(0, 40, 1, 0, Component.interface_1188.component_1188_11);
        ifSetPosition(0, 60, 1, 0, Component.interface_1188.component_1188_13);
        ifSetPosition(0, 80, 1, 0, Component.interface_1188.component_1188_14);
        ifSetPosition(0, 100, 1, 0, Component.interface_1188.component_1188_15);
    } else {
        ifSetText(strArg0, Component.interface_1188.component_1188_3);
        ifSetText(strArg1, Component.interface_1188.component_1188_24);
        ifSetText(strArg2, Component.interface_1188.component_1188_29);
        ifSetText(strArg3, Component.interface_1188.component_1188_34);
        ifSetText(strArg4, Component.interface_1188.component_1188_39);
        ifSetPosition(0, 33, 1, 0, Component.interface_1188.component_1188_11);
        ifSetPosition(0, 52, 1, 0, Component.interface_1188.component_1188_13);
        ifSetPosition(0, 71, 1, 0, Component.interface_1188.component_1188_14);
        ifSetPosition(0, 90, 1, 0, Component.interface_1188.component_1188_15);
        ifSetPosition(0, 109, 1, 0, Component.interface_1188.component_1188_16);
    }
}
