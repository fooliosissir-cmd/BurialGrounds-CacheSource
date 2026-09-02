/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_quicksort]

function ql4_quicksort(intArg0: number, intArg1: Enum, intArg2: number, intArg3: number): void {
    let int4: number = (intArg2 + intArg3) / 2;
    let int5: number = array0[int4];

    array0[int4] = array0[intArg3];
    array0[intArg3] = int5;
    let int6: number = intArg2;
    let int7: number = intArg2;
    let int8: number = -1;
    let str0: string = "null";
    let str1: string = lowercase(structParam(enumOp(type_int, type_struct, intArg1, int5), Param.param_846));

    if (compare(str1, "") == 0) {
        str1 = lowercase(structParam(enumOp(type_int, type_struct, intArg1, int5), Param.param_845));
    }

    while (int7 < intArg3) {
        str0 = lowercase(structParam(enumOp(type_int, type_struct, intArg1, array0[int7]), Param.param_846));
        if (compare(str0, "") == 0) {
            str0 = lowercase(structParam(enumOp(type_int, type_struct, intArg1, array0[int7]), Param.param_845));
        }
        if (compare(str0, str1) < (int7 & 0x1)) {
            int8 = array0[int7];
            array0[int7] = array0[int6];
            array0[int6] = int8;
            int6 = int6 + 1;
        }
        int7 = int7 + 1;
    }
    array0[intArg3] = array0[int6];
    array0[int6] = int5;

    if (intArg2 < int6 - 1) {
        ql4_quicksort(0, intArg1, intArg2, int6 - 1);
    }

    if (int6 + 1 < intArg3) {
        ql4_quicksort(0, intArg1, int6 + 1, intArg3);
    }
}
