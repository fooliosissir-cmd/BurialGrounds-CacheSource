/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1436

function cs2_1436(intArg0: Enum, intArg1: number, intArg2: number, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: graphic, intArg8: graphic, intArg9: graphic, intArg10: graphic, intArg11: colour, intArg12: colour, intArg13: colour, intArg14: graphic, intArg15: graphic, intArg16: graphic, intArg17: graphic, intArg18: graphic, intArg19: graphic, intArg20: graphic): void {
    ccDeleteAll(intArg3);
    ccCreate(intArg3, 5, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg3), ifGetHeight(intArg3), 0, 0);
    ccSetGraphic(intArg7);
    ccSettiling(true);
    ccCreate(intArg3, 3, ifGetNextSubId(intArg3));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg3), ifGetHeight(intArg3), 0, 0);
    ccSetColour(colour(0x000000));
    let int21: number = 1;
    ccCreate(intArg3, 5, int21);
    ccSetPosition(ifGetWidth(intArg3) - 16, 0, 0, 0);
    ccSetSize(16, ifGetHeight(intArg3), 0, 0);
    ccSetGraphic(intArg8);
    ccSettiling(false);
    ccSetOnMouseOver(hook(cs2_1351, "Iid", [intArg3, int21, intArg9]));
    ccSetOnMouseLeave(hook(cs2_1352, "Iid", [intArg3, int21, intArg8]));
    let int22: number = ifGetNextSubId(intArg3);
    ccSetOnClick(hook(cs2_1347, "giIdIIIiiidiidddddd", [intArg0, intArg2, intArg4, intArg10, intArg5, intArg6, intArg3, intArg11, intArg12, intArg13, intArg14, int22, int21, intArg15, intArg16, intArg17, intArg18, intArg19, intArg20]));
    ccCreate(intArg3, 4, int22);
    ccSetText(enumOp(type_int, type_string, intArg0, intArg1));
    ccSetPosition(5, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg3) - 22, ifGetHeight(intArg3), 0, 0);
    ccSetTextShadow(false);
    ccSetTextFont(intArg14);
    ccSetTextAlign(0, 1, 0);

    if (intArg1 >= intArg2) {
        ccSetColour(intArg12);
        ccSetOnMouseLeave(hook(cs2_1354, "Iii", [intArg3, int22, intArg12]));
    } else {
        ccSetColour(intArg11);
        ccSetOnMouseLeave(hook(cs2_1354, "Iii", [intArg3, int22, intArg11]));
    }
    ccSetOnMouseOver(hook(cs2_1353, "Iii", [intArg3, int22, intArg13]));
    ccSetOnClick(hook(cs2_1347, "giIdIIIiiidiidddddd", [intArg0, intArg2, intArg4, intArg10, intArg5, intArg6, intArg3, intArg11, intArg12, intArg13, intArg14, int22, int21, intArg15, intArg16, intArg17, intArg18, intArg19, intArg20]));
}
