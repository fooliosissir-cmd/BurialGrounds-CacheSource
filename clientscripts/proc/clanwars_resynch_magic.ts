/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_resynch_magic]

function clanwars_resynch_magic(): void {
    switch (varc_clanwars_rulevarc_nomagic) {
        case 0:
            ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_127);
            ifSetHide(false, Component.interface_791.component_791_125);
            ifSetHide(false, Component.interface_791.component_791_126);
            ifSetHide(false, Component.interface_791.component_791_124);
            ifSetHide(false, Component.interface_791.component_791_123);
            ifSetTrans(0, Component.interface_791.component_791_122);
            break;
        case 1:
            ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_127);
            ifSetHide(true, Component.interface_791.component_791_125);
            ifSetHide(true, Component.interface_791.component_791_126);
            ifSetHide(false, Component.interface_791.component_791_124);
            ifSetHide(false, Component.interface_791.component_791_123);
            if (mapMembers() == 1) {
                ifSetTrans(225, Component.interface_791.component_791_122);
            } else {
                ifSetTrans(0, Component.interface_791.component_791_122);
            }
            break;
        case 2:
            ifSetGraphic(Graphic.options_radio_buttons_2, Component.interface_791.component_791_127);
            ifSetHide(true, Component.interface_791.component_791_125);
            ifSetHide(true, Component.interface_791.component_791_126);
            ifSetHide(true, Component.interface_791.component_791_124);
            ifSetHide(false, Component.interface_791.component_791_123);
            ifSetTrans(225, Component.interface_791.component_791_122);
            break;
        case 3:
            ifSetGraphic(Graphic.options_radio_buttons_1, Component.interface_791.component_791_127);
            ifSetHide(true, Component.interface_791.component_791_125);
            ifSetHide(true, Component.interface_791.component_791_126);
            ifSetHide(true, Component.interface_791.component_791_124);
            ifSetHide(true, Component.interface_791.component_791_123);
            ifSetTrans(225, Component.interface_791.component_791_122);
            break;
    }
    clanwars_updateside();
}
