/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,friend_tooltip]

function friend_tooltip(intArg0: component, intArg1: number, strArg0: string, intArg2: number, intArg3: number, intArg4: component, intArg5: component, intArg6: component, intArg7: graphic): void {
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;

    if (varc_tooltip_time < clientClock() + 25) {
        if (varc_tooltip_time < clientClock()) {
            varc_tooltip_time = clientClock();
        }
        varc_tooltip_time = varc_tooltip_time + 2;
        return;
    }
    varc_tooltip_time = clientClock() + 25 + 10;

    if (varc_tooltip_built != 1) {
        int10 = parawidth(strArg0, 2147483647, intArg7) + 8;
        int11 = paraheight(strArg0, int10, intArg7);
        if (int11 > 1) {
            int11 = int11 * 15;
        } else {
            int11 = 17;
        }
        if (ccFind(intArg0, intArg1) == 1) {
            int8 = ifGetX(intArg4) + ccGetX() + intArg2 + 3;
            int9 = ifGetY(intArg4) + ccGetY() + intArg3 - int11 - ifGetScrollY(intArg4);
        } else {
            return;
        }
        if (int8 < 0) {
            int8 = 0;
        } else if (int8 + int10 > ifGetX(intArg4) + ifGetWidth(intArg4)) {
            int8 = int8 - (int8 + int10 - (ifGetX(intArg4) + ifGetWidth(intArg4)));
        }
        if (int9 < 0) {
            int9 = 0;
        } else if (int9 + int11 > ifGetY(intArg4) + ifGetHeight(intArg4)) {
            int9 = int9 - (int9 + int11 - (ifGetY(intArg4) + ifGetHeight(intArg4)));
        }
        ifSetHide(false, intArg5);
        ifSetSize(int10, int11, 0, 0, intArg5);
        ifSetPosition(int8, int9, 0, 0, intArg5);
        ifSetText(strArg0, intArg6);
        varc_tooltip_built = 1;
    }
}
