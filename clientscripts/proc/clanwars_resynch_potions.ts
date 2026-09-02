/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_potions]

function clanwars_resynch_potions(): void {
    if (varc_clanwars_rulevarc_nopotions == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_137);
        ifSetTrans(0, Component.interface_791.component_791_136);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_137);
        ifSetTrans(225, Component.interface_791.component_791_136);
    }
    clanwars_updateside();
}
