/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4726

function cs2_4726(intArg0: Enum, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: graphic, intArg9: graphic, intArg10: graphic): [number, number, number, number, number] {
    let int11: number = 74907724;
    let int12: number = 0;
    let int13: struct = -1;
    let str0: string = "";
    let int14: number = 0;

    defineArray(0, type_struct, enumGetoutputcount(intArg0));
    let int15: number = -1;
    let int16: number = 0;

    while (int16 < enumGetoutputcount(intArg0)) {
        array0[int16] = enumOp(type_int, type_struct, intArg0, int16);
        int16 = int16 + 1;
    }
    int16 = 0;
    let int17: number = 1;
    let int18: number = 0;
    let int19: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int20: number = 0;
    let int21: number = 0;

    switch (varc_1659) {
        case 1:
            while (int17 == 1) {
                int17 = 0;
                int16 = enumGetoutputcount(intArg0) - 1;
                while (int16 > 0) {
                    if (structParam(array0[int16], Param.param_1933) > 0) {
                        int18 = structParam(array0[int16], Param.param_1933);
                    } else {
                        int18 = structParam(array0[int16], Param.param_1932);
                    }
                    if (structParam(array0[int16 - 1], Param.param_1933) > 0) {
                        int19 = structParam(array0[int16 - 1], Param.param_1933);
                    } else {
                        int19 = structParam(array0[int16 - 1], Param.param_1932);
                    }
                    if (int18 > int19) {
                        int17 = 1;
                        int15 = array0[int16 - 1];
                        array0[int16 - 1] = array0[int16];
                        array0[int16] = int15;
                    }
                    int16 = int16 - 1;
                }
            }
            break;
        case 2:
            while (int17 == 1) {
                int17 = 0;
                int16 = enumGetoutputcount(intArg0) - 1;
                while (int16 > 0) {
                    if (structParam(array0[int16], Param.param_1937) == 4) {
                        if (gender() == 0) {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16]);
                            str1 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                        } else {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16]);
                            str1 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                        }
                        if (gender() == 0) {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16 - 1]);
                            str2 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                        } else {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16 - 1]);
                            str2 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                        }
                    } else {
                        str1 = structParam(array0[int16], Param.param_1930);
                        str2 = structParam(array0[int16 - 1], Param.param_1930);
                    }
                    if (compare(str1, str2) < 0) {
                        int17 = 1;
                        int15 = array0[int16 - 1];
                        array0[int16 - 1] = array0[int16];
                        array0[int16] = int15;
                    }
                    int16 = int16 - 1;
                }
            }
            break;
        case 3:
            while (int17 == 1) {
                int17 = 0;
                int16 = enumGetoutputcount(intArg0) - 1;
                while (int16 > 0) {
                    if (structParam(array0[int16], Param.param_1937) == 4) {
                        if (gender() == 0) {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16]);
                            str1 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                        } else {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16]);
                            str1 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                        }
                        if (gender() == 0) {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16 - 1]);
                            str2 = enumOp(type_int, type_string, Enum.enum_5186, int20);
                        } else {
                            int20 = enumOp(type_struct, type_int, Enum.enum_5185, array0[int16 - 1]);
                            str2 = enumOp(type_int, type_string, Enum.enum_5187, int20);
                        }
                    } else {
                        str1 = structParam(array0[int16], Param.param_1930);
                        str2 = structParam(array0[int16 - 1], Param.param_1930);
                    }
                    if (compare(str1, str2) > 0) {
                        int17 = 1;
                        int15 = array0[int16 - 1];
                        array0[int16 - 1] = array0[int16];
                        array0[int16] = int15;
                    }
                    int16 = int16 - 1;
                }
            }
            break;
        default:
            while (int17 == 1) {
                int17 = 0;
                int16 = enumGetoutputcount(intArg0) - 1;
                while (int16 > 0) {
                    if (structParam(array0[int16], Param.param_1933) > 0) {
                        int18 = structParam(array0[int16], Param.param_1933);
                    } else {
                        int18 = structParam(array0[int16], Param.param_1932);
                    }
                    if (structParam(array0[int16 - 1], Param.param_1933) > 0) {
                        int19 = structParam(array0[int16 - 1], Param.param_1933);
                    } else {
                        int19 = structParam(array0[int16 - 1], Param.param_1932);
                    }
                    if (int18 < int19) {
                        int17 = 1;
                        int15 = array0[int16 - 1];
                        array0[int16 - 1] = array0[int16];
                        array0[int16] = int15;
                    }
                    int16 = int16 - 1;
                }
            }
            break;
    }
    int16 = 0;

    while (int16 < enumGetoutputcount(intArg0)) {
        int13 = array0[int16];
        [intArg1, intArg2, intArg3, intArg4, intArg6] = cs2_5351(int13, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10);
        int16 = int16 + 1;
    }
    return [intArg1, intArg2, intArg3, intArg4, intArg6];
}
