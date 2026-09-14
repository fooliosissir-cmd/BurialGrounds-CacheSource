/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5268

function cs2_5268(intArg0: number, strArg0: string, strArg1: string): void {
    let int1: number = ifGetNextSubId(Component.interface_1137.component_1137_109);
    let int2: number = int1 / 2 * 20;

    ccCreate(Component.interface_1137.component_1137_109, 4, int1);
    ccSetText(strArg0);
    strArg1 = append(strArg1, "<col=800000>" + textSwitch(intArg0, " Teams: Yes.", " Teams: No."));
    ccSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_1137.component_1137_6, strArg1, 25, 519]));
    ccSetSize(8100, 20, 2, 0);
    ccSetOnOp(hook(cs2_5267, "", []));

    if (int1 % 2 == 0) {
        ccSetPosition(2, int2, 0, 0);
    } else {
        ccSetPosition(2, int2, 2, 0);
    }
    ccSetTextFont(Graphic.p11_full);
    ccSetColour(colour(0x00FF00));
    ccSetTextShadow(true);
    ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    ccSetOnMouseLeave(hook(cs2_1949, "IiiI", [event_com, event_comsubid, colour(0x00FF00), Component.interface_1137.component_1137_6]));
    ccSetOp(1, "Select");

    if (int1 >= 10 && int1 % 2 == 0) {
        ifSetHide(false, Component.interface_1137.component_1137_110);
        ifSetSize(18, 2, 1, 1, Component.interface_1137.component_1137_109);
        ifSetScrollSize(0, int2 + 20, Component.interface_1137.component_1137_109);
        proc_scrollbar_vertical(Component.interface_1137.component_1137_110, Component.interface_1137.component_1137_109, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        scrollbar_resize(Component.interface_1137.component_1137_110, Component.interface_1137.component_1137_109, (varbit_cmtool_scenario - 1) / 2 * 20);
    }
}
