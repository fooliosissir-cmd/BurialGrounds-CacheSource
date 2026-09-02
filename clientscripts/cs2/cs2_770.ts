/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_770

function cs2_770(intArg0: number, intArg1: component, intArg2: component, intArg3: number, intArg4: obj, intArg5: number, intArg6: obj, intArg7: number, intArg8: obj, intArg9: number, intArg10: obj, intArg11: number, intArg12: obj, intArg13: number, intArg14: obj, intArg15: number, intArg16: obj, intArg17: number, intArg18: obj, intArg19: number, intArg20: obj, intArg21: number, intArg22: obj, intArg23: number, strArg0: string): void {
    ccDeleteAll(intArg1);
    let int24: number = paraheight("Level " + tostring(intArg3) + ": " + strArg0, 177, Graphic.p12_full);
    let int25: number = 2 + 13 * int24;
    let int26: number = 2 + 13 * paraheight("To craft this you need", 177, Graphic.p11_full);
    let int27: number = 2 + int25 + int26 + 32 + 14 + 2;
    let int28: number = 5;
    let int29: number = 5;
    let int30: number = 1;
    let int31: number = 1;

    if (ccFind(intArg2, intArg0) == 1) {
        if (intArg4 == -1) {
            int27 = int27 - 32 - 14;
        }
        if (int24 > 1) {
            if (intArg12 != -1) {
                int27 = int27 + 57;
            }
        } else if (intArg12 != -1) {
            int27 = int27 + 32 + 14;
        }
        int28 = ccGetY() - ifGetScrollY(intArg2) + 110;
        if (int28 > 200) {
            int28 = ccGetY() - ifGetScrollY(intArg2) - int27 + 45;
        }
        int29 = ccGetX() - 60;
        if (int29 < 0) {
            int29 = 5;
        }
        if (int29 > 270) {
            int29 = 285;
        }
        ccCreate(intArg1, 3, 0);
        ccSetPosition(int29, int28, 0, 0);
        ccSetSize(180, int27, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x000000));
        ccSetTrans(42);
        ccCreate(intArg1, 3, 1);
        ccSetPosition(int29 + 1, int28 + 1, 0, 0);
        ccSetSize(179, int27 - 1, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x2E2B23));
        ccCreate(intArg1, 3, 2);
        ccSetPosition(int29, int28, 0, 0);
        ccSetSize(179, int27 - 1, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x726451));
        ccCreate(intArg1, 4, 3);
        ccSetPosition(int29 + 2, int28 + 2, 0, 0);
        ccSetSize(177, int25, 0, 0);
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetColour(colour(0xFF981F));
        ccSetTextShadow(false);
        ccSetText("Level " + tostring(intArg3) + ": " + strArg0);
        ccCreate(intArg1, 4, 4);
        ccSetPosition(int29, int28 + 2 + int25, 0, 0);
        ccSetSize(177, int26, 0, 0);
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xAF6A1A));
        ccSetTextShadow(false);
        ccSetText("This item requires");
        if (intArg6 != -1) {
            int30 = 2;
        }
        if (intArg8 != -1) {
            int30 = 3;
        }
        if (intArg10 != -1) {
            int30 = 4;
        }
        int31 = (190 - int30 * 35) / (int30 + 1);
        if (intArg4 != -1) {
            ccCreate(intArg1, 5, 5);
            ccSetPosition(int29 + int31, int28 + 2 + int25 + int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg4, -1);
            ccCreate(intArg1, 4, 6);
            ccSetPosition(int29 + int31, int28 + 2 + int25 + int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg4) >= intArg5) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring_pouch(cs2_771(intArg4)) + "/" + tostring(intArg5));
        }
        if (intArg6 != -1) {
            ccCreate(intArg1, 5, 7);
            ccSetPosition(int29 + int31 * 2 + 35, int28 + 2 + int25 + int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg6, -1);
            ccCreate(intArg1, 4, 8);
            ccSetPosition(int29 + int31 * 2 + 35, int28 + 2 + int25 + int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg6) >= intArg7) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg6)) + "/" + tostring(intArg7));
        }
        if (intArg8 != -1) {
            ccCreate(intArg1, 5, 9);
            ccSetPosition(int29 + int31 * 3 + 70, int28 + 2 + int25 + int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg8, -1);
            ccCreate(intArg1, 4, 10);
            ccSetPosition(int29 + int31 * 3 + 70, int28 + 2 + int25 + int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg8) >= intArg9) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg8)) + "/" + tostring(intArg9));
        }
        if (intArg10 != -1) {
            ccCreate(intArg1, 5, 11);
            ccSetPosition(int29 + int31 * 4 + 105, int28 + 2 + int25 + int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg10, -1);
            ccCreate(intArg1, 4, 12);
            ccSetPosition(int29 + int31 * 4 + 105, int28 + 2 + int25 + int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg10) >= intArg11) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg10)) + "/" + tostring(intArg11));
        }
        if (intArg12 != -1) {
            ccCreate(intArg1, 5, 13);
            ccSetPosition(int29 + int31, int28 + 16 + 2 * int25 + 2 * int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg12, -1);
            ccCreate(intArg1, 4, 14);
            ccSetPosition(int29 + int31, int28 + 16 + 2 * int25 + 2 * int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg12) >= intArg13) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg12)) + "/" + tostring(intArg13));
        }
        if (intArg14 != -1) {
            ccCreate(intArg1, 5, 15);
            ccSetPosition(int29 + int31 * 2 + 35, int28 + 16 + 2 * int25 + 2 * int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg14, -1);
            ccCreate(intArg1, 4, 16);
            ccSetPosition(int29 + int31 * 2 + 35, int28 + 16 + 2 * int25 + 2 * int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg14) >= intArg15) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg14)) + "/" + tostring(intArg15));
        }
        if (intArg16 != -1) {
            ccCreate(intArg1, 5, 15);
            ccSetPosition(int29 + int31 * 3 + 35 + 2, int28 + 16 + 2 * int25 + 2 * int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg16, -1);
            ccCreate(intArg1, 4, 16);
            ccSetPosition(int29 + int31 * 3 + 35 + 2, int28 + 16 + 2 * int25 + 2 * int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg16) >= intArg17) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg16)) + "/" + tostring(intArg17));
        }
        if (intArg18 != -1) {
            ccCreate(intArg1, 5, 15);
            ccSetPosition(int29 + int31 * 4 + 35 + 3, int28 + 16 + 2 * int25 + 2 * int26, 0, 0);
            ccSetSize(35, 32, 0, 0);
            ccSetObject(intArg18, -1);
            ccCreate(intArg1, 4, 16);
            ccSetPosition(int29 + int31 * 4 + 35 + 3, int28 + 16 + 2 * int25 + 2 * int26 + 32, 0, 0);
            ccSetSize(35, 14, 0, 0);
            ccSetTextAlign(1, 1, 0);
            ccSetTextFont(Graphic.p11_full);
            if (cs2_771(intArg18) >= intArg19) {
                ccSetColour(colour(0x00FF00));
            } else {
                ccSetColour(colour(0xFF0000));
            }
            ccSetTextShadow(false);
            ccSetText(lore_tostring(cs2_771(intArg18)) + "/" + tostring(intArg19));
        }
    }
}
