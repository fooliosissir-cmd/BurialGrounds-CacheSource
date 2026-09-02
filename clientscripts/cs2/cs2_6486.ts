/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6486

function cs2_6486(intArg0: component): void {
    let int1: number = ifGetTrans(intArg0);

    if (int1 < 255) {
        int1 = min(255, int1 + 10);
        ifSetTrans(int1, intArg0);
    }
}
