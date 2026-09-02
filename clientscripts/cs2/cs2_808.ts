/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_808

function cs2_808(): void {
    ifSetHide(false, Component.interface_748.component_748_7);
    let int0: number = scale(varbit_lifepoints, cs2_2916(), 100);
    let int1: number = clientClock() % 32;

    if (int0 > 25) {
        varc_615 = 0;
        if (ifGetTrans(Component.interface_748.component_748_7) != 0) {
            ifSetTrans(0, Component.interface_748.component_748_7);
        } else {
            return;
        }
    } else {
        if (int1 == 1) {
            if (varc_615 <= 0) {
                varc_615 = clientClock();
            }
            if (clientClock() - varc_615 < 1500) {
                soundSynth(Sound.sound_5644, 1, 0);
            }
        }
        if (int1 < 8) {
            ifSetTrans(0, Component.interface_748.component_748_7);
        } else if (int1 < 16) {
            ifSetTrans(85, Component.interface_748.component_748_7);
        } else if (int1 < 24) {
            ifSetTrans(255, Component.interface_748.component_748_7);
        } else {
            ifSetTrans(85, Component.interface_748.component_748_7);
        }
    }
}
