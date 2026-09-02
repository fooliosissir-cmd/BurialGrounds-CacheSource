/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2853

function cs2_2853(intArg0: component, intArg1: number): void {
    let int2: number = clientClock() - intArg1;
    let int3: number = 0;

    if (int2 <= 30) {
        if (int2 == 5) {
            soundSynth(Sound.sound_2871, 1, 0);
        }
        int3 = 11 * int2 - 325;
        ifSetPosition(int3, 5, 0, 0, Component.interface_475.component_475_8);
        return;
    }

    if (int2 < 170) {
        return;
    }

    if (int2 < 201) {
        if (int2 == 5) {
            soundSynth(Sound.sound_2871, 1, 0);
        }
        int3 = 5 - 11 * (int2 - 170);
        ifSetPosition(int3, 5, 0, 0, Component.interface_475.component_475_8);
        return;
    }
    ifSetOnTimer(noHook(""), intArg0);
}
