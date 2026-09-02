/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,bankpin_button]

function bankpin_button(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }
    varbit_bankpin_counter = min(varbit_bankpin_counter + 1, 3);
    soundSynth(Sound.sound_1041, 1, 0);
    bankpin_shuffle(1);
}
