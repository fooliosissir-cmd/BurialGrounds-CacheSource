/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,topstat_button_mouseover]

function topstat_button_mouseover(intArg0: component, intArg1: number): void {
    if (getWindowMode() >= 2) {
        ifSetGraphic(Graphic.graphic_8624, intArg0);
    } else {
        ifSetGraphic(Graphic.topstat_slot_roll_empty, intArg0);
    }
}
