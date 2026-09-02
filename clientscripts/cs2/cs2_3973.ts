/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3973

function cs2_3973(intArg0: number): void {
    ifSetHide(true, Component.interface_1056.component_1056_89);
    ifSetHide(true, Component.interface_1056.component_1056_90);
    ifSetHide(false, Component.interface_1056.component_1056_120);
    cs2_3975();

    if (intArg0 == 1) {
        cs2_3977(varc_1425);
    } else if (cs2_3999(varbit_8576) == 1) {
        if (cs2_3999(varbit_8588) == 1 && cs2_3999(varbit_8587) == 0) {
            cs2_3977(varbit_8587);
        }
    } else if (getWindowMode() == 1) {
        cs2_3977(varbit_8576);
    }

    if (compare(ifGetText(Component.interface_1056.component_1056_88), "") == 0) {
        ifSetHide(true, Component.interface_1056.component_1056_117);
    }
}
