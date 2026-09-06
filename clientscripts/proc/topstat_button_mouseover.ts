/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,topstat_button_mouseover]

function topstat_button_mouseover(intArg0: component, intArg1: number): void {
    if (gameframe_skin_new() == true) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_8624), intArg0);
    } else {
        ifSetGraphic(Graphic.topstat_slot_roll_empty, intArg0);
    }
}
