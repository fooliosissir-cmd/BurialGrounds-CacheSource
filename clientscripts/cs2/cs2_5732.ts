/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5732

function cs2_5732(intArg0: struct): number {
    if (cs2_3999(structParam(intArg0, Param.param_1270)) == 0) {
        return 0;
    }
    let int1: number = 0;
    let int2: number = enumGetoutputcount(Enum.enum_5508);

    while (int1 < int2) {
        if (structParam(enumOp(type_int, type_struct, Enum.enum_5508, int1), Param.param_1268) == structParam(intArg0, Param.param_1268)) {
            return 0;
        }
        int1 = int1 + 1;
    }
    int1 = 0;
    let int3: number = enumGetoutputcount(Enum.enum_5507);

    while (int1 < int3) {
        if (structParam(enumOp(type_int, type_struct, Enum.enum_5507, int1), Param.param_1268) == structParam(intArg0, Param.param_1268)) {
            return 1;
        }
        int1 = int1 + 1;
    }

    if (task_get_progress(structParam(intArg0, Param.param_1268)) == 3) {
        return 3;
    }
    return 2;
}
