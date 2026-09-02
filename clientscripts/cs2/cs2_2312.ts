/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2312

function cs2_2312(): void {
    let int0: number = 0;

    while (int0 < 31) {
        ccCreate(Component.interface_137.component_137_74, 4, int0);
        ccSetSize(46, 20, 0, 0);
        ccSetPosition(4, int0 * 20, 0, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetText(tostring(int0 + 1));
        ccSetColour(colour(0xFFFFFF));
        ccSetOp(1, "Select");
        ccSetOnOpt(hook(cs2_2316, "i", [int0]));
        ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x00FF00)]));
        ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        int0 = int0 + 1;
    }
    ifSetScrollSize(0, int0 * 20, Component.interface_137.component_137_74);
    proc_scrollbar_vertical(Component.interface_137.component_137_75, Component.interface_137.component_137_74, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    int0 = 0;

    while (int0 < 12) {
        ccCreate(Component.interface_137.component_137_77, 4, int0);
        ccSetSize(158, 20, 0, 0);
        ccSetPosition(4, int0 * 20, 0, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetText(enumOp(type_int, type_string, Enum.dob_months, int0));
        ccSetColour(colour(0xFFFFFF));
        ccSetOp(1, "Select");
        ccSetOnOpt(hook(cs2_2334, "i", [int0]));
        ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x00FF00)]));
        ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        int0 = int0 + 1;
    }
    ifSetScrollSize(0, int0 * 20, Component.interface_137.component_137_77);
    proc_scrollbar_vertical(Component.interface_137.component_137_78, Component.interface_137.component_137_77, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetHide(true, Component.interface_137.component_137_74);
    ifSetHide(true, Component.interface_137.component_137_73);
    ifSetHide(true, Component.interface_137.component_137_75);
    ifSetHide(true, Component.interface_137.component_137_77);
    ifSetHide(true, Component.interface_137.component_137_76);
    ifSetHide(true, Component.interface_137.component_137_78);
    ifSetHide(true, Component.interface_137.component_137_80);
    ifSetHide(true, Component.interface_137.component_137_81);
    ifSetHide(true, Component.interface_137.component_137_79);
    ifSetHide(true, Component.interface_137.component_137_67);
    ifSetHide(true, Component.interface_137.component_137_68);
    ifSetHide(true, Component.interface_137.component_137_69);
    ifSetHide(false, Component.interface_137.component_137_70);
    ifSetHide(false, Component.interface_137.component_137_71);
    ifSetHide(false, Component.interface_137.component_137_72);
}
