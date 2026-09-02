/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_food]

function clanwars_resynch_food(): void {
    if (varc_clanwars_rulevarc_nofood == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_135);
        ifSetTrans(0, Component.interface_791.component_791_134);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_135);
        ifSetTrans(225, Component.interface_791.component_791_134);
    }
    clanwars_updateside();
}
