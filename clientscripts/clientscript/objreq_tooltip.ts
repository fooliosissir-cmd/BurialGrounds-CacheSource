/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objreq_tooltip]

function objreq_tooltip(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number, intArg5: number, intArg6: number, strArg0: string): void {
    if (intArg0 == -1 || intArg2 == -1 || compare(strArg0, "") == 0) {
        return;
    }

    if (varc_tooltip_time < clientClock() + intArg3) {
        if (varc_tooltip_time < clientClock()) {
            varc_tooltip_time = clientClock();
        }
        varc_tooltip_time = varc_tooltip_time + 2;
        return;
    }

    if (ccFind(intArg0, intArg1) == 1) {
        intArg5 = intArg5 + cc_getx_absolute();
        intArg6 = intArg6 + cc_gety_absolute();
    }
    varc_tooltip_time = clientClock() + intArg3 + 10;
    let int7: number = 0;
    let int8: number = 0;
    let int9: component = -1;

    if (varc_tooltip_built != 1) {
        int9 = ifGetLayer(intArg2);
        if (int9 != -1 && intArg4 >= ifGetWidth(int9)) {
            intArg4 = ifGetWidth(int9);
        }
        int7 = 6 + parawidth(strArg0, intArg4 - 6, Graphic.p12_full);
        int8 = 6 + 16 * paraheight(strArg0, intArg4 - 6, Graphic.p12_full);
        ifSetSize(int7, int8, 0, 0, intArg2);
        intArg5 = intArg5 - 5 - int7;
        intArg6 = intArg6 - 3 - int8;
        if (int9 != -1) {
            if (intArg5 + int7 > ifGetWidth(int9)) {
                intArg5 = ifGetWidth(int9) - int7;
            }
            if (intArg6 + int8 > ifGetHeight(int9)) {
                intArg6 = ifGetHeight(int9) - int8;
            }
        }
        if (intArg5 < 0) {
            intArg5 = 0;
        }
        if (intArg6 < 0) {
            intArg6 = 0;
        }
        ifSetPosition(intArg5, intArg6, 0, 0, intArg2);
        ccDeleteAll(intArg2);
        ccCreate(intArg2, 3, 0);
        ccSetSize(int7, int8, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x0E0E0E));
        ccCreate(intArg2, 3, 1);
        ccSetSize(int7, int8, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0xEBECE6));
        ccCreate(intArg2, 4, 2);
        ccSetSize(intArg4 - 6, int8, 0, 0);
        ccSetPosition(0, 0, 1, 1);
        ccSetText(strArg0);
        ccSetTextAlign(1, 1, 16);
        ccSetTextFont(Graphic.p12_full);
        ccSetColour(colour(0xF5B241));
        varc_tooltip_built = 1;
    }
}
