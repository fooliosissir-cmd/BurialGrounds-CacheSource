/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1772

function cs2_1772(): void {
    if (varc_clanwars_rulevarc_nostragglers == false) {
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_105);
        ifSetGraphic(Graphic.options_radio_buttons_0, Component.interface_791.component_791_108);
    } else {
        ifSetGraphic(Graphic.options_radio_buttons_0, Component.interface_791.component_791_105);
        ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_108);
    }
    clanwars_updateside();
}
