/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3982

function cs2_3982(intArg0: component, strArg0: string): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 178;
    let int8: component = Component.interface_1056.component_1056_158;
    let int9: number = 0;
    let int10: number = 0;
    let int11: component = -1;

    if (ifFind(intArg0) == 1) {
        if (varc_tooltip_time < clientClock() + 15) {
            if (varc_tooltip_time < clientClock()) {
                varc_tooltip_time = clientClock();
            }
            varc_tooltip_time = varc_tooltip_time + 2;
            return;
        }
        varc_tooltip_time = clientClock() + 55;
        if (varc_tooltip_built != 1) {
            int1 = ccGetX() + 5;
            int2 = ccGetY() + ccGetHeight() + 5;
            int11 = Component.interface_1056.component_1056_94;
            if (int11 != -1 && int7 >= ifGetWidth(int11)) {
                int7 = ifGetWidth(int11);
            }
            int9 = 4 + parawidth(strArg0, int7 - 4, Graphic.p12_full);
            int10 = 4 + 16 * paraheight(strArg0, int7 - 4, Graphic.p12_full);
            if (int11 != -1) {
                int3 = int1 - ifGetScrollX(int11);
                int4 = int2 - ifGetScrollY(int11);
                if (int3 < 0) {
                    int1 = ifGetScrollX(int11);
                    int3 = 0;
                }
                if (int4 < 0) {
                    int2 = ifGetScrollY(int11);
                    int4 = 0;
                }
                if (int3 > 0) {
                    int5 = int3 - ifGetWidth(int11) + int9;
                    if (int5 > 0) {
                        int1 = int1 - int5;
                    }
                }
                if (int4 > 0) {
                    int6 = int4 - ifGetHeight(int11) + int10;
                    if (int6 > 0) {
                        int2 = int2 - int6 - ccGetHeight() - 10;
                    }
                }
            }
            if (int1 < 0) {
                int1 = 0;
            }
            if (int2 < 0) {
                int2 = 0;
            }
            ifSetSize(int9, int10, 0, 0, int8);
            ifSetPosition(int1, int2, 0, 0, int8);
            ccDeleteAll(int8);
            ccCreate(int8, 3, 0);
            ccSetSize(ifGetWidth(int8), ifGetHeight(int8), 0, 0);
            ccSetfill(true);
            ccSetColour(colour(0x000000));
            ccSetTrans(80);
            ccCreate(int8, 3, 1);
            ccSetSize(ifGetWidth(int8), ifGetHeight(int8), 0, 0);
            ccSetfill(false);
            ccSetColour(colour(0x000000));
            ccCreate(int8, 4, 2);
            ccSetSize(int7 - 4, ifGetHeight(int8), 0, 0);
            ccSetPosition(2, 0, 0, 0);
            ccSetText(strArg0);
            ccSetTextAlign(0, 1, 16);
            ccSetTextFont(Graphic.p12_full);
            ccSetColour(colour(0xEEEEEE));
            varc_tooltip_built = 1;
        }
    }
}
