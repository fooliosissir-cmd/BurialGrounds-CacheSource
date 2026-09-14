/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,music_v3_refresh]

function music_v3_refresh(): void {
    deltooltip_action(Component.interface_187.component_187_17);
    varc_tooltip_time = 0;
    ifSetOnTimer(noHook(""), Component.interface_187.component_187_18);
    let int0: number = -1;

    if (ifFind(Component.interface_187.component_187_4) == 1) {
        int0 = ccParam(Param.param_1133);
    }
    let int1: number = 0;
    let int2: number = 0;
    let str0: string = "";
    let int3: number = stringLength(varcstr_196);

    if (int3 <= 0 && varc_meslayermode != 14) {
        ifSetGraphic(Graphic.graphic_3245, Component.interface_187.component_187_18);
    }
    let int4: number = 5;

    while (int0 != -1) {
        if (ccFind(Component.interface_187.component_187_1, int0 * 2) == 1 && ccFind<1>(Component.interface_187.component_187_1, int0 * 2 + 1) == 1) {
            ccClearops();
            ccClearops<1>();
            str0 = lowercase(ccGetText());
            if (stringLength(str0) > 0) {
                if (music_getvar(int0) == 1) {
                    if (int3 == 0 || stringIndexofString(str0, varcstr_196, 0) != -1) {
                        ccSetOp(2, "Unlock hint");
                        music_playlist_ops(int0);
                        ccSetHide(false);
                        ccSetHide<1>(false);
                        ccSetPosition(15, int4, 0, 0);
                        ccSetPosition<1>(2, int4 + 1, 0, 0);
                        int4 = int4 + 15;
                    } else {
                        ccSetHide(true);
                        ccSetHide<1>(true);
                    }
                    int1 = int1 + 1;
                } else {
                    if (int3 == 0 || stringIndexofString(str0, varcstr_196, 0) != -1) {
                        ccSetOp(2, "Unlock hint");
                        ccSetColour(colour(0xFF0000));
                        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFF0000)]));
                        ccSetOnOp<1>(noHook(""));
                        ccSetHide(false);
                        ccSetPosition(15, int4, 0, 0);
                        ccSetPosition<1>(2, int4 + 1, 0, 0);
                        int4 = int4 + 15;
                    } else {
                        ccSetHide(true);
                    }
                    ccSetHide<1>(true);
                }
                int2 = int2 + 1;
            }
            int0 = ccParam(Param.param_1133);
        } else {
            int0 = -1;
        }
    }
    ifSetScrollSize(167, 5 + int4, Component.interface_187.component_187_1);
    scrollbar_resize(Component.interface_187.component_187_2, Component.interface_187.component_187_1, varc_88);
    ifSetText("Unlocked:" + "<br>" + tostring(int1) + " / " + tostring(int2), Component.interface_187.component_187_5);

    if (int4 == 5) {
        ifSetHide(false, Component.interface_187.component_187_19);
    } else {
        ifSetHide(true, Component.interface_187.component_187_19);
    }
}
