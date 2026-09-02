/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_943

function cs2_943(intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = structParam(enumOp(type_int, type_struct, Enum.ql4_intstruct_lists, intArg0), Param.param_782);

    if (mapMembers() == 0) {
        mes("More advanced grouping options are available on a members' world.");
    } else if (varp_tutorial < 1000) {
        mes("More advanced grouping options will be available when you've finished the Tutorial.");
    } else {
        if (varc_693 == intArg1) {
            varc_694 = (1 + varc_694) % 2;
        } else {
            varc_693 = intArg1;
            varc_694 = 0;
        }
        proc_ql4_sort(intArg0, varc_693, varc_694, varc_692, varc_1103);
    }
}
