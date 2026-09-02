/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5119

function cs2_5119(intArg0: number): void {
    if (varc_player_kit_colour_client != intArg0) {
        soundVorbisVolume(6185, 1, 0, 200);
        varc_player_kit_colour_client = intArg0;
    }
    cs2_5121();
}
