/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1693

function cs2_1693(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = (intArg1 + intArg2) / 2;
    let int4: number = array0[int3];

    array0[int3] = array0[intArg2];
    array0[intArg2] = int4;
    let int5: number = intArg1;
    let int6: number = intArg1;
    let int7: number = 0;
    let str0: string = "";
    let str1: string = "";
    let int8: struct = -1;

    while (int6 < intArg2) {
        int8 = enumOp(type_int, type_struct, Enum.enum_845, array0[int6]);
        if (int8 != -1) {
            int8 = structParam(int8, Param.param_923);
            if (int8 != -1) {
                str0 = structParam(int8, Param.param_846);
            } else {
                str0 = "";
            }
        } else {
            str0 = "";
        }
        int8 = enumOp(type_int, type_struct, Enum.enum_845, int4);
        if (int8 != -1) {
            int8 = structParam(int8, Param.param_923);
            if (int8 != -1) {
                str1 = structParam(int8, Param.param_846);
            } else {
                str1 = "";
            }
        } else {
            str1 = "";
        }
        if (compare(str0, str1) < (int6 & 0x1)) {
            int7 = array0[int6];
            array0[int6] = array0[int5];
            array0[int5] = int7;
            int5 = int5 + 1;
        }
        int6 = int6 + 1;
    }
    array0[intArg2] = array0[int5];
    array0[int5] = int4;

    if (intArg1 < int5 - 1) {
        cs2_1693(0, intArg1, int5 - 1);
    }

    if (int5 + 1 < intArg2) {
        cs2_1693(0, int5 + 1, intArg2);
    }
}
