/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1781

function cs2_1781(): void {
    let int0: number = 0;

    while (int0 <= 4) {
        if (ccFind(Component.interface_791.component_791_141, int0 * 4) == 1) {
            if (varc_clanwars_rulevarc_arenachoice == int0) {
                ccSetGraphic(Graphic.options_radio_buttons_2);
                clanwars_focuslayer(Component.interface_791.component_791_141, Component.interface_791.component_791_142, Component.interface_791.component_791_141, int0 * 4 + 3);
            } else if (mapMembers() == 0 && structParam(enumOp(type_int, type_struct, Enum.clanwars_arena_options, int0), Param.clanwars_arena_membersonly) == 1) {
                ccSetGraphic(Graphic.options_radio_buttons_1);
            } else {
                ccSetGraphic(Graphic.options_radio_buttons_0);
            }
        }
        int0 = int0 + 1;
    }
    clanwars_updateside();
}
