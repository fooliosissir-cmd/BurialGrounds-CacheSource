/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3976

function cs2_3976(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg2 != 1) {
        return;
    }
    deltooltip_action(Component.interface_1056.component_1056_158);
    varc_1416 = intArg1;
    ifSetHide(true, Component.interface_1056.component_1056_89);
    ifSetHide(true, Component.interface_1056.component_1056_90);
    ifSetHide(false, Component.interface_1056.component_1056_120);
    ifSetHide(false, Component.interface_1056.component_1056_117);

    if (cs2_3999(intArg0) == 1) {
        if (varbit_8588 == 4094) {
            cs2_3977(varbit_8587);
        } else {
            return;
        }
    } else {
        cs2_3977(intArg0);
    }
}
