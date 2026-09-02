/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_ranged]

function clanwars_resynch_ranged(): void {
    if (varc_clanwars_rulevarc_noranged == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_129);
        ifSetTrans(0, Component.interface_791.component_791_128);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_129);
        ifSetTrans(225, Component.interface_791.component_791_128);
    }
    clanwars_updateside();
}
