/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5741

function cs2_5741(intArg0: struct, intArg1: number): number {
    let int2: number = 0;
    let int3: number = 0;
    let int4: stat = -1;
    let int5: number = -1;
    let int6: number = 0;

    switch (intArg1) {
        case 1:
            int2 = structParam(intArg0, Param.task_requirement_1_type);
            int3 = structParam(intArg0, Param.task_requirement_1_value);
            break;
        case 2:
            int2 = structParam(intArg0, Param.task_requirement_2_type);
            int3 = structParam(intArg0, Param.task_requirement_2_value);
            break;
        case 3:
            int2 = structParam(intArg0, Param.param_1298);
            int3 = structParam(intArg0, Param.param_1299);
            break;
        case 4:
            int2 = structParam(intArg0, Param.param_1300);
            int3 = structParam(intArg0, Param.param_1301);
            break;
        case 5:
            int2 = structParam(intArg0, Param.param_1302);
            int3 = structParam(intArg0, Param.param_1303);
            break;
        case 6:
            int2 = structParam(intArg0, Param.param_1304);
            int3 = structParam(intArg0, Param.param_1305);
            break;
        case 7:
            int2 = structParam(intArg0, Param.param_1306);
            int3 = structParam(intArg0, Param.param_1307);
            break;
        case 8:
            int2 = structParam(intArg0, Param.param_1308);
            int3 = structParam(intArg0, Param.param_1309);
            break;
        case 9:
            int2 = structParam(intArg0, Param.param_1310);
            int3 = structParam(intArg0, Param.param_1311);
            break;
        case 10:
            int2 = structParam(intArg0, Param.param_1312);
            int3 = structParam(intArg0, Param.param_1313);
            break;
        case 11:
            int2 = structParam(intArg0, Param.param_2227);
            int3 = structParam(intArg0, Param.param_2228);
            break;
        case 12:
            int2 = structParam(intArg0, Param.param_2229);
            int3 = structParam(intArg0, Param.param_2230);
            break;
    }

    if (int2 == 0) {
        if (intArg1 == 1) {
            return 1;
        } else {
            return 1;
        }
    } else if (int2 < 60) {
        int4 = enumOp(type_int, type_stat, Enum.int_to_stat, int2);
        if (int4 != -1) {
            if (statBase(int4) >= int3) {
                return 1;
            } else {
                return 0;
            }
        }
    } else if (int2 == 61) {
        int5 = enumOp(type_int, type_struct, Enum.enum_2252, int3);
        if (cs2_2193(int3) == 2) {
            return 1;
        } else {
            return 0;
        }
    } else {
        int6 = cs2_5812(structParam(intArg0, Param.param_1268), intArg1);
        return int6;
    }
    return -1;
}
