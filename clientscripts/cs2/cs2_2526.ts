/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2526

function cs2_2526(intArg0: component): void {
    if (varbit_mob_spoils_5_selected == 1) {
        ifSetGraphic(Graphic.radio_buttons_1, intArg0);
    } else {
        ifSetGraphic(Graphic.radio_buttons_0, intArg0);
    }
}
