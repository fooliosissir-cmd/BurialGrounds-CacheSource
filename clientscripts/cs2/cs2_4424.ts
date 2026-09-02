/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4424

function cs2_4424(intArg0: number, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: number = (intArg2 + intArg3) / 2;
    let int5: number = array0[int4];

    array0[int4] = array0[intArg3];
    array0[intArg3] = int5;
    let int6: number = intArg2;
    let int7: number = intArg2;
    let int8: number = -1;

    while (int7 < intArg3) {
        if (ccFind<1>(intArg1, int5) == 1 && ccFind(intArg1, array0[int7]) == 1 && compare(lowercase(ccGetText()), lowercase(ccGetText<1>())) < (int7 & 0x1)) {
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
        cs2_4424(0, intArg1, intArg2, int6 - 1);
    }

    if (int6 + 1 < intArg3) {
        cs2_4424(0, intArg1, int6 + 1, intArg3);
    }
}
