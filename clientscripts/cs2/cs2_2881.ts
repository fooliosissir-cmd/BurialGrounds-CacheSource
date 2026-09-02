/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2881

function cs2_2881(): void {
    if (varbit_music_v3_protect == 1 || varbit_cutscene_status == 1) {
        return;
    }

    if (varc_music_playlist_toggle_varc == 1) {
        cs2_39(Component.interface_187.component_187_13, Component.interface_187.component_187_17, "Click here to access full song list", 25, 189);
    } else {
        cs2_39(Component.interface_187.component_187_13, Component.interface_187.component_187_17, "Click here to access playlist", 25, 189);
    }
}
