/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2192

function cs2_2192(intArg0: number, intArg1: number): void {
    if (intArg0 == 1) {
        ifSetOnClick(hook(cs2_2355, "1i", [true, intArg1]), Component.interface_916.component_916_26);
        ifSethflip(false, Component.interface_916.component_916_27);
    } else {
        ifSetOnClick(hook(cs2_2355, "1i", [false, intArg1]), Component.interface_916.component_916_26);
        ifSethflip(true, Component.interface_916.component_916_27);
    }
}
