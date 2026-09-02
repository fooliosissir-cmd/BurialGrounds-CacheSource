/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6471

function cs2_6471(intArg0: number, intArg1: number, intArg2: Enum): void {
    let int3: number = -1;
    let int4: number = intArg1 - 2;
    let int5: number = 1;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;

    while (int5 == 1 && int7 < 10000) {
        int5 = 0;
        int3 = int3 + 1;
        int6 = int3;
        while (int6 <= int4) {
            int9 = structParam(enumOp(type_int, type_struct, intArg2, array0[int6]), Param.param_2532);
            int10 = structParam(enumOp(type_int, type_struct, intArg2, array0[int6 + 1]), Param.param_2532);
            if (int10 == -1) {
                int4 = int6 + 1;
            } else if (int9 > int10) {
                int8 = array0[int6];
                array0[int6] = array0[int6 + 1];
                array0[int6 + 1] = int8;
                int5 = 1;
            }
            int6 = int6 + 1;
        }
        if (int5 == 1) {
            int5 = 0;
            int4 = int4 - 1;
            int6 = int4;
            while (int6 >= int3) {
                int9 = structParam(enumOp(type_int, type_struct, intArg2, array0[int6]), Param.param_2532);
                int10 = structParam(enumOp(type_int, type_struct, intArg2, array0[int6 + 1]), Param.param_2532);
                if (int9 > int10) {
                    int8 = array0[int6];
                    array0[int6] = array0[int6 + 1];
                    array0[int6 + 1] = int8;
                    int5 = 1;
                }
                int6 = int6 - 1;
            }
        }
        int7 = int7 + 1;
    }
}
