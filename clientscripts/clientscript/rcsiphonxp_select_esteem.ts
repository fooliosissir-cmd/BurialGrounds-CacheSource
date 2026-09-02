/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcsiphonxp_select_esteem]

function rcsiphonxp_select_esteem(intArg0: number, intArg1: component): void {
    varc_rcsiphonxp_selected_item = intArg0;

    if (varc_rcsiphonxp_esteem_client < 1 && ccFind(intArg1, 0) == 1) {
        if (intArg0 == 0) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_0);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_0);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 2 && ccFind(intArg1, 1) == 1) {
        if (intArg0 == 1) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_1);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_1);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 3 && ccFind(intArg1, 2) == 1) {
        if (intArg0 == 2) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_2);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_2);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 4 && ccFind(intArg1, 3) == 1) {
        if (intArg0 == 3) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_3);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_3);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 5 && ccFind(intArg1, 4) == 1) {
        if (intArg0 == 4) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_4);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_4);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 6 && ccFind(intArg1, 5) == 1) {
        if (intArg0 == 5) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_5);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_5);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 7 && ccFind(intArg1, 6) == 1) {
        if (intArg0 == 6) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_6);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_6);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 8 && ccFind(intArg1, 7) == 1) {
        if (intArg0 == 7) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_7);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_7);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 9 && ccFind(intArg1, 8) == 1) {
        if (intArg0 == 8) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_8);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_8);
        }
    }

    if (varc_rcsiphonxp_esteem_client < 10 && ccFind(intArg1, 9) == 1) {
        if (intArg0 == 9) {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_tga_9);
        } else {
            ccSetGraphic(Graphic.aif_runecrafting_prestige_icons_disable_9);
        }
    }
}
