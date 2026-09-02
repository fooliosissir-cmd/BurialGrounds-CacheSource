/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5896

function cs2_5896(intArg0: number, intArg1: number): void {
    let int2: component = Component.interface_1253.component_1253_83;

    if (intArg1 < 0) {
        intArg1 = intArg1 + 1;
        ifSetOnTimer(hook(cs2_5895, "ii", [intArg0, intArg1]), int2);
        return;
    }
    ifSetOnTimer(hook(cs2_5895, "ii", [intArg0, 0]), int2);
    let int3: number = scale_round(ifGet2dangle(int2), 65535, 360);
    let int4: number = 0;

    if (int3 == 359) {
        if (intArg0 == 2) {
            ifSetOnTimer(noHook(""), int2);
            return;
        } else {
            int4 = 355;
        }
    } else if (int3 == 357) {
        if (intArg0 == 2) {
            int4 = 359;
        } else {
            int4 = 355;
        }
    } else if (int3 == 355) {
        if (intArg0 == 2) {
            int4 = 357;
        } else {
            int4 = 354;
        }
    } else if (int3 == 354) {
        if (intArg0 == 2) {
            int4 = 355;
        } else {
            int4 = 353;
        }
    } else if (int3 == 353) {
        int4 = 354;
        intArg0 = 2;
        ifSetOnTimer(hook(cs2_5895, "ii", [intArg0, 0]), Component.interface_1253.component_1253_83);
    }
    let int5: number = scale_round(int4, 360, 65535);
    ifSet2dangle(int5, int2);
}
