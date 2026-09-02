/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2355

function cs2_2355(intArg0: boolean, intArg1: number): void {
    varc_92 = intArg0;

    if (intArg0 == true) {
        ifSetOnTimer(hook(cs2_2356, "i", [intArg1]), Component.interface_916.component_916_26);
        cs2_2192(0, intArg1);
    } else {
        ifSetOnTimer(hook(cs2_2356, "i", [0]), Component.interface_916.component_916_26);
        cs2_2192(1, intArg1);
    }
}
