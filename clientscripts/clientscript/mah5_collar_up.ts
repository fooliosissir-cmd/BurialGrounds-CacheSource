/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah5_collar_up]

function mah5_collar_up(): void {
    if (ifGetY(Component.interface_555.component_555_48) > -86) {
        soundVorbisRate(7557, 1, 0, 200, randomSoundPitch(20, 20));
        ifSetPosition(ifGetX(Component.interface_555.component_555_48), ifGetY(Component.interface_555.component_555_48) - 10, 0, 0, Component.interface_555.component_555_48);
        ifSetPosition(ifGetX(Component.interface_555.component_555_49), ifGetY(Component.interface_555.component_555_49) - 10, 0, 0, Component.interface_555.component_555_49);
    }
}
