/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_tab_row]

function skillguide_tab_row(intArg0: number, intArg1: number, intArg2: number): struct {
    let int3: Enum = enumOp(type_int, type_enum, Enum.skillguide_skills, intArg0);
    if (intArg2 < 0 || intArg2 >= enumGetoutputcount(int3)) {
        return -1;
    }
    let int4: struct = enumOp(type_int, type_struct, int3, intArg2);
    if (skillguide_row_in_tab(int4, intArg1) == 0) {
        return -2;
    }
    return int4;
}
