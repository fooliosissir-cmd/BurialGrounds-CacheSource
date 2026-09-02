/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4212

function cs2_4212(intArg0: component, strArg0: string, intArg1: graphic, intArg2: colour, intArg3: colour): void {
    if (intArg0 == -1) {
        return;
    }
    let int4: number = ifGetX(intArg0);
    let int5: number = ifGetY(intArg0);
    let int6: component = ifGetLayer(intArg0);
    ifSetText(strArg0, intArg0);
    ifSetTextFont(intArg1, intArg0);
    let int7: number = 0;

    switch (intArg1) {
        case Graphic.graphic_4040:
            int7 = 13;
            break;
        case Graphic.graphic_3795:
            int7 = 15;
            break;
    }
    ccDeleteAll(int6);
    ccCreate(int6, 4, ifGetNextSubId(int6));
    ccSetPosition(0, -1, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetTextAlign(1, 1, int7);
    ccSetColour(intArg3);
    ccSetTextFont(intArg1);
    ccSetText(strArg0);
    ccCreate(int6, 4, ifGetNextSubId(int6));
    ccSetPosition(0, 1, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetTextAlign(1, 1, int7);
    ccSetColour(intArg3);
    ccSetTextFont(intArg1);
    ccSetText(strArg0);
    ccCreate(int6, 4, ifGetNextSubId(int6));
    ccSetPosition(-1, 0, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetTextAlign(1, 1, int7);
    ccSetColour(intArg3);
    ccSetTextFont(intArg1);
    ccSetText(strArg0);
    ccCreate(int6, 4, ifGetNextSubId(int6));
    ccSetPosition(1, 0, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetTextAlign(1, 1, int7);
    ccSetColour(intArg3);
    ccSetTextFont(intArg1);
    ccSetText(strArg0);
    ccCreate(int6, 4, ifGetNextSubId(int6));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(0, 0, 1, 1);
    ccSetTextAlign(1, 1, int7);
    ccSetColour(intArg2);
    ccSetTextFont(intArg1);
    ccSetText(strArg0);
}
