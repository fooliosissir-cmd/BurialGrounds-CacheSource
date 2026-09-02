/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5623

function cs2_5623(intArg0: component): void {
    let int1: number = 0;

    if (getWindowMode() == 1) {
        int1 = 1800;
    } else {
        int1 = 2 * (ifGetHeight(Component.fmc_torch.base) / 3);
    }

    switch (intArg0) {
        case Component.fmc_torch.n_tendril:
            ifSetPosition(ifGetWidth(Component.fmc_torch.base) / 2, 0 - ifGetHeight(intArg0), 0, 0, intArg0);
            break;
        case Component.fmc_torch.e_tendril:
            ifSetPosition(ifGetWidth(Component.fmc_torch.base), ifGetHeight(Component.fmc_torch.base) / 2, 0, 0, intArg0);
            break;
        case Component.fmc_torch.s_tendril:
            ifSetPosition(ifGetWidth(Component.fmc_torch.base) / 2, ifGetHeight(Component.fmc_torch.base), 0, 0, intArg0);
            break;
        case Component.fmc_torch.sw_tendril:
            ifSetPosition(0 - ifGetWidth(intArg0), ifGetHeight(Component.fmc_torch.base), 0, 0, intArg0);
            break;
        case Component.fmc_torch.w_tendril:
            ifSetPosition(0 - ifGetWidth(intArg0), ifGetHeight(Component.fmc_torch.base) / 2, 0, 0, intArg0);
            break;
        case Component.fmc_torch.nw_tendril:
            ifSetPosition(0 - ifGetWidth(intArg0), 0 - ifGetHeight(intArg0), 0, 0, intArg0);
            break;
    }
}
