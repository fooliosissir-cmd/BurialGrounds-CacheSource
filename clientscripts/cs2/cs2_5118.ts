/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5118

function cs2_5118(intArg0: component): void {
    cs2_4534(Component.interface_1119.component_1119_3);
    cs2_4534(Component.interface_1119.component_1119_7);
    varc_player_kit_colour_client = -1;
    let str0: string = "";
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 126 + 1;

    while (int2 <= int3) {
        ccCreate(Component.interface_1119.component_1119_11, 3, ifGetNextSubId(Component.interface_1119.component_1119_11));
        ccSetSize(0, 14, 1, 0);
        ccSetPosition(0, int1, 1, 0);
        ccSetTrans(255);
        ccCreate<1>(Component.interface_1119.component_1119_11, 5, ifGetNextSubId(Component.interface_1119.component_1119_11));
        ccSetSize<1>(12, 12, 0, 0);
        ccSetPosition<1>(5, int1 + 1, 0, 0);
        str0 = enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, int2);
        if (stringLength(str0) > 0) {
            ccCreate<1>(Component.interface_1119.component_1119_11, 4, ifGetNextSubId(Component.interface_1119.component_1119_11));
            ccSetSize<1>(22, 14, 1, 0);
            ccSetPosition<1>(0, int1, 2, 0);
            ccSetTextAlign<1>(0, 1, 0);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetTextShadow<1>(true);
            ccSetText<1>(str0);
            ccSetOp(1, str0);
            ccSetOnOp(hook(cs2_5119, "i", [int2]));
            int1 = int1 + ccGetHeight();
        } else {
            ccSetHide(true);
            ccSetHide<1>(true);
            ccCreate<1>(Component.interface_1119.component_1119_11, 4, ifGetNextSubId(Component.interface_1119.component_1119_11));
            ccSetHide<1>(true);
        }
        int2 = int2 + 1;
    }

    if (int1 > ifGetHeight(Component.interface_1119.component_1119_11)) {
        ifSetScrollSize(0, int1, Component.interface_1119.component_1119_11);
    } else {
        ifSetScrollSize(0, 0, Component.interface_1119.component_1119_11);
    }
    ifSetScrollPos(0, 0, Component.interface_1119.component_1119_11);
    proc_scrollbar_vertical(Component.interface_1119.component_1119_12, Component.interface_1119.component_1119_11, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
    cs2_5121();
    ifSetOnVarTransmit(hook(cs2_5120, "Y", [], [1734]), intArg0);
    cs2_5124();
    ifSetOnVarcTransmit(hook(cs2_5123, "Y", [], [696]), intArg0);
}
