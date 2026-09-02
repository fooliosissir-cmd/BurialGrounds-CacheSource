/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5281

function cs2_5281(): void {
    soundVorbisRate(7536, 1, 0, 200, randomSoundPitch(20, 20));

    if (ifGetHide(Component.interface_1141.component_1141_3) == 1) {
        ifSetHide(false, Component.interface_1141.component_1141_3);
        ifSetHide(true, Component.interface_1141.component_1141_4);
    } else {
        ifSetHide(true, Component.interface_1141.component_1141_3);
        ifSetHide(false, Component.interface_1141.component_1141_4);
    }
}
