/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5121

function cs2_5121(): void {
    ccDeleteAll(Component.interface_1119.component_1119_16);
    let int0: number = 0;
    let int1: number = 126 + 1;
    let int2: graphic = -1;
    let int3: graphic = -1;

    while (int0 <= int1) {
        if (int0 > varbit_clan_meetings_lastknownrank) {
            if (ccFind(Component.interface_1119.component_1119_11, int0 * 3) == 1 && ccGetHide() == 0) {
                ccClearscripthooks();
                if (ccFind<1>(Component.interface_1119.component_1119_11, int0 * 3 + 1) == 1) {
                    if (varc_player_kit_colour_client == int0) {
                        ccSetGraphic<1>(Graphic.aif_checkbox_small_2);
                    } else {
                        ccSetGraphic<1>(Graphic.aif_checkbox_small_6);
                    }
                }
                if (ccFind<1>(Component.interface_1119.component_1119_11, int0 * 3 + 2) == 1) {
                    ccSetColour<1>(colour(0x7F7F7F));
                }
            }
        } else if (varc_player_kit_colour_client == int0) {
            int2 = Graphic.aif_checkbox_small_1;
            int3 = Graphic.aif_checkbox_small_0;
            if (ccFind(Component.interface_1119.component_1119_11, int0 * 3) == 1 && ccGetHide() == 0) {
                ccSetOnMouseOver(hook(cs2_5122, "Iidi", [event_com, event_comsubid, int2, colour(0xFFFFFF)]));
                ccSetOnMouseLeave(hook(cs2_5122, "Iidi", [event_com, event_comsubid, int3, colour(0xDFDFCF)]));
                if (ccFind<1>(Component.interface_1119.component_1119_11, int0 * 3 + 1) == 1) {
                    ccSetGraphic<1>(int3);
                }
                if (ccFind<1>(Component.interface_1119.component_1119_11, int0 * 3 + 2) == 1) {
                    ccSetColour<1>(colour(0xDFDFCF));
                }
            }
        } else {
            int2 = Graphic.aif_checkbox_small_5;
            int3 = Graphic.aif_checkbox_small_4;
            if (ccFind(Component.interface_1119.component_1119_11, int0 * 3) == 1 && ccGetHide() == 0) {
                ccSetOnMouseOver(hook(cs2_5122, "Iidi", [event_com, event_comsubid, int2, colour(0xFFFFFF)]));
                ccSetOnMouseLeave(hook(cs2_5122, "Iidi", [event_com, event_comsubid, int3, colour(0xCFBFAF)]));
                if (ccFind<1>(Component.interface_1119.component_1119_11, int0 * 3 + 1) == 1) {
                    ccSetGraphic<1>(int3);
                }
                if (ccFind<1>(Component.interface_1119.component_1119_11, int0 * 3 + 2) == 1) {
                    ccSetColour<1>(colour(0xCFBFAF));
                }
            }
        }
        if (int0 <= varc_player_kit_colour_client) {
            ccCreate(Component.interface_1119.component_1119_16, 3, int0);
            if (int0 == varc_player_kit_colour_client) {
                ccSetSize(0, 0, 1, 1);
                ccSetPosition(0, 0, 1, 1);
                ccSetTrans(255);
                ccSetOp(1, "Confirm");
            } else {
                ccSetHide(true);
            }
        }
        int0 = int0 + 1;
    }

    if (varc_player_kit_colour_client >= 0) {
        ifSetHide(true, Component.interface_1119.component_1119_19);
    } else {
        ifSetHide(false, Component.interface_1119.component_1119_19);
    }
}
