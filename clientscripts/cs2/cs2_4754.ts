/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4754

function cs2_4754(intArg0: component, intArg1: number, intArg2: number): number {
    let int3: number = 0;

    if (ccFind(intArg0, 1) == 1) {
        int3 = ccGetHeight();
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
