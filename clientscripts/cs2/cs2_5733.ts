/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5733

function cs2_5733(intArg0: number): number {
    let int1: number = 0;

    if (cs2_5767() == 0 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
        return 1;
    }

    switch (intArg0) {
        case 1:
            if (varbit_task_omge_priority_chapter_1 == 1 || varbit_8576 == 584 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 13:
        case 14:
        case 11:
            if (varbit_task_omge_priority_chapter_2 == 1 || varbit_8576 == 585 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 21:
        case 16:
        case 15:
        case 23:
            if (varbit_task_omge_priority_chapter_3 == 1 || varbit_8576 == 586 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 10:
            if (varbit_task_omge_priority_chapter_4 == 1 || varbit_8576 == 587 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 20:
            if (varbit_task_omge_priority_chapter_5 == 1 || varbit_8576 == 588 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 24:
            if (varbit_task_omge_priority_chapter_6 == 1 || varbit_8576 == 589 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 18:
        case 17:
        case 19:
            if (varbit_task_omge_priority_chapter_7 == 1 || varbit_8576 == 590 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
        case 9:
        case 7:
            if (varbit_task_omge_priority_chapter_8 == 1 || varbit_8576 == 591 || cs2_5765(enumOp(type_int, type_stat, Enum.int_to_stat, intArg0)) == 1) {
                return 1;
            }
            break;
    }
    return 0;
}
