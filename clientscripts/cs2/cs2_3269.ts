/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3269

function cs2_3269(intArg0: number, intArg1: number, intArg2: number, intArg3: number): [number, number, number, number] {
    if (intArg0 == 0) {
        intArg2 = 48;
        intArg3 = 48;
    }
    let int4: number = intArg1;

    if (varc_rand_exists_1 == 1) {
        int4 = int4 + 2;
        if (intArg0 == 1) {
            int4 = int4 + intArg3;
        } else {
            int4 = int4 + intArg2;
        }
    }
    let int5: number = int4;

    if (varc_rand_exists_2 == 1) {
        int5 = int5 + 2;
        if (intArg0 == 2) {
            int5 = int5 + intArg3;
        } else {
            int5 = int5 + intArg2;
        }
    }
    let int6: number = int5;

    if (varc_rand_exists_3 == 1) {
        int6 = int6 + 2;
        if (intArg0 == 3) {
            int6 = int6 + intArg3;
        } else {
            int6 = int6 + intArg2;
        }
    }
    let int7: number = int6;

    if (varc_rand_exists_4 == 1) {
        int7 = int7 + 2;
        if (intArg0 == 4) {
            int7 = int7 + intArg3;
        } else {
            int7 = int7 + intArg2;
        }
    }
    return [int4, int5, int6, int7];
}
