/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3402

function cs2_3402(intArg0: number, intArg1: boolean): void {
    if (intArg1 == true) {
        if (intArg0 < 0) {
            intArg0 = 0;
        } else {
            intArg0 = intArg0 - intArg0 % 15;
        }
    }
    cs2_3403(intArg0, intArg1);
}
