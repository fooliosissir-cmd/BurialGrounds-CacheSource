/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5897

function cs2_5897(intArg0: number, intArg1: number): void {
    let int2: number = 0;

    if (intArg0 < 15 && intArg1 >= 15) {
        int2 = 1;
    } else if (intArg0 < 50 && intArg1 >= 50) {
        int2 = 1;
    } else if (intArg0 < 79 && intArg1 >= 79) {
        int2 = 1;
    } else if (intArg0 < 114 && intArg1 >= 114) {
        int2 = 1;
    } else if (intArg0 < 130 && intArg1 >= 130) {
        int2 = 1;
    } else if (intArg0 < 166 && intArg1 >= 166) {
        int2 = 1;
    } else if (intArg0 < 188 && intArg1 >= 188) {
        int2 = 1;
    } else if (intArg0 < 222 && intArg1 >= 222) {
        int2 = 1;
    } else if (intArg0 < 239 && intArg1 >= 239) {
        int2 = 1;
    } else if (intArg0 < 272 && intArg1 >= 272) {
        int2 = 1;
    } else if (intArg0 < 303 && intArg1 >= 303) {
        int2 = 1;
    } else if (intArg0 < 322 && intArg1 >= 322) {
        int2 = 1;
    } else if (intArg0 > 322 && intArg1 >= 0) {
        int2 = 1;
    } else {
        return;
    }

    if (int2 == 1 && scale_round(ifGet2dangle(Component.interface_1253.component_1253_83), 65535, 360) == 359) {
        ifSetOnTimer(hook(cs2_5895, "ii", [1, 0]), Component.interface_1253.component_1253_83);
        cs2_5896(1, 0);
    }
}
