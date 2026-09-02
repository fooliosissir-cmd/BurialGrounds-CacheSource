/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah5_collar_left]

function mah5_collar_left(): void {
    if (ifGetX(Component.interface_555.component_555_48) > 29) {
        soundVorbisRate(7557, 1, 0, 200, randomSoundPitch(20, 20));
        ifSetPosition(ifGetX(Component.interface_555.component_555_48) - 10, ifGetY(Component.interface_555.component_555_48), 0, 0, Component.interface_555.component_555_48);
        ifSetPosition(ifGetX(Component.interface_555.component_555_49) - 10, ifGetY(Component.interface_555.component_555_49), 0, 0, Component.interface_555.component_555_49);
    }
}
