/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,afr_newspaper_open]

function afr_newspaper_open(): void {
    let int0: number = clientClock();

    ifSetOnTimer(hook(cs2_827, "i", [int0]), Component.afr_newspaper_interface.title);
    soundSynth(Sound.sound_4437, 1, 58);
}
