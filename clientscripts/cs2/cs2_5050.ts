/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5050

function cs2_5050(intArg0: number, intArg1: number, intArg2: boolean): void {
    intArg0 = intArg0 * intArg1;

    if (intArg2 == true) {
        ifSetScrollPos(ifGetScrollX(Component.interface_1111.component_1111_12), max(ifGetScrollY(Component.interface_1111.component_1111_12) + intArg0, 0), Component.interface_1111.component_1111_12);
    } else {
        ifSetScrollPos(max(ifGetScrollX(Component.interface_1111.component_1111_12) + intArg0, 0), ifGetScrollY(Component.interface_1111.component_1111_12), Component.interface_1111.component_1111_12);
    }
    cs2_5053(0, 0);
}
