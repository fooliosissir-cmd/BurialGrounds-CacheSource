/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2744

function cs2_2744(): void {
    let int0: number = 0;

    while (int0 < 31) {
        ccCreate(Component.interface_204.component_204_86, 4, int0);
        ccSetSize(46, 20, 0, 0);
        ccSetPosition(4, int0 * 20, 0, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetText(tostring(int0 + 1));
        ccSetColour(colour(0xFFFFFF));
        ccSetOp(1, "Select");
        ccSetOnOp(hook(cs2_2748, "i", [int0]));
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFF3000)]));
        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        int0 = int0 + 1;
    }
    ifSetScrollSize(0, int0 * 20, Component.interface_204.component_204_86);
    proc_scrollbar_vertical(Component.interface_204.component_204_87, Component.interface_204.component_204_86, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    int0 = 0;

    while (int0 < 12) {
        ccCreate(Component.interface_204.component_204_98, 4, int0);
        ccSetSize(158, 20, 0, 0);
        ccSetPosition(4, int0 * 20, 0, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetText(enumOp(type_int, type_string, Enum.dob_months, int0));
        ccSetColour(colour(0xFFFFFF));
        ccSetOp(1, "Select");
        ccSetOnOp(hook(cs2_2749, "i", [int0]));
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFF3000)]));
        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        int0 = int0 + 1;
    }
    ifSetScrollSize(0, int0 * 20, Component.interface_204.component_204_98);
    proc_scrollbar_vertical(Component.interface_204.component_204_99, Component.interface_204.component_204_98, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    int0 = 0;

    while (int0 < 90) {
        ccCreate(Component.interface_204.component_204_110, 4, int0);
        ccSetSize(70, 20, 0, 0);
        ccSetPosition(6, int0 * 20 + 1, 0, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetText(tostring(2009 - int0));
        ccSetColour(colour(0xFFFFFF));
        ccSetOp(1, "Select");
        ccSetOnOp(hook(cs2_2750, "i", [int0]));
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFF3000)]));
        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        int0 = int0 + 1;
    }
    ifSetScrollSize(0, int0 * 20, Component.interface_204.component_204_110);
    proc_scrollbar_vertical(Component.interface_204.component_204_111, Component.interface_204.component_204_110, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetHide(true, Component.interface_204.component_204_86);
    ifSetHide(true, Component.interface_204.component_204_77);
    ifSetHide(true, Component.interface_204.component_204_87);
    ifSetHide(true, Component.interface_204.component_204_98);
    ifSetHide(true, Component.interface_204.component_204_89);
    ifSetHide(true, Component.interface_204.component_204_99);
    ifSetHide(true, Component.interface_204.component_204_110);
    ifSetHide(true, Component.interface_204.component_204_111);
    ifSetHide(true, Component.interface_204.component_204_101);
    ifSetHide(true, Component.interface_204.component_204_26);
    ifSetHide(true, Component.interface_204.component_204_27);
    ifSetHide(true, Component.interface_204.component_204_28);
    ifSetHide(false, Component.interface_204.component_204_29);
    ifSetHide(false, Component.interface_204.component_204_45);
    ifSetHide(false, Component.interface_204.component_204_61);
    ifSetHide(true, Component.interface_204.component_204_113);
}
