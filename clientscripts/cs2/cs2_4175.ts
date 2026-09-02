/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4175

function cs2_4175(intArg0: component, intArg1: number, intArg2: number, intArg3: boolean): void {
    let int4: number = clientClock() - cs2_4176(intArg3, intArg2);

    if (int4 >= 255 || int4 < 0) {
        if (ccFind<1>(intArg0, intArg1) == 1) {
            ccSetHide<1>(true);
        }
        return;
    }

    if (ccFind<1>(intArg0, intArg1) == 1) {
        ccSetHide<1>(false);
        if (int4 % 40 > 20) {
            ccSetTrans<1>(255);
        } else {
            ccSetTrans<1>(int4);
        }
    }
}
