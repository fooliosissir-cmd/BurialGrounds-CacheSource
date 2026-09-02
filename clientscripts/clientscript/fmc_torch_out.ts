/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fmc_torch_out]

function fmc_torch_out(): void {
    let int0: number = ifGetTrans(Component.fmc_torch.black);

    if (int0 < 11) {
        ifSetTrans(10, Component.fmc_torch.black);
        ifSetTrans(20, Component.fmc_torch.fade);
        ifSetOnTimer(noHook(""), Component.fmc_torch.black);
        return;
    } else {
        ifSetTrans(int0 - 10, Component.fmc_torch.black);
        ifSetTrans((int0 - 10) / 2, Component.fmc_torch.fade);
    }
}
