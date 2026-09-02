/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,task_requirements]

function task_requirements(intArg0: number): [number, string, colour] {
    if (intArg0 >= 4091) {
        return [0, "", colour(0x000000)];
    }

    if (intArg0 >= 4000 && intArg0 <= 4027) {
        return [0, "", colour(0x000000)];
    }

    if (structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.task_requirement_1_type) == 0) {
        return [1, "There are no requirements for this Task.", colour(0x00FF00)];
    }

    if (task_get_progress(intArg0) == 2) {
        return [2, "You have completed this Task.", colour(0x00FF00)];
    } else if (cs2_3994(intArg0) == 1) {
        if (cs2_3999(intArg0) == 1) {
            return [0, "", colour(0x00FF00)];
        } else {
            return [1, "You currently have this Task pinned.", colour(0x8F572B)];
        }
    } else if (mapMembers() == 0 && structParam(enumOp(type_int, type_struct, Enum.enum_3483, intArg0), Param.task_game) == 2) {
        return [0, "This Task cannot be completed in the free game.", colour(0xFF0000)];
    } else if (task_requirements_fulfilled(intArg0) == 0) {
        return [0, "You lack one or more prerequisites needed to complete this Task.", colour(0xFF0000)];
    } else {
        return [1, "You have the requirements to complete this Task.", colour(0x00FF00)];
    }
}
