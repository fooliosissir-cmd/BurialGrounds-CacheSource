/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6445

function cs2_6445(intArg0: component, intArg1: boolean, intArg2: number): void {
    if (intArg1 == false) {
        ifSetOnTimer(hook(cs2_6449, "IIii", [event_com, intArg0, 0, intArg2]), Component.interface_1311.component_1311_134);
    } else {
        ifSetOnTimer(hook(cs2_6450, "IIii", [event_com, intArg0, 0, intArg2]), Component.interface_1311.component_1311_134);
    }
}
