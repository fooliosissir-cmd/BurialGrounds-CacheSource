/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2023

function cs2_2023(intArg0: number, intArg1: number): void {
    if (intArg0 != 1) {
        return;
    }
    varbit_8095 = max(min(varbit_8095 + intArg1, varbit_8094), 0);
    cs2_2047();
    ifSetOnTimer(hook(cs2_2024, "i", [clientClock() + 15]), Component.interface_905.component_905_28);
    ifSetHide(false, Component.interface_905.component_905_28);
}
