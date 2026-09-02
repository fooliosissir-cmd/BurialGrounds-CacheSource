/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_777

function cs2_777(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    ccDeleteAll(intArg1);
    let int4: number = 2 + 13 * paraheight(tostring(varp_1177) + "/60 special move points remaining", 125, Graphic.p12_full);
    let int5: number = 2 + int4 + 32 + 14 + 2;
    let int6: number = 1;
    let int7: number = 1;
    int5 = int5 - 32 - 14;
    let int8: number = ifGetY(intArg0);

    if (int8 == 224) {
        int8 = 180;
    }
    let int9: number = ifGetX(intArg0) - 60;

    if (int9 < 0) {
        int9 = 5;
    }
    ccCreate(intArg1, 3, 0);
    ccSetPosition(int9, int8, 0, 0);
    ccSetSize(128, int5, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x0E0E0E));
    ccCreate(intArg1, 3, 1);
    ccSetPosition(int9 + 1, int8 + 1, 0, 0);
    ccSetSize(127, int5 - 1, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(intArg1, 3, 2);
    ccSetPosition(int9, int8, 0, 0);
    ccSetSize(127, int5 - 1, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(intArg1, 4, 3);
    ccSetPosition(int9 + 2, int8 + 2, 0, 0);
    ccSetSize(125, int4, 0, 0);
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xF5B241));
    ccSetTextShadow(false);
    ccSetText(tostring(varp_1177) + "/60 special move points remaining");
}
