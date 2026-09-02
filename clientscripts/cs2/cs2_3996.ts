/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3996

function cs2_3996(intArg0: number): number {
    if (intArg0 >= 4091) {
        return 0;
    }

    if (intArg0 >= 4000 && intArg0 <= 4027) {
        return 0;
    }

    if (task_get_progress(intArg0) == 2) {
        return 2;
    } else if (cs2_3994(intArg0) == 1) {
        if (cs2_3999(intArg0) == 1) {
            return 0;
        } else {
            return 1;
        }
    } else if (mapMembers() == 0 && structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.task_game) == 2) {
        return 0;
    } else if (task_requirements_fulfilled(intArg0) == 0) {
        return 0;
    } else {
        return 1;
    }
}
