/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4095

function cs2_4095(): void {
    let int0: number = ifGetTrans(Component.fmc_darkness.black);

    if (int0 > 75) {
        ifSetTrans(80, Component.fmc_darkness.black);
        ifSetTrans(40, Component.fmc_darkness.fade);
        ifSetOnTimer(noHook(""), Component.fmc_darkness.black);
        return;
    } else {
        ifSetTrans(int0 + 4, Component.fmc_darkness.black);
        ifSetTrans((int0 + 4) / 2, Component.fmc_darkness.fade);
    }
}
