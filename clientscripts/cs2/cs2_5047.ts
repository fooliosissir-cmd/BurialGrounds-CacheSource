/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5047

function cs2_5047(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: number = intArg0 * (112 + 2 + 2);

    ifSetScrollSize(int5, int5, Component.interface_1111.component_1111_12);
    let int6: number = int5 - ifGetWidth(Component.interface_1111.component_1111_12);

    if (ifGetScrollX(Component.interface_1111.component_1111_12) > int6) {
        ifSetScrollPos(int6, ifGetScrollY(Component.interface_1111.component_1111_12), Component.interface_1111.component_1111_12);
    }

    if (ifGetScrollY(Component.interface_1111.component_1111_12) > int6) {
        ifSetScrollPos(ifGetScrollX(Component.interface_1111.component_1111_12), int6, Component.interface_1111.component_1111_12);
    }
    ifSetSize(int5, int5, 0, 0, Component.interface_1111.component_1111_13);
    ifSetSize(int5, int5, 0, 0, Component.interface_1111.component_1111_15);
    let int7: number = 0;
    let int8: number = intArg0 - 1;
    let int9: number = 0;
    let int10: number = intArg1;

    while (int10 < intArg2) {
        int9 = int5 - (int10 + 2 + 1) * intArg0;
        while (int7 < 112) {
            if (ccFind(Component.interface_1111.component_1111_13, int10 * 112 + int7) == 1) {
                ccSetSize(int8, int8, 0, 0);
                ccSetPosition((int7 + 2) * intArg0, int9, 0, 0);
                ccSetdragdeadzone(intArg0 / 2);
            }
            int7 = int7 + 1;
        }
        int7 = 0;
        int10 = int10 + 1;
    }

    if (intArg1 <= 0) {
        cs2_5053(intArg3, intArg4);
        int9 = intArg0 * 2 - 3;
        ifSetPosition(int9, int9, 0, 0, Component.interface_1111.component_1111_14);
        int9 = intArg0 * 112 + 5;
        ifSetSize(int9, int9, 0, 0, Component.interface_1111.component_1111_14);
    }
}
