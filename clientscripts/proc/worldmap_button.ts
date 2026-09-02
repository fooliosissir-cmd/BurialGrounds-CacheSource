/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_button]

function proc_worldmap_button(intArg0: component): void {
    let int1: graphic = Graphic.toplevel_worldmap_button_1;

    if (varbit_worldmap_modifier == 2) {
        ifSetGraphic(Graphic.aif_minimap_citadel_icon_0, intArg0);
        hookMouseEnter(hook(cs2_5115, "Ii", [event_com, 1]), intArg0);
        hookMouseExit(hook(cs2_5115, "Ii", [event_com, 0]), intArg0);
        ifClearops(intArg0);
        ifSetOp(1, "Citadel Interface", intArg0);
    } else if (varbit_worldmap_modifier == 1) {
        if (getWindowMode() >= 2) {
            int1 = Graphic.aif_toplevel_worldmap_btn_3;
        } else {
            int1 = Graphic.toplevel_worldmap_button_3;
        }
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
        if (getWindowMode() >= 2) {
            int1 = Graphic.aif_toplevel_worldmap_btn_2;
        } else {
            int1 = Graphic.toplevel_worldmap_button_2;
        }
        ifSetGraphic(int1, intArg0);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
        ifClearops(intArg0);
        if (varbit_rden2_minutes_left > 0) {
            ifSetOp(1, "Factory Layout", intArg0);
        } else {
            ifSetOp(1, "Daemonheim Map", intArg0);
        }
    } else {
        if (getWindowMode() >= 2) {
            int1 = Graphic.aif_toplevel_worldmap_btn_0;
            ifSetGraphic(int1, intArg0);
            hookMouseExit(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
            int1 = Graphic.aif_toplevel_worldmap_btn_1;
            hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
        } else {
            ifSetGraphic(Graphic.toplevel_worldmap_button_0, intArg0);
            hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
            int1 = Graphic.toplevel_worldmap_button_0;
            hookMouseExit(hook(graphic_swapper, "Id", [event_com, int1]), intArg0);
        }
        ifClearops(intArg0);
        ifSetOp(1, "World Map", intArg0);
        if (varp_1159 != -1 && varp_1159 != 0) {
            ifSetOp(2, "Clear your marker", intArg0);
        }
    }
}
