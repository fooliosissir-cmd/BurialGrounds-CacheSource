/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5474

function cs2_5474(intArg0: number, intArg1: number): void {
    let int2: number = intArg0 + 1;

    if (int2 >= splineLength(0) - 1) {
        ifSetOnCamFinished(noHook(""), Component.interface_1172.component_1172_9);
    } else {
        camMovealong(0, int2, intArg1, intArg1, 1, int2);
        ifSetOnCamFinished(hook(cs2_5474, "ii", [int2, intArg1]), Component.interface_1172.component_1172_9);
    }
}
