/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6282

function cs2_6282(): void {
    varc_cruc_rewards_jingle_antispam = varc_cruc_rewards_jingle_antispam - 1;

    if (varc_cruc_rewards_jingle_antispam == 0) {
        ifSetOnTimer(noHook(""), Component.cruc_rewards.jingle_play_1);
    }
}
