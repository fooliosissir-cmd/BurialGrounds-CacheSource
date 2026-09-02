/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2873

function cs2_2873(): void {
    if (varbit_playlist_mode == 0) {
        ifSetGraphic(Graphic.graphic_2434, Component.interface_187.component_187_11);
    } else {
        ifSetGraphic(Graphic.graphic_2433, Component.interface_187.component_187_11);
    }
    varc_tooltip_built = 0;
}
