/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5054

function cs2_5054(intArg0: number, intArg1: number): void {
    intArg0 = intArg0 - ifGetScrollX(Component.interface_1111.component_1111_12);
    intArg1 = intArg1 - ifGetScrollY(Component.interface_1111.component_1111_12);

    if (intArg0 < 10) {
        cs2_5050(-10, 1, false);
    } else if (intArg0 > ifGetWidth(Component.interface_1111.component_1111_12) - (varc_hw10_cutscene + 10)) {
        cs2_5050(10, 1, false);
    }

    if (intArg1 < 10) {
        cs2_5050(-10, 1, true);
    } else if (intArg1 > ifGetHeight(Component.interface_1111.component_1111_12) - (varc_hw10_cutscene + 10)) {
        cs2_5050(10, 1, true);
    }
}
