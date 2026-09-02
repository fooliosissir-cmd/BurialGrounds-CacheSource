/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,bankpin_cancel]

function bankpin_cancel(): void {
    cs2_675();
    mes("Cancelled.");
    soundSynth(Sound.sound_1042, 1, 0);
}
