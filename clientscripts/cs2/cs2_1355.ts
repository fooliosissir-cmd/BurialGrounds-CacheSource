/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1355

function cs2_1355(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: graphic, intArg5: colour, intArg6: graphic, strArg0: string): void {
    ccDeleteAll(intArg0);
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg2);

    if (intArg3 != -1) {
        ifSetHide(true, intArg3);
    }
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg0), ifGetHeight(intArg0), 0, 0);
    ccSetGraphic(intArg4);
    ccSettiling(true);
    ccCreate(intArg0, 3, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg0), ifGetHeight(intArg0), 0, 0);
    ccSetColour(colour(0x000000));
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetText(strArg0);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(ifGetWidth(intArg0), ifGetHeight(intArg0), 0, 0);
    ccSetTextShadow(false);
    ccSetTextFont(intArg6);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(intArg5);
}
