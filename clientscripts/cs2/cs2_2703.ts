/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2703

function cs2_2703(intArg0: number, intArg1: number, intArg2: number, intArg3: boolean, intArg4: boolean): void {
    let int5: number = intArg0 - clientClock();

    if (int5 <= 0) {
        cs2_2705(false, intArg1, intArg2, 1, intArg3, intArg4);
        return;
    }
    let int6: number = getWindowMode();

    if (testBit(intArg1, 1) == 1 && int6 != 3) {
        cs2_2705(false, intArg1, intArg2, 1, intArg3, intArg4);
        return;
    }
    let int7: component = Component.interface_746.component_746_35;

    if (intArg2 == 1) {
        if (int6 == 1) {
            int7 = Component.interface_548.component_548_46;
        }
        if (ifHasSub(int7) == 0) {
            cs2_2701(intArg1, intArg3, intArg4);
        }
        ifSetText("Reverting in: " + tostring(int5 / 50), Component.interface_883.component_883_16);
    } else if (intArg2 == 2) {
        ifSetText("Reverting in: " + tostring(int5 / 50), Component.interface_906.component_906_141);
    } else {
        ifSetText("Reverting in: " + tostring(int5 / 50), Component.interface_744.component_744_54);
    }
}
