/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5053

function cs2_5053(intArg0: number, intArg1: number): void {
    ifSetScrollPos(ifGetScrollX(Component.interface_1111.component_1111_12) + intArg0, ifGetScrollY(Component.interface_1111.component_1111_12) + intArg1, Component.interface_1111.component_1111_12);
    let int2: number = ifGetScrollWidth(Component.interface_1111.component_1111_12);
    let int3: number = ifGetWidth(Component.interface_1111.component_1111_12);
    let int4: number = int3 - 32;
    let int5: number = min(max(scale(int3, int2, int4), 10), int4);
    let int6: number = scale(ifGetScrollY(Component.interface_1111.component_1111_12), max(int2 - int3, 1), int4 - int5);
    let int7: number = scale(ifGetScrollX(Component.interface_1111.component_1111_12), max(int2 - int3, 1), int4 - int5);
    int6 = max(min(int6, int4 - int5), 0) + 16;
    int7 = max(min(int7, int4 - int5), 0) + 16;

    if (ccFind(Component.interface_1111.component_1111_16, 3) == 1 && ccFind<1>(Component.interface_1111.component_1111_17, 3) == 1) {
        ccSetSize(0, int5, 1, 0);
        ccSetSize<1>(int5, 0, 0, 1);
        ccSetPosition(0, int6, 1, 0);
        ccSetPosition<1>(int7, 0, 0, 1);
    }

    if (ccFind(Component.interface_1111.component_1111_16, 4) == 1 && ccFind<1>(Component.interface_1111.component_1111_17, 4) == 1) {
        ccSetPosition(0, int6, 1, 0);
        ccSetPosition<1>(int7, 0, 0, 1);
    }

    if (ccFind(Component.interface_1111.component_1111_16, 5) == 1 && ccFind<1>(Component.interface_1111.component_1111_17, 5) == 1) {
        ccSetPosition(0, int6 + int5 - ccGetHeight(), 1, 0);
        ccSetPosition<1>(int7 + int5 - ccGetWidth<1>(), 0, 0, 1);
    }
}
