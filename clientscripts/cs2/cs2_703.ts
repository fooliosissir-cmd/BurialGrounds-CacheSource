/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_703

function cs2_703(intArg0: component, intArg1: number, intArg2: component, intArg3: number): void {
    let int4: number = 0;
    let int5: number = 0;

    if (ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg2, intArg3) == 1) {
        int4 = ccGetX();
        int5 = ccGetY();
        ccSetPosition(ccGetX<1>(), ccGetY<1>(), 0, 0);
        ccSetPosition<1>(int4, int5, 0, 0);
    }
}
