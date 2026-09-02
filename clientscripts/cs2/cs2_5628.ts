/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5628

function cs2_5628(intArg0: number, intArg1: number): void {
    if (ifGetWidth(Component.fmc_torch.base) != intArg0) {
        cs2_5622();
    } else if (ifGetHeight(Component.fmc_torch.base) != intArg1) {
        cs2_5622();
    }
}
