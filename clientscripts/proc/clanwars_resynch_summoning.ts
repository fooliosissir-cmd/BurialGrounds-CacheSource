/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_summoning]

function clanwars_resynch_summoning(): void {
    if (varc_clanwars_rulevarc_nosummoning == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_133);
        ifSetTrans(0, Component.interface_791.component_791_132);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_133);
        ifSetTrans(225, Component.interface_791.component_791_132);
    }
    clanwars_updateside();
}
