/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5764

function cs2_5764(intArg0: stat, intArg1: Enum, intArg2: number): number {
    let int3: number = -1;
    let int4: number = -1;
    let int5: number = -1;
    let int6: number = -1;
    let int7: number = -1;
    let int8: struct = -1;
    let int9: number = -1;

    if (intArg2 == -1) {
        intArg2 = 0;
    }
    let int10: struct = enumOp(type_int, type_struct, intArg1, intArg2);
    let int11: struct = enumOp(type_struct, type_struct, Enum.enum_5483, int10);

    if (int11 != -1) {
        int10 = int11;
    }
    let int12: number = structParam(int10, Param.param_2232);
    let int13: number = enumGetoutputcount(intArg1) - 1;
    let int14: number = 0;

    while (int13 >= 0 && int14 == 0) {
        int8 = enumOp(type_int, type_struct, intArg1, int13);
        int11 = enumOp(type_struct, type_struct, Enum.enum_5483, int8);
        if (int11 != -1) {
            int8 = int11;
        }
        if ((task_get_progress(structParam(int8, Param.param_1268)) != 2 || cs2_5732(int8) != 0) && cs2_5729(int8, intArg0) == 1 && task_requirements_fulfilled(structParam(int8, Param.param_1268)) == 1) {
            int9 = structParam(int8, Param.param_2232);
            if (int9 == int12) {
                if (int13 != intArg2) {
                    switch (int9) {
                        case 4:
                            if (int13 > int3 || (int13 < int3 && int3 > intArg2)) {
                                int3 = int13;
                            }
                            break;
                        case 3:
                            if (int13 > int4 || (int13 < int4 && int4 > intArg2)) {
                                int4 = int13;
                            }
                            break;
                        case 2:
                            if (int13 > int5 || (int13 < int5 && int5 > intArg2)) {
                                int5 = int13;
                            }
                            break;
                        case 1:
                            if (int13 > int6 || (int13 < int6 && int6 > intArg2)) {
                                int6 = int13;
                            }
                            break;
                        case 0:
                            if (int13 <= int7 && (int13 >= int7 || int7 <= intArg2)) {
                                break;
                            }
                            int7 = int13;
                            break;
                    }
                }
            } else {
                switch (int9) {
                    case 4:
                        if (int13 > int3) {
                            int3 = int13;
                        }
                        break;
                    case 3:
                        if (int13 > int4) {
                            int4 = int13;
                        }
                        break;
                    case 2:
                        if (int13 > int5) {
                            int5 = int13;
                        }
                        break;
                    case 1:
                        if (int13 > int6) {
                            int6 = int13;
                        }
                        break;
                    case 0:
                        if (int13 <= int7) {
                            break;
                        }
                        int7 = int13;
                        break;
                }
            }
        }
        int13 = int13 - 1;
    }
    let int15: number = -1;

    switch (int12) {
        case 4:
            if (int3 < intArg2 && int3 > -1) {
                int15 = int3;
            } else if (int4 > -1) {
                int15 = int4;
            } else if (int5 > -1) {
                int15 = int5;
            } else if (int6 > -1) {
                int15 = int6;
            } else if (int7 > -1) {
                int15 = int7;
            } else if (int3 > -1) {
                int15 = int3;
            }
            break;
        case 3:
            if (int4 < intArg2 && int4 > -1) {
                int15 = int4;
            } else if (int5 > -1) {
                int15 = int5;
            } else if (int6 > -1) {
                int15 = int6;
            } else if (int7 > -1) {
                int15 = int7;
            } else if (int3 > -1) {
                int15 = int3;
            } else if (int4 > -1) {
                int15 = int4;
            }
            break;
        case 2:
            if (int5 < intArg2 && int5 > -1) {
                int15 = int5;
            } else if (int6 > -1) {
                int15 = int6;
            } else if (int7 > -1) {
                int15 = int7;
            } else if (int3 > -1) {
                int15 = int3;
            } else if (int4 > -1) {
                int15 = int4;
            } else if (int5 > -1) {
                int15 = int5;
            }
            break;
        case 1:
            if (int6 < intArg2 && int6 > -1) {
                int15 = int6;
            } else if (int7 > -1) {
                int15 = int7;
            } else if (int3 > -1) {
                int15 = int3;
            } else if (int4 > -1) {
                int15 = int4;
            } else if (int5 > -1) {
                int15 = int5;
            } else if (int6 > -1) {
                int15 = int6;
            }
            break;
        case 0:
            if (int7 < intArg2 && int7 > -1) {
                int15 = int7;
            } else if (int3 > -1) {
                int15 = int3;
            } else if (int4 > -1) {
                int15 = int4;
            } else if (int5 > -1) {
                int15 = int5;
            } else if (int6 > -1) {
                int15 = int6;
            } else if (int7 > -1) {
                int15 = int7;
            }
            break;
    }
    return int15;
}
