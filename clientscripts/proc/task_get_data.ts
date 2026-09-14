/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,task_get_data]

function task_get_data(intArg0: number): struct {
    let int1: struct = enumOp(type_int, type_struct, Enum.enum_3483, intArg0);
    let int2: struct = -1;

    if (enumOp(type_int, type_int, Enum.enum_5479, intArg0) == 1 && ifHasSubOverlay(48889866, 1222) == 0) {
        int2 = enumOp(type_struct, type_struct, Enum.enum_5911, int1);
    } else if ((mapMembers() == 1 && varbit_task_priority_mode == 1) || varbit_10700 == intArg0) {
        int2 = enumOp(type_struct, type_struct, Enum.enum_5483, int1);
    }

    if (int2 != -1) {
        int1 = int2;
    }
    return int1;
}
