/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1773

function cs2_1773(): void {
    if (varc_clanwars_rulevarc_itemloss == false) {
        ifSetColour(colour(0x000000), Component.interface_791.component_791_111);
        ifSetColour(colour(0xFF981F), Component.interface_791.component_791_112);
        ifSetHide(true, Component.interface_791.component_791_114);
        ifSetColour(colour(0xFF981F), Component.interface_791.component_791_115);
        ifSetText("...you keep" + "<br>" + "your items.", Component.interface_791.component_791_115);
    } else {
        ifSetColour(colour(0xFF0000), Component.interface_791.component_791_111);
        ifSetColour(colour(0xFFFF00), Component.interface_791.component_791_112);
        ifSetHide(false, Component.interface_791.component_791_114);
        ifSetColour(colour(0xFFFF00), Component.interface_791.component_791_115);
        ifSetText("...you DROP ALL your items.", Component.interface_791.component_791_115);
    }
    clanwars_updateside();
}
