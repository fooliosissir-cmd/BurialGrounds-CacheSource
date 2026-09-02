/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5885

function cs2_5885(intArg0: number, intArg1: number): void {
    let int2: component = Component.interface_1253.component_1253_82;
    let int3: number = ifGet2dangle(int2);
    let int4: number = scale_round(int3, 65535, 360);

    if (int4 >= intArg0 && int4 <= intArg1) {
        ifSetOnTimer(hook(cs2_5883, "iiii", [1, 0, 0, int4]), Component.interface_1253.component_1253_82);
        ifSetOnTimer(noHook(""), Component.interface_1253.component_1253_52);
    } else if (int4 + 360 >= intArg0 && int4 + 360 <= intArg1) {
        ifSetOnTimer(hook(cs2_5883, "iiii", [1, 0, 0, int4]), Component.interface_1253.component_1253_82);
        ifSetOnTimer(noHook(""), Component.interface_1253.component_1253_52);
    }
}
