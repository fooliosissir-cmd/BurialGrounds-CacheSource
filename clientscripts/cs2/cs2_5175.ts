/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5175

function cs2_5175(intArg0: number): [number, number] {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: struct = -1;

    while (int1 <= 1091) {
        int4 = enumOp(type_int, type_struct, Enum.enum_3483, int1);
        if (structParam(int4, Param.task_area) == intArg0 && structParam(int4, Param.task_optional) == 0) {
            int3 = int3 + 1;
            if (task_get_progress(int1) == 2) {
                int2 = int2 + 1;
            }
        }
        int1 = int1 + 1;
    }
    return [int2, int3];
}
