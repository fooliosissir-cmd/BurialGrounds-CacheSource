/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5570

function cs2_5570(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = (intArg1 + intArg2) / 2;
    let int4: number = intArg1;
    let int5: number = intArg1;
    let int6: number = -1;

    while (int5 < intArg2) {
        if (array0[int5] <= int3) {
            int6 = array0[int5];
            array0[int5] = array0[int4];
            array0[int4] = int6;
            int4 = int4 + 1;
        }
        int5 = int5 + 1;
    }
    array0[intArg2] = array0[int4];
    array0[int4] = int3;

    if (intArg1 < int4 - 1) {
        cs2_5570(0, intArg1, int4 - 1);
    }

    if (int4 + 1 < intArg2) {
        cs2_5570(0, int4 + 1, intArg2);
    }
}
