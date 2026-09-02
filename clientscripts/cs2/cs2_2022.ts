/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2022

function cs2_2022(intArg0: number, intArg1: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (intArg1 <= -1) {
        ifSetText("", Component.interface_916.component_916_22);
        return;
    }
    varbit_8095 = min(intArg1, varbit_8094);
    cs2_2047();
    ifSetOnTimer(hook(cs2_2024, "i", [clientClock() + 15]), Component.interface_905.component_905_28);
    ifSetHide(false, Component.interface_905.component_905_28);
}
