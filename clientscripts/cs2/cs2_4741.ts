/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4741

function cs2_4741(): void {
    let int0: number = 0;
    let int1: obj = -1;
    let int2: number = -1;

    if (varbit_wom2_varbit_last_comsubid < 99999 && varbit_wom2_varbit_invtype != 0) {
        int2 = enumOp(type_int, type_inv, Enum.int_to_invtype, varbit_wom2_varbit_invtype);
        if (ccFind(Component.interface_1144.component_1144_0, varbit_wom2_varbit_last_comsubid) == 1) {
            int0 = invGetNum(int2, varbit_wom2_varbit_last_comsubid);
            if (int0 > 0) {
                int1 = invGetobj(int2, varbit_wom2_varbit_last_comsubid);
                if (int1 != -1) {
                    ifSetHide(true, Component.interface_1144.component_1144_23);
                    ifSetHide(false, Component.interface_1144.component_1144_22);
                    ifSetHide(false, Component.interface_1144.component_1144_9);
                    ifSetHide(false, Component.interface_1144.component_1144_39);
                    if (int0 == 1) {
                        ifSetText("Are you sure you want to delete " + "<col=ffff80>" + ocName(int1) + "</col>" + "?", Component.interface_1144.component_1144_49);
                    } else {
                        ifSetText("Are you sure you want to delete " + "<col=ffff80>" + ocName(int1) + "</col>" + " (" + "<col=ffffff>" + tostring(int0) + "</col>" + " items)?", Component.interface_1144.component_1144_49);
                    }
                    ifSetObject(int1, int0, Component.interface_1144.component_1144_50);
                }
            }
        }
    }
}
