/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4710

function cs2_4710(intArg0: Enum, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: graphic, intArg7: graphic, intArg8: graphic, intArg9: colour, intArg10: colour, intArg11: graphic): [number, number] {
    ccDeleteAll(intArg2);
    ccCreate(intArg2, 5, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
    ccSetGraphic(intArg6);
    ccSettiling(true);
    ccCreate(intArg2, 3, ifGetNextSubId(intArg2));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
    ccSetColour(colour(0x000000));
    let int12: number = 1;
    ccCreate(intArg2, 5, int12);
    ccSetPosition(ifGetWidth(intArg2) - 16, 0, 0, 0);
    ccSetSize(16, ifGetHeight(intArg2), 0, 0);
    ccSetGraphic(intArg7);
    ccSettiling(false);
    ccHookMouseEnter(hook(cs2_1351, "Iid", [intArg2, int12, intArg8]));
    ccHookMouseExit(hook(cs2_1352, "Iid", [intArg2, int12, intArg7]));
    let int13: number = ifGetNextSubId(intArg2);
    ccSetOnClick(hook(cs2_4711, "IIIIi", [intArg2, intArg3, intArg4, intArg5, int12]));
    ccCreate(intArg2, 4, int13);
    ccSetText(enumOp(type_int, type_string, intArg0, intArg1));
    ccSetPosition(5, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg2) - 22, ifGetHeight(intArg2), 0, 0);
    ccSetTextShadow(false);
    ccSetTextFont(intArg11);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(intArg9);
    ccHookMouseExit(hook(cs2_1354, "Iii", [intArg2, int13, intArg9]));
    ccHookMouseEnter(hook(cs2_1353, "Iii", [intArg2, int13, intArg10]));
    ccSetOnClick(hook(cs2_4711, "IIIIi", [intArg2, intArg3, intArg4, intArg5, int12]));
    return [int12, int13];
}
