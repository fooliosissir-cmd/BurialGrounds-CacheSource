/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5813

function cs2_5813(intArg0: number): [number, number] {
    let int1: number = enumOp(type_int, type_int, Enum.enum_3482, intArg0);
    let int2: number = enumOp(type_int, type_int, Enum.enum_5478, intArg0);
    let int3: number = 0;
    let int4: number = 0;
    let int5: struct = -1;

    while (int1 != int2) {
        int5 = enumOp(type_int, type_struct, Enum.enum_3483, int1);
        if (structParam(int5, Param.task_area) == intArg0 && structParam(int5, Param.task_optional) == 0) {
            int4 = int4 + 1;
            if (task_get_progress(int1) == 2) {
                int3 = int3 + 1;
            }
        }
        int1 = structParam(int5, Param.param_1269);
    }
    return [int3, int4];
}
