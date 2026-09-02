/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5259

function cs2_5259(intArg0: number): void {
    let int1: component = Component.interface_1133.component_1133_2;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 126;
    let int5: number = 99;

    if (intArg0 == 0) {
        ifSetSize(ifGetWidth(int1), 0, 0, 0, int1);
    }

    if (intArg0 < 61) {
        int2 = scale(intArg0, 61, 100);
        int3 = scale(int4, 100, int2);
        if (int3 == 0) {
            ifSetSize(ifGetWidth(int1), 1, 0, 0, int1);
        } else {
            ifSetOnTimer(hook(cs2_5260, "i", [int3]), int1);
        }
    } else {
        intArg0 = intArg0 - 60;
        int2 = scale(intArg0, 140, 100);
        int3 = int4 + scale(int5, 100, int2);
        if (ifGetHide(int1) == 1) {
            mes("Hidden.");
        }
        ifSetOnTimer(hook(cs2_5260, "i", [int3]), int1);
    }
}
