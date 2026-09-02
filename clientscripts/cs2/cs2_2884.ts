/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2884

function cs2_2884(): void {
    if (varbit_music_v3_protect == 1 || varbit_cutscene_status == 1) {
        return;
    }

    if (varbit_playlist_random == 0) {
        cs2_39(Component.interface_187.component_187_14, Component.interface_187.component_187_17, "Shuffle on", 25, 189);
    } else {
        cs2_39(Component.interface_187.component_187_14, Component.interface_187.component_187_17, "Shuffle off", 25, 189);
    }
}
