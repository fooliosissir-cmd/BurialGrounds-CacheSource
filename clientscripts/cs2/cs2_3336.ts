/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3336

function cs2_3336(intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = ifGet2dangle(Component.interface_1216.component_1216_9);

    int4 = int4 - 800;

    if (int4 < 0) {
        int4 = 65000;
    }
    ifSet2dangle(int4, Component.interface_1216.component_1216_9);
    let int5: number = max(1, intArg1 - intArg0);
    let int6: number = 255 / int5 + 1;

    if (ifGetHide(Component.interface_1216.component_1216_1) == 1 && detailGetToolkit() != 0) {
        ifSetHide(false, Component.interface_1216.component_1216_1);
    }

    if (ifGetHide(Component.interface_1216.component_1216_17) == 1 && detailGetToolkit() != 0) {
        ifSetHide(false, Component.interface_1216.component_1216_17);
    }

    if (clientClock() < intArg1 && clientClock() > intArg0) {
        ifSetTrans(min(175, ifGetTrans(Component.interface_1216.component_1216_15) + int6), Component.interface_1216.component_1216_15);
        ifSetTrans(max(0, ifGetTrans(Component.interface_1216.component_1216_12) - int6), Component.interface_1216.component_1216_12);
        ifSetTrans(max(0, ifGetTrans(Component.interface_1216.component_1216_12) - int6), Component.interface_1216.component_1216_14);
        ifSetTrans(max(0, ifGetTrans(Component.interface_1216.component_1216_12) - int6), Component.interface_1216.component_1216_13);
        return;
    } else if (clientClock() < intArg2 && clientClock() >= intArg1) {
        if (clientClock() >= intArg1 + 25) {
            ifSetHide(true, Component.interface_1216.component_1216_1);
            ifSetHide(true, Component.interface_1216.component_1216_2);
            ifSetHide(true, Component.interface_1216.component_1216_17);
        }
        if (clientClock() == intArg1) {
            levelup_unlocks(intArg3, intArg2 - intArg1);
        }
    } else if (clientClock() >= intArg2) {
        if (ifGetHide(Component.interface_1216.component_1216_1) == 0) {
            ifSetHide(true, Component.interface_1216.component_1216_1);
        }
        if (ifGetHide(Component.interface_1216.component_1216_2) == 0) {
            ifSetHide(true, Component.interface_1216.component_1216_2);
        }
        if (ifGetHide(Component.interface_1216.component_1216_17) == 0) {
            ifSetHide(true, Component.interface_1216.component_1216_17);
        }
        if (ifGetTrans(Component.interface_1216.component_1216_8) < 255) {
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_15) + 10), Component.interface_1216.component_1216_15);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_5);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_6);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_4);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_7);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_12);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_14);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_13);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_9);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1216.component_1216_8) + 10), Component.interface_1216.component_1216_8);
        } else {
            ccDeleteAll(Component.interface_1216.component_1216_3);
            ccDeleteAll(Component.interface_1216.component_1216_0);
            ifSetOnTimer(noHook(""), Component.interface_1216.component_1216_16);
            ifSetHide(true, Component.interface_1216.component_1216_11);
            if (varbit_xpdisplay_dont_show_popups == 0) {
                ifSetHide(false, Component.interface_1213.component_1213_2);
            }
        }
    }
}
