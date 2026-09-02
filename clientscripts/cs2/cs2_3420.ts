/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3420

function cs2_3420(): void {
    if (varc_1279 != 1) {
        soundSynth(Sound.sound_9445, 1, 0);
    }
    varc_1279 = 1;
    ifSetHide(true, Component.interface_60.component_60_45);
    ifSetHide(false, Component.interface_60.component_60_46);
    ifSetHide(true, Component.interface_60.component_60_87);
    ifSetHide(true, Component.interface_60.component_60_20);
    ifSetHide(false, Component.interface_60.component_60_17);
    ifSetHide(true, Component.interface_60.component_60_14);
}
