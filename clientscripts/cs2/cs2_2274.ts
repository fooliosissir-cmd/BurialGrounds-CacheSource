/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2274

function cs2_2274(intArg0: component, intArg1: component, intArg2: number, intArg3: obj, intArg4: number, intArg5: obj, intArg6: number, intArg7: obj, intArg8: number, intArg9: obj, intArg10: number, strArg0: string, strArg1: string): void {
    ccDeleteAll(intArg1);
    let int11: number = 2 + 13 * paraheight("Level " + tostring(intArg2) + ": " + strArg0, 177, Graphic.p12_full);
    let int12: number = 2 + 13 * paraheight(strArg1, 177, Graphic.p11_full);
    let int13: number = 2 + int11 + int12 + 32 + 14 + 2;

    if (intArg3 == -1) {
        int13 = int13 - 32 - 14;
    }
    let int14: number = 5;

    if (ifGetY(intArg0) < 130) {
        int14 = 261 - int13 - 5;
    }
    ccCreate(intArg1, 3, 0);
    ccSetPosition(5, int14, 0, 0);
    ccSetSize(180, int13, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x000000));
    ccSetTrans(42);
    ccCreate(intArg1, 3, 1);
    ccSetPosition(6, int14 + 1, 0, 0);
    ccSetSize(179, int13 - 1, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0x2E2B23));
    ccCreate(intArg1, 3, 2);
    ccSetPosition(5, int14, 0, 0);
    ccSetSize(179, int13 - 1, 0, 0);
    ccSetfill(false);
    ccSetColour(colour(0x726451));
    ccCreate(intArg1, 4, 3);
    ccSetPosition(7, int14 + 2, 0, 0);
    ccSetSize(177, int11, 0, 0);
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(false);
    ccSetText("Level " + tostring(intArg2) + ": " + strArg0);
    ccCreate(intArg1, 4, 4);
    ccSetPosition(7, int14 + 2 + int11, 0, 0);
    ccSetSize(177, int12, 0, 0);
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetColour(colour(0xAF6A1A));
    ccSetTextShadow(false);
    ccSetText(strArg1);
    let int15: number = 1;
    let int16: number = (190 - int15 * 35) / (int15 + 1);
    ccCreate(intArg1, 5, 5);
    ccSetPosition(int16, int14 + 2 + int11 + int12, 0, 0);
    ccSetSize(35, 32, 0, 0);
    ccSetObject(Obj.rand_gate_stone, -1);
    ccCreate(intArg1, 4, 6);
    ccSetPosition(int16, int14 + 2 + int11 + int12 + 32, 0, 0);
    ccSetSize(35, 14, 0, 0);
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p11_full);

    if (varp_rand_gate_stone_coord != -1) {
        ccSetColour(colour(0x00FF00));
    } else {
        ccSetColour(colour(0xFF0000));
    }
    ccSetTextShadow(false);

    if (varp_rand_gate_stone_coord != -1) {
        ccSetText("1/1");
    } else {
        ccSetText("0/1");
    }
}
