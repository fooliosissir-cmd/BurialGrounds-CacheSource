/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,castlewars_misc_button]

function castlewars_misc_button(): void {
    if (varc_1279 != 2) {
        soundSynth(Sound.sound_9445, 1, 0);
    }
    varc_1279 = 2;
    ifSetHide(true, Component.interface_60.component_60_45);
    ifSetHide(true, Component.interface_60.component_60_46);
    ifSetHide(false, Component.interface_60.component_60_87);
    ifSetHide(true, Component.interface_60.component_60_20);
    ifSetHide(true, Component.interface_60.component_60_17);
    ifSetHide(false, Component.interface_60.component_60_14);
}
