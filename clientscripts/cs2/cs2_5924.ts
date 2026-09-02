/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5924

function cs2_5924(intArg0: component): void {
    let int1: number = 200;
    let int2: number = 6;
    let int3: number = ifGetWidth(intArg0);
    let int4: number = ifGetHeight(intArg0);
    let int5: number = min(int4 + int2, 200);

    ifSetSize(int3, int5, 0, 0, intArg0);

    if (int5 == 200) {
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, intArg0);
        ifSetHide(false, Component.interface_1253.component_1253_37);
        varc_1784 = 0;
    }
}
