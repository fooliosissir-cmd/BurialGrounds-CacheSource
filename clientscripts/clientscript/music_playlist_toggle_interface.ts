/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,music_playlist_toggle_interface]

function clientscript_music_playlist_toggle_interface(intArg0: number): void {
    if (intArg0 == 1) {
        if (varc_music_playlist_toggle_varc == 1) {
            varc_music_playlist_toggle_varc = 0;
        } else {
            varc_music_playlist_toggle_varc = 1;
        }
    }
    proc_music_playlist_toggle_interface();
}
