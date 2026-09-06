/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5392

function cs2_5392(intArg0: component, intArg1: number, intArg2: number): void {
    if (varbit_option_gameframe_skin == 1) {
        return;
    }
    let int3: number = ifGetWidth(intArg0);
    let int4: number = ifGetHeight(intArg0);
    let int5: number = ifGetNextSubId(intArg0);

    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(24, 12, 1, 0);
    ccSetGraphic(Graphic.aif_chat_window_frame_1_1);
    ccSettiling(true);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(24, 12, 1, 0);
    ccSetGraphic(Graphic.aif_chat_window_frame_1_17);
    ccSettiling(true);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(Graphic.aif_chat_window_frame_1_0);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(Graphic.aif_chat_window_frame_1_2);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(Graphic.aif_chat_window_frame_1_16);
    int5 = int5 + 1;
    ccCreate(intArg0, 5, int5);
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(12, 12, 0, 0);
    ccSetGraphic(Graphic.aif_chat_window_frame_1_18);
    int5 = int5 + 1;

    if (intArg1 == 0 || intArg1 < 17 || intArg1 > ifGetHeight(intArg0) - 24) {
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, 0, 0, 1);
        ccSetSize(12, 24, 0, 1);
        ccSetGraphic(Graphic.aif_chat_window_frame_1_3);
        int5 = int5 + 1;
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, 0, 2, 1);
        ccSetSize(12, 24, 0, 1);
        ccSetGraphic(Graphic.aif_chat_window_frame_1_4);
        int5 = int5 + 1;
    } else if (intArg2 == 1) {
        if (intArg1 > 17) {
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 0, 0);
            ccSetSize(12, intArg1 - 17, 0, 0);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_3);
            ccSettiling(true);
            int5 = int5 + 1;
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 2, 0);
            ccSetSize(12, intArg1 - 17, 0, 0);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_4);
            ccSettiling(true);
            int5 = int5 + 1;
        }
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 5, 0, 0);
        ccSetSize(12, 12, 0, 0);
        ccSetGraphic(Graphic.aif_chat_window_frame_1_5);
        ccSettiling(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 5, 2, 0);
        ccSetSize(12, 12, 0, 0);
        ccSetGraphic(Graphic.aif_chat_window_frame_1_7);
        ccSettiling(true);
        int5 = int5 + 1;
        if (intArg1 < ifGetHeight(intArg0) - 24) {
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 0, 2);
            ccSetSize(12, intArg1 + 19, 0, 1);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_3);
            int5 = int5 + 1;
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 2, 2);
            ccSetSize(12, intArg1 + 19, 0, 1);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_4);
            int5 = int5 + 1;
        }
    } else {
        if (intArg1 > 17) {
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 0, 2);
            ccSetSize(12, intArg1 - 17, 0, 0);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_3);
            ccSettiling(true);
            int5 = int5 + 1;
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 2, 2);
            ccSetSize(12, intArg1 - 17, 0, 0);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_4);
            ccSettiling(true);
            int5 = int5 + 1;
        }
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 5, 0, 2);
        ccSetSize(12, 12, 0, 0);
        ccSetGraphic(Graphic.aif_chat_window_frame_1_5);
        ccSettiling(true);
        int5 = int5 + 1;
        ccCreate(intArg0, 5, int5);
        ccSetPosition(0, intArg1 - 5, 2, 2);
        ccSetSize(12, 12, 0, 0);
        ccSetGraphic(Graphic.aif_chat_window_frame_1_7);
        ccSettiling(true);
        int5 = int5 + 1;
        if (intArg1 < ifGetHeight(intArg0) - 24) {
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 0, 0);
            ccSetSize(12, intArg1 + 19, 0, 1);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_3);
            int5 = int5 + 1;
            ccCreate(intArg0, 5, int5);
            ccSetPosition(0, 12, 2, 0);
            ccSetSize(12, intArg1 + 19, 0, 1);
            ccSetGraphic(Graphic.aif_chat_window_frame_1_4);
            int5 = int5 + 1;
        }
    }
}
