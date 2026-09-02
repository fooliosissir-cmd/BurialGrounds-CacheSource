/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_800

function cs2_800(intArg0: number, intArg1: component, intArg2: component, intArg3: number, strArg0: string): void {
    ccDeleteAll(intArg1);
    let int4: number = 2 + 13 * paraheight("Level " + tostring(intArg3) + ": " + strArg0, 177, Graphic.p12_full);
    let int5: number = 2 + 13 * paraheight("You cannot make this summoning pouch.", 177, Graphic.p11_full);
    let int6: number = 2 + int4 + int5 + 32 + 14 + 2;
    let int7: number = 5;
    let int8: number = 5;
    let int9: number = 1;
    let int10: number = 1;

    if (ccFind(intArg2, intArg0) == 1) {
        int6 = int6 - 32 - 14;
        int7 = ccGetY() - ifGetScrollY(intArg2) + 110;
        if (int7 > 200) {
            int7 = ccGetY() - ifGetScrollY(intArg2) - int6 + 45;
        }
        int8 = ccGetX() - 60;
        if (int8 < 0) {
            int8 = 5;
        }
        if (int8 > 270) {
            int8 = 285;
        }
        ccCreate(intArg1, 3, 0);
        ccSetPosition(int8, int7, 0, 0);
        ccSetSize(180, int6, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x000000));
        ccSetTrans(42);
        ccCreate(intArg1, 3, 1);
        ccSetPosition(int8 + 1, int7 + 1, 0, 0);
        ccSetSize(179, int6 - 1, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x2E2B23));
        ccCreate(intArg1, 3, 2);
        ccSetPosition(int8, int7, 0, 0);
        ccSetSize(179, int6 - 1, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x726451));
        ccCreate(intArg1, 4, 3);
        ccSetPosition(int8 + 2, int7 + 2, 0, 0);
        ccSetSize(177, int4, 0, 0);
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetColour(colour(0xFF981F));
        ccSetTextShadow(false);
        ccSetText(strArg0);
    }
}
