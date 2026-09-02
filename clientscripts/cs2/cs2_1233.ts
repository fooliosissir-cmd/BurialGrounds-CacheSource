/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1233

function cs2_1233(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: component, intArg5: component): void {
    let int6: number = 0;
    let int7: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 == intArg0) {
            if (ccFind<1>(intArg2, intArg3) == 1) {
                [int6, int7] = [ccGetX(), ccGetY()];
                ccSetPosition(ccGetX<1>(), ccGetY<1>(), 0, 0);
                ccSetPosition<1>(int6, int7, 0, 0);
            }
            return;
        }
        if (intArg2 == intArg4 || intArg2 == intArg5) {
            ccSetHide(true);
            return;
        }
        ccSetPosition(ccGetX(), ccGetY(), 0, 0);
    }
}
