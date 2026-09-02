/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wom2_onop]

function wom2_onop(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: obj = -1;
    let int5: number = -1;

    if (varbit_wom2_varbit_invtype != 0) {
        int5 = enumOp(type_int, type_inv, Enum.int_to_invtype, varbit_wom2_varbit_invtype);
        if (intArg2 == 1 && ccFind(Component.interface_1144.component_1144_0, intArg1) == 1) {
            int4 = invGetobj(int5, intArg1);
            if (int4 != -1) {
                varbit_wom2_varbit_last_comsubid = intArg1;
                cs2_4741();
            }
        }
    }
}
