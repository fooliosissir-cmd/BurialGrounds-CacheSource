/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,catcon_repair_puzzle_flip]

function catcon_repair_puzzle_flip(): void {
    soundSynth(Sound.sound_4501, 1, 0);

    if (varbit_catcon_selected_side == 0) {
        cs2_841(1);
    } else {
        cs2_841(0);
    }
}
