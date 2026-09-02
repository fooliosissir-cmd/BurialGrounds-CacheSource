/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xp_reward_confirm_invalid]

function xp_reward_confirm_invalid(): void {
    mes("You must choose a skill first.");
    soundSynth(Sound.sound_2277, 1, 0);
}
