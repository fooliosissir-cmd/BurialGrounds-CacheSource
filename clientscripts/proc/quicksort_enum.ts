/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quicksort_enum]

function quicksort_enum(intArg0: number, intArg1: number, intArg2: number, intArg3: Enum): void {
    let int4: number = (intArg1 + intArg2) / 2;
    let int5: component = array0[int4];

    array0[int4] = array0[intArg2];
    array0[intArg2] = int5;
    let int6: number = intArg1;
    let int7: number = intArg1;
    let int8: number = -1;

    while (int7 < intArg2) {
        if (compare(lowercase(enumOp(type_component, type_string, intArg3, array0[int7])), lowercase(enumOp(type_component, type_string, intArg3, int5))) < (int7 & 0x1)) {
            int8 = array0[int7];
            array0[int7] = array0[int6];
            array0[int6] = int8;
            int6 = int6 + 1;
        }
        int7 = int7 + 1;
    }
    array0[intArg2] = array0[int6];
    array0[int6] = int5;

    if (intArg1 < int6 - 1) {
        quicksort_enum(0, intArg1, int6 - 1, intArg3);
    }

    if (int6 + 1 < intArg2) {
        quicksort_enum(0, int6 + 1, intArg2, intArg3);
    }
}
