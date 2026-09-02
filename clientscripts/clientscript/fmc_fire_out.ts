/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fmc_fire_out]

function fmc_fire_out(intArg0: number): void {
    let int1: number = ifGetTrans(Component.fmc_darkness.black);

    if (int1 < 30 + (intArg0 - 1)) {
        ifSetTrans(30, Component.fmc_darkness.black);
        ifSetTrans(20, Component.fmc_darkness.fade);
        ifSetOnTimer(noHook(""), Component.fmc_darkness.black);
        return;
    } else {
        ifSetTrans(int1 - intArg0, Component.fmc_darkness.black);
        ifSetTrans((int1 - intArg0) / 2, Component.fmc_darkness.fade);
    }
}
