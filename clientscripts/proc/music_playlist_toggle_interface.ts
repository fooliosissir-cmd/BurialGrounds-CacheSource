/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,music_playlist_toggle_interface]

function proc_music_playlist_toggle_interface(): void {
    if (varc_music_playlist_toggle_varc == 1) {
        ifSetGraphic(Graphic.graphic_2432, Component.interface_187.component_187_13);
        proc_music_playlist_onload();
        ifSetHide(true, Component.interface_187.component_187_1);
        ifSetHide(true, Component.interface_187.component_187_2);
        ifSetHide(true, Component.interface_187.component_187_18);
        ifSetHide(true, Component.interface_187.component_187_19);
        ifSetHide(false, Component.interface_187.component_187_9);
        ifSetHide(false, Component.interface_187.component_187_11);
        ifSetHide(false, Component.interface_187.component_187_12);
        ifSetHide(false, Component.interface_187.component_187_14);
        music_search_close();
        if (varbit_playlist_0 == 32767) {
            ifSetHide(false, Component.interface_187.component_187_15);
        }
    } else {
        ifSetGraphic(Graphic.graphic_2431, Component.interface_187.component_187_13);
        ifSetHide(true, Component.interface_187.component_187_9);
        ifSetHide(true, Component.interface_187.component_187_11);
        ifSetHide(true, Component.interface_187.component_187_12);
        ifSetHide(true, Component.interface_187.component_187_14);
        ifSetHide(true, Component.interface_187.component_187_15);
        ifSetHide(true, Component.interface_187.component_187_19);
        ifSetHide(false, Component.interface_187.component_187_1);
        ifSetHide(false, Component.interface_187.component_187_2);
        ifSetHide(false, Component.interface_187.component_187_18);
    }
    varc_tooltip_built = 0;
}
