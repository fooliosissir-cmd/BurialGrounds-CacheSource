/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah5_collar_rotate_right]

function mah5_collar_rotate_right(): void {
    soundVorbisRate(7513, 1, 0, 200, randomSoundPitch(20, 20));

    if (ifGet2dangle(Component.interface_555.component_555_48) == 0) {
        ifSet2dangle(49152, Component.interface_555.component_555_49);
        ifSet2dangle(49152, Component.interface_555.component_555_48);
        return;
    }

    if (ifGet2dangle(Component.interface_555.component_555_48) == 49152) {
        ifSet2dangle(32768, Component.interface_555.component_555_49);
        ifSet2dangle(32768, Component.interface_555.component_555_48);
        return;
    }

    if (ifGet2dangle(Component.interface_555.component_555_48) == 32768) {
        ifSet2dangle(16384, Component.interface_555.component_555_49);
        ifSet2dangle(16384, Component.interface_555.component_555_48);
        return;
    }

    if (ifGet2dangle(Component.interface_555.component_555_48) == 16384) {
        ifSet2dangle(0, Component.interface_555.component_555_49);
        ifSet2dangle(0, Component.interface_555.component_555_48);
        return;
    }
}
