/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1045

function cs2_1045(intArg0: number, intArg1: component, intArg2: number): void {
    if (ccFind(intArg1, intArg0) == 1) {
        varc_128 = intArg2;
        if (ccFind<1>(intArg1, 0) == 1) {
            ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
            ccSetColour<1>(colour(0x577E45));
            ccSetfill<1>(true);
        }
    }
}
