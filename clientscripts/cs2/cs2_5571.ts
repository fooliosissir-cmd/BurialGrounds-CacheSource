/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5571

function cs2_5571(intArg0: number, intArg1: number, intArg2: number, intArg3: Enum): void {
    let int4: number = (intArg1 + intArg2) / 2;
    let int5: number = structParam(enumOp(type_int, type_struct, intArg3, array0[int4]), Param.param_1932);

    array0[int4] = array0[intArg2];
    array0[intArg2] = int5;
    let int6: number = intArg1;
    let int7: number = intArg1;
    let int8: number = -1;

    while (int7 < intArg2) {
        if (structParam(enumOp(type_int, type_struct, intArg3, array0[int7]), Param.param_1933) > 0) {
            if (structParam(enumOp(type_int, type_struct, intArg3, array0[int7]), Param.param_1933) >= int5) {
                int8 = array0[int7];
                array0[int7] = array0[int6];
                array0[int6] = int8;
                int6 = int6 + 1;
            }
        } else if (structParam(enumOp(type_int, type_struct, intArg3, array0[int7]), Param.param_1932) >= int5) {
            int8 = array0[int7];
            array0[int7] = array0[int6];
            array0[int6] = int8;
            int6 = int6 + 1;
        }
        int7 = int7 + 1;
    }
    array0[intArg2] = array0[int6];
    array0[int6] = int4;

    if (intArg1 < int6 - 1) {
        cs2_5571(0, intArg1, int6 - 1, intArg3);
    }

    if (int6 + 1 < intArg2) {
        cs2_5571(0, int6 + 1, intArg2, intArg3);
    }
}
