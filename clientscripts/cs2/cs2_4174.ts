/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4174

function cs2_4174(intArg0: number): void {
    if (testBit(varbit_642, intArg0) == 1) {
        ccSetHide<1>(false);
    } else {
        ccSetHide<1>(true);
    }
}
