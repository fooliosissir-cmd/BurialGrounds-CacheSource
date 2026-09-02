/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quicksort]

function quicksort(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = (intArg1 + intArg2) / 2;
    let int4: component = array0[int3];

    array0[int3] = array0[intArg2];
    array0[intArg2] = int4;
    let int5: number = intArg1;
    let int6: number = intArg1;
    let int7: number = -1;

    while (int6 < intArg2) {
        if (compare(lowercase(ifGetText(array0[int6])), lowercase(ifGetText(int4))) < (int6 & 0x1)) {
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
        quicksort(0, intArg1, int5 - 1);
    }

    if (int5 + 1 < intArg2) {
        quicksort(0, int5 + 1, intArg2);
    }
}
