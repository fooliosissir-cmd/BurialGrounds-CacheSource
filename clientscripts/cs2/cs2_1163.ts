/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1163

function cs2_1163(intArg0: component, intArg1: number, intArg2: component, strArg0: string, intArg3: number, intArg4: number): void {
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: component = -1;
    let int14: number = 0;

    if ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1) {
        if (tooltip_time(intArg3) == 0) {
            return;
        }
        if (varc_tooltip_built != 1) {
            int5 = cc_getx_absolute() + 5;
            int14 = cc_gety_absolute();
            int6 = int14 + ccGetHeight() + 5;
            int13 = ifGetLayer(intArg2);
            if (int13 != -1 && intArg4 >= ifGetWidth(int13)) {
                intArg4 = ifGetWidth(int13);
            }
            int11 = 4 + parawidth(strArg0, intArg4 - 4, Graphic.p12_full);
            int12 = 4 + 13 * paraheight(strArg0, intArg4 - 4, Graphic.p12_full) + 3;
            if (int13 != -1) {
                int7 = int5 - ifGetScrollX(int13);
                int8 = int6 - ifGetScrollY(int13);
                if (int7 < 0) {
                    int5 = ifGetScrollX(int13);
                    int7 = 0;
                }
                if (int8 < 0) {
                    int6 = ifGetScrollY(int13);
                    int8 = 0;
                }
                if (int7 > 0) {
                    int9 = int7 - ifGetWidth(int13) + int11;
                    if (int9 > 0) {
                        int5 = int5 - int9;
                    }
                }
                if (int8 > 0) {
                    int10 = int8 - ifGetHeight(int13) + int12;
                    if (int10 > 0) {
                        if (int14 > int12 && ccGetHeight() < int12) {
                            int6 = int14 - int12;
                        } else {
                            int6 = int6 - int10 - ccGetHeight() - 10;
                        }
                    }
                }
            }
            int5 = max(int5, 0);
            int6 = max(int6, 0);
            ifSetSize(int11, int12, 0, 0, intArg2);
            ifSetPosition(int5, int6, 0, 0, intArg2);
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
