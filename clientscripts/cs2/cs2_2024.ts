/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2024

function cs2_2024(intArg0: number): void {
    if (clientClock() < intArg0) {
        return;
    }
    ifSetOnTimer(noHook(""), Component.interface_905.component_905_28);
    ifSetHide(true, Component.interface_905.component_905_28);
}
