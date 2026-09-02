/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5620

function cs2_5620(intArg0: component, intArg1: component): void {
    let int2: number = 0;

    if (ifFind(intArg1) == 1) {
        ccSetOpCursor(1, Cursor.cursor_firemaking);
        if (getWindowMode() == 1) {
            int2 = 1800;
        } else {
            int2 = 2 * (ifGetHeight(Component.fmc_torch.base) / 3);
        }
        ccSetModelZoom(int2);
        ccSetModelAnim(15700);
        switch (intArg1) {
            case Component.fmc_torch.n_tendril:
                if (ccGetY() >= 0) {
                    ifSetOnTimer(noHook(""), intArg0);
                    return;
                }
                ccSetPosition(0, ccGetY() + 1, 1, 0);
                break;
            case Component.fmc_torch.e_tendril:
                if (ccGetX() <= ifGetWidth(Component.fmc_torch.base) - ccGetWidth()) {
                    ifSetOnTimer(noHook(""), intArg0);
                    return;
                }
                ccSetPosition(ccGetX() - 1, 0, 0, 1);
                break;
            case Component.fmc_torch.s_tendril:
                if (ccGetY() <= ifGetHeight(Component.fmc_torch.base) - ccGetHeight()) {
                    ifSetOnTimer(noHook(""), intArg0);
                    return;
                }
                ccSetPosition(0, ccGetY() - 1, 1, 0);
                break;
            case Component.fmc_torch.sw_tendril:
                if (ccGetY() <= ifGetHeight(Component.fmc_torch.base) - ccGetHeight()) {
                    ifSetOnTimer(noHook(""), intArg0);
                    return;
                }
                ccSetPosition(ccGetX() + 1, ccGetY() - 1, 0, 0);
                break;
            case Component.fmc_torch.w_tendril:
                if (ccGetX() >= ccGetWidth()) {
                    ifSetOnTimer(noHook(""), intArg0);
                    return;
                }
                ccSetPosition(ccGetX() + 1, 0, 0, 1);
                break;
            case Component.fmc_torch.nw_tendril:
                if (ccGetY() >= 0) {
                    ifSetOnTimer(noHook(""), intArg0);
                    return;
                }
                ccSetPosition(ccGetX() + 1, ccGetY() + 1, 0, 0);
                break;
        }
    }
}
