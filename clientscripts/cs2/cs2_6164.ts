/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6164

function cs2_6164(intArg0: component, intArg1: number): void {
    if (intArg1 < 1) {
        intArg1 = intArg1 + 1;
        ifSetOnTimer(hook(cs2_6164, "Ii", [Component.interface_1273.component_1273_13, intArg1]), Component.interface_1273.component_1273_13);
    } else {
        ifSetOnTimer(noHook(""), intArg0);
        cs2_6165(0);
    }
}
