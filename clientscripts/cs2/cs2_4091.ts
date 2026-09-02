/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4091

function cs2_4091(intArg0: number): void {
    let int1: number = ifGetTrans(Component.fmc_darkness.black);

    if (int1 > 255 - (intArg0 + 1)) {
        ifSetTrans(255, Component.fmc_darkness.black);
        ifSetTrans(125, Component.fmc_darkness.fade);
        ifSetOnTimer(noHook(""), Component.fmc_darkness.black);
        return;
    } else {
        ifSetTrans(int1 + intArg0, Component.fmc_darkness.black);
        ifSetTrans((int1 + intArg0) / 2, Component.fmc_darkness.fade);
    }
}
