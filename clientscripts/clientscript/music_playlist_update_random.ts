/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,music_playlist_update_random]

function music_playlist_update_random(): void {
    if (varbit_playlist_random == 1) {
        ifSetGraphic(Graphic.graphic_2437, Component.interface_187.component_187_14);
    } else {
        ifSetGraphic(Graphic.graphic_2436, Component.interface_187.component_187_14);
    }
    varc_tooltip_built = 0;
}
