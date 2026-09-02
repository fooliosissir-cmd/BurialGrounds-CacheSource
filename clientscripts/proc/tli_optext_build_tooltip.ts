/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tli_optext_build_tooltip]

function tli_optext_build_tooltip(intArg0: component, strArg0: string, intArg1: number, intArg2: number): void {
    ccDeleteAll(intArg0);
    ifSetSize(intArg1, intArg2, 0, 0, intArg0);
    let int3: number = 0;
    ccCreate(intArg0, 5, int3);
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(20, 22, 1, 1);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(10, 22, 0, 1);
    ccSetPosition(0, 0, 0, 1);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(10, 22, 0, 1);
    ccSetPosition(0, 0, 2, 1);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(20, 11, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(20, 11, 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccSettiling(true);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 2, 0);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 0, 2);
    int3 = int3 + 1;
    ccCreate(intArg0, 5, int3);
    ccSetSize(10, 11, 0, 0);
    ccSetPosition(0, 0, 2, 2);
    int3 = int3 + 1;

    if (varc_1692 != -1) {
        ccCreate(intArg0, 4, int3);
        ccSetSize(15, 30, 1, 0);
        ccSetPosition(0, 0, 1, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetColour(colour(0xEBE0BC));
        ccSetTextAlign(1, 1, 15);
        ccSetTextShadow(false);
        ccSetText(strArg0);
        ccSettextantimacro(true);
        int3 = int3 + 1;
        ccCreate(intArg0, 4, int3);
        ccSetSize(15, 30, 1, 0);
        ccSetPosition(0, 15, 1, 0);
        ccSetTextFont(Graphic.b12_full);
        ccSetColour(colour(0xEBE0BC));
        ccSetTextAlign(1, 1, 15);
        ccSetTextShadow(false);
        ccSetText("Cost : " + cs2_940(varc_1692));
        int3 = int3 + 1;
    } else {
        ccCreate(intArg0, 4, int3);
        ccSetSize(15, 0, 1, 1);
        ccSetPosition(0, 1, 1, 1);
        ccSetTextFont(Graphic.b12_full);
        ccSetColour(colour(0xEBE0BC));
        ccSetTextAlign(1, 1, 15);
        ccSetTextShadow(false);
        ccSetText(strArg0);
        int3 = int3 + 1;
    }
    int3 = 0;

    while (int3 < 9) {
        switch (int3) {
            case 0:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_4);
                }
                break;
            case 1:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_3);
                }
                break;
            case 2:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_5);
                }
                break;
            case 3:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_1);
                }
                break;
            case 4:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_7);
                }
                break;
            case 5:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_2);
                }
                break;
            case 6:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_0);
                }
                break;
            case 7:
                if (ccFind(intArg0, int3) == 1) {
                    ccSetGraphic(Graphic.aif_examine_text_frame_1_6);
                }
                break;
            case 8:
                if (ccFind(intArg0, int3) != 1) {
                    break;
                }
                ccSetGraphic(Graphic.aif_examine_text_frame_1_8);
                break;
        }
        int3 = int3 + 1;
    }
}
