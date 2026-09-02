/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5509

function cs2_5509(intArg0: component, intArg1: component, intArg2: number): void {
    let int3: number = ifGetScrollHeight(intArg1);
    let int4: number = ifGetHeight(intArg0);
    let int5: number = int4 - 32;
    let int6: number = 0;

    if (int3 > 0) {
        int6 = int5 * int4 / int3;
    } else {
        int6 = int5;
    }

    if (int6 < 20) {
        int6 = 20;
    }

    if (ccFind(intArg0, 3) == 1) {
        ccSetSize(16, int6 - 10, 0, 0);
        cs2_5507(intArg0, intArg1, intArg2, true);
    }
}
