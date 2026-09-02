/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5352

function cs2_5352(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: graphic, intArg8: graphic, intArg9: graphic): [number, number, number, number, number] {
    let int10: Enum = -1;
    let int11: struct = -1;
    let int12: number = -1;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;

    while (int15 < 6) {
        switch (int15) {
            case 0:
                int10 = Enum.enum_5182;
                break;
            case 1:
                int10 = Enum.enum_3875;
                break;
            case 2:
                if (gender() == 0) {
                    int10 = Enum.enum_5189;
                } else {
                    int10 = Enum.enum_5188;
                }
                break;
            case 3:
                int10 = Enum.enum_5184;
                break;
            case 4:
                int10 = Enum.enum_5183;
                break;
            case 5:
                int10 = Enum.enum_5724;
                break;
        }
        int13 = 0;
        while (int13 < enumGetoutputcount(int10)) {
            int11 = enumOp(type_int, type_struct, int10, int13);
            if (structParam(int11, Param.param_1933) > 0) {
                int14 = int14 + 1;
            }
            int13 = int13 + 1;
        }
        int15 = int15 + 1;
    }

    if (int14 < 1) {
        return [intArg0, intArg1, intArg2, intArg3, intArg5];
    }
    defineArray(0, type_struct, int14);
    let int16: number = int14 - 1;
    int15 = 0;

    while (int15 < 6) {
        switch (int15) {
            case 0:
                int10 = Enum.enum_5182;
                break;
            case 1:
                int10 = Enum.enum_3875;
                break;
            case 2:
                if (gender() == 0) {
                    int10 = Enum.enum_5189;
                } else {
                    int10 = Enum.enum_5188;
                }
                break;
            case 3:
                int10 = Enum.enum_5184;
                break;
            case 4:
                int10 = Enum.enum_5183;
                break;
            case 5:
                int10 = Enum.enum_5724;
                break;
        }
        int13 = 0;
        while (int13 < enumGetoutputcount(int10)) {
            int11 = enumOp(type_int, type_struct, int10, int13);
            if (structParam(int11, Param.param_1933) > 0) {
                array0[int16] = int11;
                int16 = max(int16 - 1, 0);
            }
            int13 = int13 + 1;
        }
        int15 = int15 + 1;
    }
    int13 = 0;
    let int17: number = 1;
    let int18: number = 0;
    let int19: number = 0;
    let str0: string = "";
    let str1: string = "";
    let int20: number = 0;
    let int21: number = 0;

    switch (varc_1659) {
        case 1:
            while (int17 == 1) {
                int17 = 0;
                int13 = int14 - 1;
                while (int13 > 0) {
                    if (structParam(array0[int13], Param.param_1933) > 0) {
                        int18 = structParam(array0[int13], Param.param_1933);
                    } else {
                        int18 = structParam(array0[int13], Param.param_1932);
                    }
                    if (structParam(array0[int13 - 1], Param.param_1933) > 0) {
                        int19 = structParam(array0[int13 - 1], Param.param_1933);
                    } else {
                        int19 = structParam(array0[int13 - 1], Param.param_1932);
                    }
                    if (int18 > int19) {
                        int17 = 1;
                        int12 = array0[int13 - 1];
                        array0[int13 - 1] = array0[int13];
                        array0[int13] = int12;
                    }
                    int13 = int13 - 1;
                }
            }
            break;
        case 2:
            while (int17 == 1) {
                int17 = 0;
                int13 = int14 - 1;
                while (int13 > 0) {
                    if (structParam(array0[int13], Param.param_1937) == 4) {
                        int20 = 0;
                        int21 = 0;
                        while (int20 < enumGetoutputcount(Enum.enum_5184) && int21 == 0) {
                            if (enumOp(type_int, type_struct, Enum.enum_5184, int20) == array0[int13]) {
                                if (gender() == 0) {
                                    str0 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                                } else {
                                    str0 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                                }
                                int21 = 1;
                            }
                            int20 = int20 + 1;
                        }
                    } else {
                        str0 = structParam(array0[int13], Param.param_1930);
                    }
                    if (structParam(array0[int13 - 1], Param.param_1937) == 4) {
                        int20 = 0;
                        int21 = 0;
                        while (int20 < enumGetoutputcount(Enum.enum_5184) && int21 == 0) {
                            if (enumOp(type_int, type_struct, Enum.enum_5184, int20) == array0[int13 - 1]) {
                                if (gender() == 0) {
                                    str1 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                                } else {
                                    str1 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                                }
                                int21 = 1;
                            }
                            int20 = int20 + 1;
                        }
                    } else {
                        str1 = structParam(array0[int13 - 1], Param.param_1930);
                    }
                    if (compare(str0, str1) < 0) {
                        int17 = 1;
                        int12 = array0[int13 - 1];
                        array0[int13 - 1] = array0[int13];
                        array0[int13] = int12;
                    }
                    int13 = int13 - 1;
                }
            }
            break;
        case 3:
            while (int17 == 1) {
                int17 = 0;
                int13 = int14 - 1;
                while (int13 > 0) {
                    if (structParam(array0[int13], Param.param_1937) == 4) {
                        int20 = 0;
                        int21 = 0;
                        while (int20 < enumGetoutputcount(Enum.enum_5184) && int21 == 0) {
                            if (enumOp(type_int, type_struct, Enum.enum_5184, int20) == array0[int13]) {
                                if (gender() == 0) {
                                    str0 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                                } else {
                                    str0 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                                }
                                int21 = 1;
                            }
                            int20 = int20 + 1;
                        }
                    } else {
                        str0 = structParam(array0[int13], Param.param_1930);
                    }
                    if (structParam(array0[int13 - 1], Param.param_1937) == 4) {
                        int20 = 0;
                        int21 = 0;
                        while (int20 < enumGetoutputcount(Enum.enum_5184) && int21 == 0) {
                            if (enumOp(type_int, type_struct, Enum.enum_5184, int20) == array0[int13 - 1]) {
                                if (gender() == 0) {
                                    str1 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                                } else {
                                    str1 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                                }
                                int21 = 1;
                            }
                            int20 = int20 + 1;
                        }
                    } else {
                        str1 = structParam(array0[int13 - 1], Param.param_1930);
                    }
                    if (compare(str0, str1) > 0) {
                        int17 = 1;
                        int12 = array0[int13 - 1];
                        array0[int13 - 1] = array0[int13];
                        array0[int13] = int12;
                    }
                    int13 = int13 - 1;
                }
            }
            break;
        default:
            while (int17 == 1) {
                int17 = 0;
                int13 = int14 - 1;
                while (int13 > 0) {
                    if (structParam(array0[int13], Param.param_1933) > 0) {
                        int18 = structParam(array0[int13], Param.param_1933);
                    } else {
                        int18 = structParam(array0[int13], Param.param_1932);
                    }
                    if (structParam(array0[int13 - 1], Param.param_1933) > 0) {
                        int19 = structParam(array0[int13 - 1], Param.param_1933);
                    } else {
                        int19 = structParam(array0[int13 - 1], Param.param_1932);
                    }
                    if (int18 < int19) {
                        int17 = 1;
                        int12 = array0[int13 - 1];
                        array0[int13 - 1] = array0[int13];
                        array0[int13] = int12;
                    }
                    int13 = int13 - 1;
                }
            }
            break;
    }
    int13 = 0;

    while (int13 < int14) {
        int11 = array0[int13];
        [intArg0, intArg1, intArg2, intArg3, intArg5] = cs2_5351(int11, intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9);
        int13 = int13 + 1;
    }
    return [intArg0, intArg1, intArg2, intArg3, intArg5];
}
