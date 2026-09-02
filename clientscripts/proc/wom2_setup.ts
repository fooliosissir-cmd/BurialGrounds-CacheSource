/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,wom2_setup]

function proc_wom2_setup(intArg0: component, intArg1: number): void {
    let int2: number = 556;
    let int3: number = -1;

    if (varbit_wom2_varbit_invtype > 0) {
        int3 = enumOp(type_int, type_inv, Enum.int_to_invtype, varbit_wom2_varbit_invtype);
        if (int3 != -1) {
            int2 = invSize(int3);
        }
    }
    ifSetScrollPos(0, 0, intArg0);
    ccDeleteAll(intArg0);
    let int4: number = 0;

    while (int4 < int2) {
        ccCreate(intArg0, 5, int4);
        ccSetSize(0, 0, 0, 0);
        ccSetPosition(0, 0, 0, 0);
        ccSetHide(true);
        int4 = int4 + 1;
    }
}
