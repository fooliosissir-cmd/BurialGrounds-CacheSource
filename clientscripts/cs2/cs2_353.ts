/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_353

function cs2_353(intArg0: boolean): void {
    soundSynth(Sound.sound_9824, 1, 0);

    if (intArg0 == true && varbit_playerdesign4_force_player_to_modify_further == 1) {
        varbit_8247 = 1;
        ifSetHide(false, Component.interface_1028.component_1028_138);
    }
    cs2_386(intArg0);
}
