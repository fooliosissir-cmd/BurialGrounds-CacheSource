/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5755

function cs2_5755(intArg0: stat, intArg1: struct): [number, string] {
    if (intArg0 == 0) {
        if (comlevel() < structParam(intArg1, Param.param_2233)) {
            return [structParam(intArg1, Param.param_2233), "combat"];
        }
        switch (structParam(intArg1, Param.task_requirement_1_type)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.task_requirement_1_type))) < structParam(intArg1, Param.task_requirement_1_value)) {
                    return [structParam(intArg1, Param.task_requirement_1_value), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.task_requirement_1_type))];
                }
                break;
        }
        switch (structParam(intArg1, Param.task_requirement_2_type)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.task_requirement_2_type))) < structParam(intArg1, Param.task_requirement_2_value)) {
                    return [structParam(intArg1, Param.task_requirement_2_value), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.task_requirement_2_type))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1298)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1298))) < structParam(intArg1, Param.param_1299)) {
                    return [structParam(intArg1, Param.param_1299), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1298))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1300)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1300))) < structParam(intArg1, Param.param_1301)) {
                    return [structParam(intArg1, Param.param_1301), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1300))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1302)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1302))) < structParam(intArg1, Param.param_1303)) {
                    return [structParam(intArg1, Param.param_1303), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1302))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1304)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1304))) < structParam(intArg1, Param.param_1305)) {
                    return [structParam(intArg1, Param.param_1305), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1304))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1306)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1306))) < structParam(intArg1, Param.param_1307)) {
                    return [structParam(intArg1, Param.param_1307), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1306))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1308)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1308))) < structParam(intArg1, Param.param_1309)) {
                    return [structParam(intArg1, Param.param_1309), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1308))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1310)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1310))) < structParam(intArg1, Param.param_1311)) {
                    return [structParam(intArg1, Param.param_1311), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1310))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_1312)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_1312))) < structParam(intArg1, Param.param_1313)) {
                    return [structParam(intArg1, Param.param_1313), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_1312))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_2227)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_2227))) < structParam(intArg1, Param.param_2228)) {
                    return [structParam(intArg1, Param.param_2228), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_2227))];
                }
                break;
        }
        switch (structParam(intArg1, Param.param_2229)) {
            case 1:
            case 2:
            case 5:
            case 3:
            case 4:
            case 6:
                if (statBase(enumOp(type_int, type_stat, Enum.int_to_stat, structParam(intArg1, Param.param_2229))) < structParam(intArg1, Param.param_2230)) {
                    return [structParam(intArg1, Param.param_2230), enumOp(type_int, type_string, Enum.statstring, structParam(intArg1, Param.param_2229))];
                }
                break;
        }
    } else {
        if (structParam(intArg1, Param.task_requirement_1_type) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.task_requirement_1_value)) {
            return [structParam(intArg1, Param.task_requirement_1_value), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.task_requirement_2_type) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.task_requirement_2_value)) {
            return [structParam(intArg1, Param.task_requirement_2_value), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1298) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1299)) {
            return [structParam(intArg1, Param.param_1299), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1300) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1301)) {
            return [structParam(intArg1, Param.param_1301), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1302) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1303)) {
            return [structParam(intArg1, Param.param_1303), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1304) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1305)) {
            return [structParam(intArg1, Param.param_1305), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1306) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1307)) {
            return [structParam(intArg1, Param.param_1307), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1308) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1309)) {
            return [structParam(intArg1, Param.param_1309), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1310) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1311)) {
            return [structParam(intArg1, Param.param_1311), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_1312) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_1313)) {
            return [structParam(intArg1, Param.param_1313), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_2227) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_2228)) {
            return [structParam(intArg1, Param.param_2228), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
        if (structParam(intArg1, Param.param_2229) == enumOp(type_stat, type_int, Enum.stat_to_int, intArg0) && statBase(intArg0) < structParam(intArg1, Param.param_2230)) {
            return [structParam(intArg1, Param.param_2230), enumOp(type_stat, type_string, Enum.stat_to_string, intArg0)];
        }
    }
    return [0, "error"];
}
