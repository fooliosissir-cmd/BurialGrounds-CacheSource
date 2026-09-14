/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_828

function cs2_828(): void {
    proc_music_playlist_toggle_interface();
    defineArray(0, type_int, 1099 + 1);
    let int0: number = 0;

    if (varc_89 == 0 || varc_89 == -1) {
        varcstr_196 = "";
        varc_89 = 1;
    }

    while (int0 <= 1099) {
        array0[int0] = int0;
        ccCreate(Component.interface_187.component_187_1, 4, int0 * 2);
        ccCreate(Component.interface_187.component_187_1, 5, int0 * 2 + 1);
        int0 = int0 + 1;
    }
    cs2_520(0, 0, 1099, Enum.enum_1347);
    ifSetParamInt(Param.param_1133, -1, Component.interface_187.component_187_4);
    int0 = 0;
    let int1: number = 0;
    let int2: number = 0;

    while (int1 <= 1099) {
        int0 = array0[int1];
        if (ccFind(Component.interface_187.component_187_1, int0 * 2) == 1 && ccFind<1>(Component.interface_187.component_187_1, int0 * 2 + 1) == 1) {
            if (enumOp(type_int, type_midi, Enum.enum_1351, int0) != 147 && enumOp(type_int, type_int, Enum.enum_1350, int0) == 0) {
                ccSetTextAlign(0, 1, 0);
                ccSetText(enumString(Enum.enum_1345, int0));
                ccSetSize(150, 15, 0, 0);
                ccSetOpBase(enumString(Enum.enum_1345, int0));
                ccSetOpBase<1>(enumString(Enum.enum_1345, int0));
                ccSetTextShadow(false);
                ccSetTextFont(Graphic.p11_full);
                ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
                ccSetSize<1>(12, 12, 0, 0);
                if (int2 == 0) {
                    ifSetParamInt(Param.param_1133, int0, Component.interface_187.component_187_4);
                    int2 = 1;
                }
            }
            if (int1 < 1099) {
                ccSetParamInt(Param.param_1133, array0[int1 + 1]);
            }
        }
        int1 = int1 + 1;
    }
    proc_scrollbar_vertical(Component.interface_187.component_187_2, Component.interface_187.component_187_1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    music_v3_refresh();
}
