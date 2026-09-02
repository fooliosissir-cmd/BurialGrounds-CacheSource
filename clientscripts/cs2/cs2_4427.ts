/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4427

function cs2_4427(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component): void {
    if (intArg0 != 1) {
        return;
    }

    if (varbit_option_friendchatcolour == intArg1) {
        return;
    }
    varbit_option_friendchatcolour = intArg1;
    soundSynth(Sound.sound_2266, 1, 0);
    cs2_2735(intArg2, intArg3, intArg4, intArg5, intArg6, intArg7);
}
