/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5814

function cs2_5814(intArg0: number): [number, number, number] {
    let int1: number = 0;
    let int2: number = 4094;
    let int3: number = 0;

    while (int1 < enumGetoutputcount(Enum.enum_5480)) {
        int2 = enumOp(type_int, type_int, Enum.enum_5480, int1);
        if (int2 == intArg0) {
            int3 = enumOp(type_int, type_int, Enum.enum_5481, int1);
            int1 = enumGetoutputcount(Enum.enum_5480);
        } else {
            int1 = int1 + 1;
        }
    }

    if (int3 == 0) {
        return [0, 0, 0];
    }
    let int4: number = 0;
    let int5: number = 0;
    int1 = 0;

    while (int1 < enumGetoutputcount(Enum.enum_5480)) {
        if (enumOp(type_int, type_int, Enum.enum_5481, int1) == int3) {
            int2 = enumOp(type_int, type_int, Enum.enum_5480, int1);
            if (task_get_progress(int2) == 2) {
                int5 = int5 + 1;
            }
            int4 = int4 + 1;
        }
        int1 = int1 + 1;
    }
    return [int3, int5, int4];
}
