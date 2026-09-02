/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5498

function cs2_5498(intArg0: number, intArg1: component): void {
    if (ccFind(intArg1, intArg0) == 1 && ccGetTrans() < 255) {
        if (ccGetTrans() + 5 > 255) {
            ccSetTrans(255);
        } else {
            ccSetTrans(ccGetTrans() + 5);
        }
    }
}
