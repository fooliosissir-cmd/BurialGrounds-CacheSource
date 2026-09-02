/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4059

function cs2_4059(intArg0: component, intArg1: component): void {
    let int2: number = 5;

    if (ifGetY(intArg0) >= 0) {
        ifSetPosition(0, 0, 1, 0, intArg0);
        varc_1432 = 0;
        ifSetOp(1, "Select", Component.interface_1058.component_1058_2);
        ifSetOp(1, "Select", Component.interface_1058.component_1058_3);
        ifSetOnTimer(noHook(""), intArg1);
    } else {
        ifSetPosition(0, ifGetY(intArg0) + int2, 1, 0, intArg0);
    }
}
