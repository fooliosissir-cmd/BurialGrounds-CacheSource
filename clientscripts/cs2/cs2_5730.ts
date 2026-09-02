/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5730

function cs2_5730(intArg0: number, intArg1: stat): number {
    let int2: number = enumOp(type_int, type_int, Enum.enum_5510, intArg0);

    if (cs2_5765(intArg1) == 1) {
        return 1;
    }

    if (cs2_5767() == 1) {
        if (int2 >= 10) {
            return 0;
        } else if (int2 == 0) {
            return 1;
        } else {
            switch (int2) {
                case 1:
                    if (varbit_task_omge_priority_chapter_1 != 1) {
                        return 0;
                    }
                    break;
                case 2:
                    if (varbit_task_omge_priority_chapter_2 != 1) {
                        return 0;
                    }
                    break;
                case 3:
                    if (varbit_task_omge_priority_chapter_3 != 1) {
                        return 0;
                    }
                    break;
                case 4:
                    if (varbit_task_omge_priority_chapter_4 != 1) {
                        return 0;
                    }
                    break;
                case 5:
                    if (varbit_task_omge_priority_chapter_5 != 1) {
                        return 0;
                    }
                    break;
                case 6:
                    if (varbit_task_omge_priority_chapter_6 != 1) {
                        return 0;
                    }
                    break;
                case 7:
                    if (varbit_task_omge_priority_chapter_7 != 1) {
                        return 0;
                    }
                    break;
                case 8:
                    if (varbit_task_omge_priority_chapter_8 != 1) {
                        return 0;
                    }
                    break;
                case 9:
                    return 0;
            }
        }
    }
    return 1;
}
