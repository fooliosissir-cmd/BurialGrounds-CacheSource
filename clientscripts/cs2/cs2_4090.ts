/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4090

function cs2_4090(intArg0: number, intArg1: number): void {
    if (intArg0 == 1) {
        ifSetOnTimer(hook(cs2_4091, "i", [intArg1]), Component.fmc_darkness.black);
    } else {
        ifSetOnTimer(hook(fmc_fire_out, "i", [intArg1]), Component.fmc_darkness.black);
    }
}
