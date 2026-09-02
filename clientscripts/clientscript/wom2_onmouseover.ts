/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wom2_onmouseover]

function wom2_onmouseover(intArg0: component, intArg1: number): void {
    let int2: number = -1;
    let int3: obj = -1;
    let str0: string = "null";

    if (varbit_wom2_varbit_invtype != 0) {
        int2 = enumOp(type_int, type_inv, Enum.int_to_invtype, varbit_wom2_varbit_invtype);
        if (intArg1 < invSize(int2)) {
            int3 = invGetobj(int2, intArg1);
            if (int3 != -1) {
                str0 = cs2_4747(int3);
                if (stringLength(str0) > 0) {
                    ifSetText(str0, Component.interface_1144.component_1144_23);
                    ifSetHide(false, Component.interface_1144.component_1144_23);
                    ifSetHide(true, Component.interface_1144.component_1144_22);
                }
            }
        }
    }
}
