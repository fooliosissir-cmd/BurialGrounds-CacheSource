/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,music_playlist_update_mode]

function music_playlist_update_mode(): void {
    if (varbit_playlist_mode == 1) {
        ifSetGraphic(Graphic.graphic_2434, Component.interface_187.component_187_11);
    } else {
        ifSetGraphic(Graphic.graphic_2433, Component.interface_187.component_187_11);
    }
    varc_tooltip_built = 0;
}
