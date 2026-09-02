/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5515

function cs2_5515(intArg0: component, intArg1: component, strArg0: string): void {
    let int2: number = ifGetNextSubId(intArg0);
    let int3: number = 0;
    let int4: number = max(84, stringWidth(strArg0, Graphic.graphic_4040) + 22);
    let int5: number = if_getx_absolute(intArg1);
    let int6: number = trh_esc_mouseleave(intArg1);
    let int7: number = int5 + ifGetWidth(intArg1) / 2 - 6;
    let int8: number = 0;

    if (int5 - 4 <= ifGetWidth(intArg0) - int4) {
        int8 = int5 - 4;
    } else {
        int8 = ifGetWidth(intArg0) - int4;
    }
    let int9: number = int6 - 38;

    if (ifFind(intArg1) == 1) {
        if (ccParam(Param.glo3_sidecount) > 0) {
            if (ccFind<1>(intArg0, ccParam(Param.glo3_sidecount) - 1) == 0) {
                ccSetParamInt(Param.glo3_sidecount, int2 + 1);
            } else {
                int2 = ccParam(Param.glo3_sidecount) - 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8, int9, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8 + int4 - 10, int9, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8 + int4 - 10, int9 + 18, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8, int9 + 18, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8 + 10, int9, 0, 0);
                    ccSetSize<1>(int4 - 20, 11, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8 + 10, int9 + 18, 0, 0);
                    ccSetSize<1>(int4 - 20, 11, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8, int9 + 11, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8 + int4 - 10, int9 + 11, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8 + 10, int9 + 11, 0, 0);
                    ccSetSize<1>(int4 - 20, 7, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int7, int9 + 24, 0, 0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                int2 = int2 + 1;
                if (ccFind<1>(intArg0, int2) == 1) {
                    ccSetPosition<1>(int8, int9, 0, 0);
                    ccSetSize<1>(int4, 29, 0, 0);
                    ccSetText<1>(strArg0);
                    ccSetOnTimer<1>(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
                }
                return;
            }
        } else {
            ccSetParamInt(Param.glo3_sidecount, int2 + 1);
        }
    }
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8, int9, 0, 0);
    ccSetSize(10, 11, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_0);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8 + int4 - 10, int9, 0, 0);
    ccSetSize(10, 11, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_2);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8 + int4 - 10, int9 + 18, 0, 0);
    ccSetSize(10, 11, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_8);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8, int9 + 18, 0, 0);
    ccSetSize(10, 11, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_6);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8 + 10, int9, 0, 0);
    ccSetSize(int4 - 20, 11, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_1);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8 + 10, int9 + 18, 0, 0);
    ccSetSize(int4 - 20, 11, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_7);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8, int9 + 11, 0, 0);
    ccSetSize(10, 7, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_3);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8 + int4 - 10, int9 + 11, 0, 0);
    ccSetSize(10, 7, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_5);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int8 + 10, int9 + 11, 0, 0);
    ccSetSize(int4 - 20, 7, 0, 0);
    ccSetGraphic(Graphic.aif_examine_text_frame_1_4);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 5, int2);
    ccSetPosition(int7, int9 + 24, 0, 0);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(Graphic.aif_examine_frame_arrow_1_3);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
    int2 = int2 + 1;
    ccCreate(intArg0, 4, int2);
    ccSetPosition(int8, int9, 0, 0);
    ccSetSize(int4, 29, 0, 0);
    ccSetText(strArg0);
    ccSetTextFont(Graphic.graphic_4040);
    ccSetColour(colour(0xF5B241));
    ccSetTextAlign(1, 1, 0);
    ccSetTrans(255);
    ccSetOnTimer(hook(cs2_5517, "Ii", [event_com, event_comsubid]));
}
