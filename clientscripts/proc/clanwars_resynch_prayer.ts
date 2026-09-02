/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_prayer]

function clanwars_resynch_prayer(): void {
    if (varc_clanwars_rulevarc_noprayer == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_131);
        ifSetTrans(0, Component.interface_791.component_791_130);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_131);
        ifSetTrans(225, Component.interface_791.component_791_130);
    }
    clanwars_updateside();
}
