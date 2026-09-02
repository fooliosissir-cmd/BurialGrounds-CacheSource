/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6308

function cs2_6308(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = max(1, intArg1 - intArg0);
    let int4: number = 255 / int3 + 1;

    if (ifGetHide(Component.interface_1301.component_1301_7) == 1) {
        ifSetHide(false, Component.interface_1301.component_1301_7);
    }

    if (ifGetHide(Component.interface_1301.component_1301_9) == 1) {
        ifSetHide(false, Component.interface_1301.component_1301_9);
    } else if (clientClock() < intArg2 && clientClock() >= intArg1) {
        if (clientClock() >= intArg1 + 25) {
            ifSetHide(true, Component.interface_1301.component_1301_7);
            ifSetHide(true, Component.interface_1301.component_1301_8);
            ifSetHide(true, Component.interface_1301.component_1301_9);
        }
    } else if (clientClock() >= intArg2) {
        if (ifGetHide(Component.interface_1301.component_1301_7) == 0) {
            ifSetHide(true, Component.interface_1301.component_1301_7);
        }
        if (ifGetHide(Component.interface_1301.component_1301_8) == 0) {
            ifSetHide(true, Component.interface_1301.component_1301_8);
        }
        if (ifGetHide(Component.interface_1301.component_1301_9) == 0) {
            ifSetHide(true, Component.interface_1301.component_1301_9);
        }
        if (ifGetTrans(Component.interface_1301.component_1301_0) < 255) {
            ifSetTrans(min(255, ifGetTrans(Component.interface_1301.component_1301_0) + 10), Component.interface_1301.component_1301_0);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1301.component_1301_1) + 10), Component.interface_1301.component_1301_1);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1301.component_1301_2) + 10), Component.interface_1301.component_1301_2);
            ifSetTrans(min(255, ifGetTrans(Component.interface_1301.component_1301_5) + 10), Component.interface_1301.component_1301_5);
        } else {
            ccDeleteAll(Component.interface_1301.component_1301_3);
            ifSetOnTimer(noHook(""), Component.interface_1301.component_1301_6);
            ifSetHide(true, Component.interface_1301.component_1301_4);
        }
    }
}
