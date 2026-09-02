/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5069

function cs2_5069(intArg0: Enum, intArg1: component, intArg2: number, intArg3: number): number {
    let int4: number = min(enumGetoutputcount(intArg0), 256);
    let int5: number = 0;
    let int6: number = 0;

    while (int5 < int4) {
        ccCreate(intArg1, 3, ifGetNextSubId(intArg1));
        ccSetSize(0, 14, 1, 0);
        ccSetPosition(0, int6, 1, 0);
        ccSetTrans(255);
        ccSetOp(1, "Select");
        ccCreate<1>(intArg1, 5, ifGetNextSubId(intArg1));
        ccSetSize<1>(12, 12, 0, 0);
        ccSetPosition<1>(0, int6 + 1, 0, 0);
        if (intArg3 == int5) {
            ccSetGraphic<1>(Graphic.aif_checkbox_small_2_0);
        } else {
            ccSetGraphic<1>(Graphic.aif_checkbox_small_2_4);
        }
        ccCreate<1>(intArg1, 4, ifGetNextSubId(intArg1));
        ccSetSize<1>(17, 14, 1, 0);
        ccSetPosition<1>(0, int6, 2, 0);
        ccSetTextFont<1>(Graphic.p11_full);
        ccSetColour<1>(colour(0xDFCFBF));
        ccSetTextShadow<1>(true);
        ccSetTextAlign<1>(0, 1, 0);
        ccSetText<1>(enumOp(type_int, type_string, intArg0, int5));
        ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
        ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xDFCFBF)]));
        ccSetOnOpt(hook(cs2_5071, "iiig", [event_opindex, intArg2, int5, intArg0]));
        int6 = int6 + 15;
        int5 = int5 + 1;
    }
    int6 = max(int6 - 1, 0);
    ifSetSize(0, int6, 1, 0, intArg1);
    return int6;
}
