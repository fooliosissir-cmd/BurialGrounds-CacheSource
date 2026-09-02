/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1082

function cs2_1082(intArg0: number, intArg1: component, intArg2: number): void {
    let int3: number = intArg0 + 1;

    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_1550, int3)) == 0) {
        if (ccFind(intArg1, intArg2) == 1) {
            ccSetHide(false);
            ccSetColour(colour(0x969777));
        }
        if (varc_128 >= 0) {
            int3 = int3 + 1;
            while (ifGetHide(enumOp(type_int, type_component, Enum.enum_1550, int3)) == 0) {
                int3 = int3 + 1;
            }
            if (ccFind(enumOp(type_int, type_component, Enum.enum_1551, int3 - 1), varc_128) == 1) {
                ccSetHide(true);
            }
            varc_128 = -1;
        }
        return;
    }

    if (varc_128 == intArg2) {
        return;
    }

    if (varc_128 >= 0 && ccFind(intArg1, varc_128) == 1) {
        ccSetHide(true);
    }

    if (ccFind(intArg1, intArg2) == 1) {
        if (ccGetHide() == 1) {
            ccSetHide(false);
            ccSetColour(colour(0x577E45));
        }
        varc_128 = intArg2;
    }
}
