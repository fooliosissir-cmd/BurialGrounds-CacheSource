/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1736

function cs2_1736(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (clientClock() % 40 > 20) {
            ccSetTrans(0);
        } else {
            ccSetTrans(255);
        }
    }
}
