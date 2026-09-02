/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6281

function cs2_6281(intArg0: number): void {
    if (varc_cruc_rewards_jingle_antispam > 0) {
        return;
    }

    switch (intArg0) {
        case 1:
            mes("Playing sound...");
            soundVorbisVolume(15746, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 315;
            break;
        case 2:
            mes("Playing sound...");
            soundVorbisVolume(15744, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 72;
            break;
        case 3:
            mes("Playing sound...");
            soundVorbisVolume(15739, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 140;
            break;
        case 4:
            mes("Playing sound...");
            soundVorbisVolume(15720, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 192;
            break;
        case 5:
            mes("Playing sound...");
            soundVorbisVolume(15730, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 140;
            break;
        case 6:
            mes("Playing sound...");
            soundVorbisVolume(15740, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 212;
            break;
        case 7:
            mes("Playing sound...");
            soundVorbisVolume(15738, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 244;
            break;
        case 8:
            mes("Playing sound...");
            soundVorbisVolume(15724, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 190;
            break;
        case 9:
            mes("Playing sound...");
            soundVorbisVolume(15745, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 190;
            break;
        case 10:
            mes("Playing sound...");
            soundVorbisVolume(15742, 1, 0, 255);
            varc_cruc_rewards_jingle_antispam = 145;
            break;
    }
    ifSetOnTimer(hook(cs2_6282, "", []), Component.cruc_rewards.jingle_play_1);
}
