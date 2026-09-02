/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3364

function cs2_3364(intArg0: component, intArg1: number, intArg2: component, strArg0: string, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: component = -1;

    if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
        if (tooltip_time(intArg3) == 0) {
            return;
        }
        if (varc_tooltip_built != 1) {
            int7 = cc_getx_absolute() + intArg5;
            int8 = cc_gety_absolute() + ccGetHeight() + intArg6;
            int15 = ifGetLayer(intArg2);
            if (int15 != -1 && intArg4 >= ifGetWidth(int15)) {
                intArg4 = ifGetWidth(int15);
            }
            int13 = 4 + parawidth(strArg0, intArg4 - 4, Graphic.p12_full);
            int14 = 4 + 13 * paraheight(strArg0, intArg4 - 4, Graphic.p12_full) + 3;
            if (int15 != -1) {
                int9 = int7 - ifGetScrollX(int15);
                int10 = int8 - ifGetScrollY(int15);
                if (int9 < 0) {
                    int7 = ifGetScrollX(int15);
                    int9 = 0;
                }
                if (int10 < 0) {
                    int8 = ifGetScrollY(int15);
                    int10 = 0;
                }
                if (int9 > 0) {
                    int11 = int9 - ifGetWidth(int15) + int13;
                    if (int11 > 0) {
                        int7 = int7 - int11;
                    }
                }
                if (int10 > 0) {
                    int12 = int10 - ifGetHeight(int15) + int14;
                    if (int12 > 0) {
                        int8 = int8 - int12 - ccGetHeight() - 10;
                    }
                }
            }
            if (int7 < 0) {
                int7 = 0;
            }
            if (int8 < 0) {
                int8 = 0;
            }
            ifSetSize(int13, int14, 0, 0, intArg2);
            ifSetPosition(int7, int8, 0, 0, intArg2);
            ccDeleteAll(intArg2);
            ccCreate(intArg2, 3, 0);
            ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x0E0E0E));
            ccCreate(intArg2, 3, 1);
            ccSetSize(ifGetWidth(intArg2), ifGetHeight(intArg2), 0, 0);
            ccSetfill(false);
            ccSetColour(colour(0xEBECE6));
            ccCreate(intArg2, 4, 2);
            ccSetSize(intArg4 - 4, ifGetHeight(intArg2), 0, 0);
            ccSetPosition(2, 0, 0, 0);
            ccSetText(strArg0);
            ccSetTextAlign(0, 1, 0);
            ccSetTextFont(Graphic.p12_full);
            ccSetColour(colour(0xF5B241));
            varc_tooltip_built = 1;
        }
    }
}
