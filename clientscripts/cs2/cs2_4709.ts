/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4709

function cs2_4709(intArg0: Enum, intArg1: Enum, intArg2: number, intArg3: number, intArg4: number, intArg5: component, intArg6: component, intArg7: component, intArg8: component, intArg9: number, intArg10: number, intArg11: number, intArg12: graphic, intArg13: colour, intArg14: colour, intArg15: colour, intArg16: graphic, intArg17: graphic, intArg18: graphic, intArg19: graphic, intArg20: graphic, intArg21: graphic, intArg22: graphic): void {
    let [int23, int24] = cs2_4710(intArg1, intArg2, intArg5, intArg6, intArg7, intArg8, Graphic.graphic_897, Graphic.scrollbar_v2_1, Graphic.scrollbar_v2_1, colour(0xFFFFFF), colour(0xFFFF00), Graphic.p11_full);
    ccCreate(intArg6, 5, ifGetNextSubId(intArg6));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg6), ifGetHeight(intArg6), 0, 0);
    ccSetGraphic(intArg12);
    ccSettiling(true);
    ccCreate(intArg6, 3, ifGetNextSubId(intArg6));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg6), ifGetHeight(intArg6), 0, 0);
    ccSetColour(colour(0x000000));
    ifSetScrollSize(ifGetWidth(intArg7), intArg4 * 15, intArg7);
    let int25: number = intArg3;
    let int26: number = -1;
    let str0: string = "";

    while (int25 <= intArg4) {
        int26 = ifGetNextSubId(intArg7);
        str0 = enumOp(type_int, type_string, intArg1, int25);
        ccCreate(intArg7, 4, int26);
        ccSetText(str0);
        ccSetTextAlign(0, 1, 0);
        ccSetPosition(5, int26 * 15, 0, 0);
        ccSetSize(ifGetWidth(intArg7) - 16, 15, 0, 0);
        ccSetTextShadow(false);
        ccSetTextFont(intArg16);
        ccSetOp(1, "Select");
        ccSetOnOp(hook(cs2_4713, "gi", [intArg0, event_comsubid]));
        if (int25 > intArg4) {
            ccSetColour(intArg14);
            ccSetOnMouseLeave(hook(cs2_1354, "Iii", [intArg7, int26, intArg14]));
            ccSetOnClick(hook(cs2_4715, "IIIIiisi", [intArg6, intArg7, intArg8, intArg5, int24, int23, str0, intArg14]));
        } else {
            ccSetColour(intArg13);
            ccSetOnMouseLeave(hook(cs2_1354, "Iii", [intArg7, int26, intArg13]));
            ccSetOnClick(hook(cs2_4715, "IIIIiisi", [intArg6, intArg7, intArg8, intArg5, int24, int23, str0, intArg13]));
        }
        ccSetOnMouseOver(hook(cs2_1353, "Iii", [intArg7, int26, intArg15]));
        int25 = int25 + 1;
    }

    if (intArg8 != -1) {
        proc_scrollbar_vertical(intArg8, intArg7, intArg17, intArg18, intArg19, intArg20, intArg21, intArg22);
    }
}
