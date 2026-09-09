/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_13

function cs2_13(intArg0: number, intArg1: number): [string, number] {
    let int2: Enum = enumOp(type_int, type_enum, Enum.skillguide_skill_filters, intArg0);
    if (intArg1 < 0 || intArg1 >= enumGetoutputcount(int2)) {
        return ["", -1];
    }
    let int3: Enum = enumOp(type_int, type_enum, Enum.skillguide_skills, intArg0);
    let int4: number = enumGetoutputcount(int3);
    let int5: number = 0;
    let int6: struct = -1;
    let int7: number = 0;
    let int8: number = 1;

    while (int5 < int4) {
        int6 = enumOp(type_int, type_struct, int3, int5);
        if (skillguide_row_in_tab(int6, intArg1) == 1) {
            int7 = int7 + 1;
            if (structParam(int6, Param.skillguide_members) != 1) {
                int8 = 0;
            }
        }
        int5 = int5 + 1;
    }

    if (int7 == 0) {
        int8 = 0;
    }
    return [enumOp(type_int, type_string, int2, intArg1), int8];
}
