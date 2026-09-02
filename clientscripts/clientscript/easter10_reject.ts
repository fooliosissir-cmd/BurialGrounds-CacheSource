/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter10_reject]

function easter10_reject(): void {
    if (varp_easter10_conveyorstatus == 2) {
        if (varc_easter10_pushbarstatus == 0) {
            soundSynth(Sound.sound_8731, 1, 0);
        }
        varc_easter10_pushbarstatus = 1;
        ifSetOnTimer(hook(cs2_2214, "", []), Component.easter10_nuts.content);
    } else {
        mes("There is nothing to push off!");
    }
}
