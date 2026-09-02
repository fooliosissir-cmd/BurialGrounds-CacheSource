/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6484

function cs2_6484(intArg0: component): void {
    let int1: number = ifGetTrans(intArg0);

    if (int1 > 0) {
        int1 = max(0, int1 - 10);
        ifSetTrans(int1, intArg0);
    }
}
