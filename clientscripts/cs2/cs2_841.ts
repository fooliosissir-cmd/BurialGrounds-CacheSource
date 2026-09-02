/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_841

function cs2_841(intArg0: number): void {
    let int1: number = 0;

    varbit_catcon_selected_side = intArg0;
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_1355, varbit_catcon_selected));
    ifSetHide(true, enumOp(type_int, type_component, Enum.enum_1358, varbit_catcon_selected));

    if (intArg0 == 0) {
        ifSetHide(false, Component.interface_681.component_681_9);
        ifSetHide(true, Component.interface_681.component_681_12);
    } else {
        ifSetHide(false, Component.interface_681.component_681_12);
        ifSetHide(true, Component.interface_681.component_681_9);
    }

    while (int1 < 10) {
        if (cs2_855(int1) == intArg0) {
            if (cs2_851(int1) != 7 || cs2_852(int1) != 2) {
                ifSetHide(false, enumOp(type_int, type_component, Enum.enum_1354, int1));
            }
        } else {
            ifSetHide(true, enumOp(type_int, type_component, Enum.enum_1354, int1));
        }
        int1 = int1 + 1;
    }
}
