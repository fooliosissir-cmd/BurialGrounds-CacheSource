/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dropdown_sort]

function dropdown_sort(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    defineArray(0, type_int, intArg1);
    let int3: number = 0;
    let int4: number = 5;

    while (int2 <= intArg1) {
        if (ccFind(intArg0, int2) == 1 && stringLength(ccGetText()) > 0) {
            array0[int3] = int2;
            int3 = int3 + 1;
        }
        int2 = int2 + 1;
    }

    if (int3 > 1) {
        cs2_4424(0, intArg0, 0, int3 - 1);
    }
    int2 = 0;

    while (int2 < int3) {
        if (ccFind(intArg0, array0[int2]) == 1) {
            ccSetPosition(5, int4, 0, 0);
            int4 = int4 + ccGetHeight();
        }
        int2 = int2 + 1;
    }
}
