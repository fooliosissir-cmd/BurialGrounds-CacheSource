/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_melee]

function clanwars_resynch_melee(): void {
    if (varc_clanwars_rulevarc_nomelee == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_121);
        ifSetTrans(0, Component.interface_791.component_791_120);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_121);
        ifSetTrans(225, Component.interface_791.component_791_120);
    }
    clanwars_updateside();
}
