/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4181

function cs2_4181(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        int2 = ccGetTrans() + 1;
        if (int2 >= 255) {
            ccDelete();
            return;
        }
        ccSetTrans(int2);
    }
}
