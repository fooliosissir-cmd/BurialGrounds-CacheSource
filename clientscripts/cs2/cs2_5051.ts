/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5051

function cs2_5051(intArg0: component, intArg1: number, intArg2: boolean, intArg3: boolean): void {
    let int4: number = ifGetWidth(Component.interface_1111.component_1111_12);

    if (ccFind(intArg0, 3) == 1) {
        if (intArg3 == true) {
            if (ccFind<1>(intArg0, 4) == 1) {
                ccSetPosition<1>(0, intArg1 + 16, 1, 0);
            }
            if (ccFind<1>(intArg0, 5) == 1) {
                ccSetPosition<1>(0, intArg1 + 16 + ccGetHeight() - ccGetHeight<1>(), 1, 0);
            }
            ifSetScrollPos(ifGetScrollX(Component.interface_1111.component_1111_12), scale(intArg1, max(int4 - 32 - ccGetHeight(), 1), ifGetScrollHeight(Component.interface_1111.component_1111_12) - int4), Component.interface_1111.component_1111_12);
        } else {
            if (ccFind<1>(intArg0, 4) == 1) {
                ccSetPosition<1>(intArg1 + 16, 0, 0, 1);
            }
            if (ccFind<1>(intArg0, 5) == 1) {
                ccSetPosition<1>(intArg1 + 16 + ccGetWidth() - ccGetWidth<1>(), 0, 0, 1);
            }
            ifSetScrollPos(scale(intArg1, max(int4 - 32 - ccGetWidth(), 1), ifGetScrollWidth(Component.interface_1111.component_1111_12) - int4), ifGetScrollY(Component.interface_1111.component_1111_12), Component.interface_1111.component_1111_12);
        }
    }

    if (intArg2 == true) {
        cs2_5053(0, 0);
    }
}
