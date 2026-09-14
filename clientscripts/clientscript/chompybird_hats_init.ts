/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chompybird_hats_init]

function chompybird_hats_init(intArg0: component, intArg1: component): void {
    ccDeleteAll(intArg0);
    let int2: number = 0;
    let int3: number = (ifGetWidth(intArg0) - 125 * 3) / 2;
    let int4: number = enumGetoutputcount(Enum.chompybird_hats);
    let int5: number = 0;
    let int6: number = 0;

    while (int2 < int4) {
        ccCreate(intArg0, 5, int2);
        ccSetSize(125 - 4, 125 - 4, 0, 0);
        if (int5 == 0) {
            ccSetPosition(2, int6 + 2, 0, 0);
            int5 = 1;
        } else if (int5 == 1) {
            ccSetPosition(0, int6 + 2, 1, 0);
            int5 = 2;
        } else {
            ccSetPosition(2, int6 + 2, 2, 0);
            int5 = 0;
            int6 = int6 + 125 + int3;
        }
        ccSetGraphic(Graphic.tradebacking);
        ccSettiling(true);
        int2 = int2 + 1;
    }

    if (int5 == 0) {
        int6 = max(int6 - int3, 0);
    }
    ifSetScrollSize(0, int6, intArg0);
    proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    let int7: obj = -1;
    let str0: string = "";
    let str1: string = "";
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 125 - 18;
    int2 = 0;

    while (int2 < int4) {
        int7 = enumOp(type_int, type_obj, Enum.chompybird_hats, int2);
        if (int7 != -1 && ccFind(intArg0, int2) == 1) {
            [str0, str1] = [ocParam(int7, Param.param_1367), ocParam(int7, Param.param_1368)];
            int3 = ocParam(int7, Param.param_1366);
            [int5, int6] = [ccGetX() - 2, ccGetY() - 2];
            int8 = int5 + 125 - 9;
            int9 = int6 + 125 - 9;
            ccCreate<1>(intArg0, 6, ifGetNextSubId(intArg0));
            ccSetSize<1>(75, 75, 0, 0);
            ccSetPosition<1>(int5 + 25, int6 + 20, 0, 0);
            ccSetObjectNonum<1>(int7, 1);
            ccCreate<1>(intArg0, 4, ifGetNextSubId(intArg0));
            ccSetSize<1>(125, 20, 0, 0);
            ccSetPosition<1>(int5, int6 + 5, 0, 0);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetTextAlign<1>(1, 1, 0);
            ccSetColour<1>(colour(0xFF981F));
            ccSetTextShadow<1>(true);
            ccSetText<1>(str0);
            ccCreate<1>(intArg0, 4, ifGetNextSubId(intArg0));
            ccSetSize<1>(125, 20, 0, 0);
            ccSetPosition<1>(int5, int6 + 125 - 25, 0, 0);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetTextAlign<1>(1, 1, 0);
            ccSetColour<1>(colour(0xFF981F));
            ccSetTextShadow<1>(true);
            cs2_4229(int3, str1);
            ccSetOnVarTransmit<1>(hook(cs2_4228, "IiisY", [event_com, event_comsubid, int3, str1], [294]));
            ccSetOnInvTransmit<1>(hook(cs2_4228, "IiisY", [event_com, event_comsubid, int3, str1], [93, 94]));
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(9, 9, 0, 0);
            ccSetPosition<1>(int5, int6, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_913);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(9, 9, 0, 0);
            ccSetPosition<1>(int8, int6, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_914);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(9, 9, 0, 0);
            ccSetPosition<1>(int5, int9, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_915);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(9, 9, 0, 0);
            ccSetPosition<1>(int8, int9, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_916);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(9, int10, 0, 0);
            ccSetPosition<1>(int5, int6 + 9, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_917);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(int10, 9, 0, 0);
            ccSetPosition<1>(int5 + 9, int6, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_918);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(9, int10, 0, 0);
            ccSetPosition<1>(int8, int6 + 9, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_919);
            ccCreate<1>(intArg0, 5, ifGetNextSubId(intArg0));
            ccSetSize<1>(int10, 9, 0, 0);
            ccSetPosition<1>(int5 + 9, int9, 0, 0);
            ccSetGraphic<1>(Graphic.graphic_920);
            ccSetOp(1, "Claim");
            ccSetOp(10, "Examine");
            str0 = cs2_2332(str0, "<br>", " ");
            ccSetOpBase("<col=ff9040>" + str0);
            ccSetOnMouseOver(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, Graphic.graphic_897]));
            ccSetOnMouseLeave(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, Graphic.tradebacking]));
        }
        int2 = int2 + 1;
    }
}
