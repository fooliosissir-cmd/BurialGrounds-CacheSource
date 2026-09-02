/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5469

function cs2_5469(intArg0: number): void {
    let int1: number = intArg0 + 1;

    if (int1 >= splineLength(0) - 1) {
        ifSetOnCamFinished(noHook(""), Component.interface_1161.component_1161_0);
        camReset();
    } else {
        camMovealong(0, int1, 400, 400, 1, int1);
        ifSetOnCamFinished(hook(cs2_5469, "i", [int1]), Component.interface_1161.component_1161_0);
    }
}
