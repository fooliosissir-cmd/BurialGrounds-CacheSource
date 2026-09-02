/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5286

function cs2_5286(): void {
    soundVorbisRate(7536, 1, 0, 200, randomSoundPitch(20, 20));

    if (ifGetHide(Component.interface_555.component_555_48) == 1) {
        ifSetHide(false, Component.interface_555.component_555_48);
        ifSetHide(true, Component.interface_555.component_555_49);
    } else {
        ifSetHide(false, Component.interface_555.component_555_49);
        ifSetHide(true, Component.interface_555.component_555_48);
    }
}
