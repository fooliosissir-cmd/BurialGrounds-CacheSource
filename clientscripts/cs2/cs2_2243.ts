/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2243

function cs2_2243(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number): void {
    ifSetText(tostring(intArg6), Component.interface_935.component_935_80);
    ifSetText(tostring(intArg7), Component.interface_935.component_935_85);
    ifSetText(tostring(intArg8 / 100) + "." + tostring(intArg8 % 100), Component.interface_935.component_935_101);
    ifSetOnTimer(hook(cs2_2244, "iiiiiiiiiiii", [0, intArg0, intArg1, 0, intArg2, intArg3, 0, intArg4, intArg5, intArg6, intArg7, intArg8]), Component.interface_935.component_935_0);
}
