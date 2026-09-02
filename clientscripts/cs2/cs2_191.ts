/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_191

function cs2_191(intArg0: component, intArg1: number, intArg2: number): number {
    let int3: number = 0;

    if (ccFind(intArg0, 3) == 1) {
        int3 = ccGetHeight();
    }

    if (ccFind(intArg0, 4) == 1) {
        int3 = int3 + 5;
    }

    if (ccFind(intArg0, 5) == 1) {
        int3 = int3 + 5;
    }
    let int4: number = ifGetHeight(intArg0) - int3;
    intArg1 = int4 * (intArg1 / int4);

    if (intArg2 == 0) {
        intArg1 = intArg1 + int4;
    } else {
        intArg1 = intArg1 - int4;
    }
    return intArg1;
}
