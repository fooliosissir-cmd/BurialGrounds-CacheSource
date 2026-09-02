/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4208

function cs2_4208(intArg0: component, intArg1: number): void {
    if (intArg1 == 0) {
        ifSetTrans(0, intArg0);
    } else {
        ifSetTrans(255, intArg0);
    }
}
