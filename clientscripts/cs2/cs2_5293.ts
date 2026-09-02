/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5293

function cs2_5293(intArg0: number, intArg1: number, intArg2: boolean): void {
    if (intArg0 != 1) {
        return;
    }
    soundVorbisVolume(6185, 1, 0, 200);

    if (intArg2 == true) {
        varbit_clan_keep_theatre_map_col_varp = intArg1;
    } else {
        varbit_clan_keep_theatre_backdrop_varp = intArg1;
    }
    clan_keep_theatre_options_room_selected_tempvars();
}
