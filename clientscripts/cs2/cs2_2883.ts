/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2883

function cs2_2883(): void {
    if (varbit_music_v3_protect == 1 || varbit_cutscene_status == 1) {
        return;
    }
    cs2_39(Component.interface_187.component_187_12, Component.interface_187.component_187_17, "Clear playlist", 25, 189);
}
