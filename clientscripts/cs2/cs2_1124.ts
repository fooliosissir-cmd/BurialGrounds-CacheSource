/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1124

function cs2_1124(intArg0: component): void {
    let int1: number = ifGetTrans(intArg0);

    if (varc_992 == 1) {
        int1 = int1 + 1;
        if (int1 >= 255) {
            varc_992 = 0;
        }
    } else {
        int1 = int1 - 1;
        if (int1 <= 0) {
            varc_992 = 1;
        }
    }

    if (int1 > 255) {
        int1 = 255;
    } else if (int1 < 0) {
        int1 = 0;
    }
    ifSetTrans(int1, intArg0);
}
