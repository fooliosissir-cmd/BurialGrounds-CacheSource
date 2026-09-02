/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1663

function cs2_1663(intArg0: component, intArg1: number, intArg2: component): void {
    let int3: number = 0;

    if (ccFind<1>(intArg0, intArg1) == 1 && ccGetHide<1>() == 0) {
        ccSetHide(false);
        if (ccGetY<1>() + ccGetHeight<1>() < ifGetScrollY(intArg0)) {
            ccSetModelAngle(0, 0, 512, 1024, 0, 1500);
            ccSetPosition(0, ifGetY(intArg0), 1, 0);
            return;
        }
        if (ccGetY<1>() >= ifGetScrollY(intArg0) + ifGetHeight(intArg0)) {
            ccSetModelAngle(0, 0, 512, 0, 0, 1500);
            ccSetPosition(0, ifGetY(intArg0) + ifGetHeight(intArg0) - ccGetHeight(), 1, 0);
            return;
        }
        int3 = ccGetY<1>() - ifGetScrollY(intArg0) + ifGetY(intArg0);
        if (int3 > ifGetHeight(intArg2) - ccGetHeight()) {
            ccSetModelAngle(0, 0, 512, 256, 0, 1500);
            ccSetPosition(0, int3 - ccGetHeight(), 1, 0);
        } else {
            ccSetModelAngle(0, 0, 512, 768, 0, 1500);
            ccSetPosition(0, int3 + ccGetHeight<1>(), 1, 0);
        }
        return;
    }
    ccSetHide(true);
}
