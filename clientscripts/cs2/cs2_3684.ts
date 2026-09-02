/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3684

function cs2_3684(): void {
    if (varbit_music_v3_protect == 1 || varbit_cutscene_status == 1) {
        return;
    }
    cs2_39(Component.interface_187.component_187_11, Component.interface_187.component_187_17, "Click here to search for a song", 25, 189);
}
