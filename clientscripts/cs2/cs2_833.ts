/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_833

function cs2_833(intArg0: number): void {
    if (intArg0 < 80) {
        intArg0 = 80;
    }
    let int1: number = intArg0 / 2;

    if (int1 < 40) {
        int1 = 40;
    }
    ifSetTrans(intArg0, Component.fmc_darkness.black);
    ifSetTrans(int1, Component.fmc_darkness.fade);
}
