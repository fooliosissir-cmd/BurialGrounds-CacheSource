/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5272

function cs2_5272(intArg0: component, intArg1: number, intArg2: number): number {
    let int3: number = 0;

    intArg2 = intArg2 / 2;
    let int4: number = intArg2;
    let int5: number = ifGetHeight(intArg0);

    if (ccFind(intArg0, intArg1) == 1) {
        if (ifGetWidth(intArg0) < 260) {
            if (intArg2 == 4) {
                ccSetTextFont(Graphic.p11_full);
            } else if (intArg2 == 1) {
                ccSetTextFont(Graphic.b12_full);
            } else {
                ccSetTextFont(Graphic.p12_full);
            }
        } else if (intArg2 >= 7) {
            ccSetTextFont(Graphic.p11_full);
        } else if (intArg2 <= 4) {
            ccSetTextFont(Graphic.b12_full);
        } else {
            ccSetTextFont(Graphic.p12_full);
        }
        if (intArg2 > 4) {
            int4 = divide_up(intArg2, 2);
            int3 = intArg1 / 4 * int5 / int4;
            if (intArg1 / 2 % 2 == 0) {
                ccSetPosition(2, int3, 0, 0);
            } else {
                ccSetPosition(2, int3, 2, 0);
            }
            ccSetSize(ifGetWidth(intArg0) / 2 - 4, int5 / int4, 0, 0);
        } else {
            int3 = intArg1 / 2 * int5 / intArg2;
            ccSetPosition(2, int3, 0, 0);
            ccSetSize(6, int5 / intArg2, 1, 0);
        }
    }
    intArg1 = intArg1 + 1;

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 > 4) {
            if (intArg1 / 2 % 2 == 0) {
                ccSetPosition(2, int3 + 1, 0, 0);
            } else {
                ccSetPosition(2, int3 + 1, 2, 0);
            }
            ccSetSize(ifGetWidth(intArg0) / 2 - 4, int5 / int4 - 2, 0, 0);
        } else {
            ccSetPosition(2, int3 + 1, 0, 0);
            ccSetSize(4, int5 / intArg2 - 2, 1, 0);
        }
    }
    return intArg1 + 1;
}
