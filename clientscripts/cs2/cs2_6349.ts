/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6349

function cs2_6349(intArg0: component, intArg1: number, intArg2: number): [component, number] {
    switch (intArg2) {
        case 0:
        case 2:
        case 3:
        case 1:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            intArg0 = cs2_6350(intArg2);
            intArg1 = -1;
            break;
        case 20:
            if (cs2_1314(4) == 1 || intArg1 == -1) {
                intArg0 = cs2_6350(4);
                intArg1 = -1;
            }
            break;
        case 21:
            if (cs2_1314(5) == 1) {
                intArg0 = cs2_6350(5);
                intArg1 = -1;
            }
            break;
        case 23:
            if (varp_shop_filter == 1) {
                intArg0 = Component.interface_1265.component_1265_28;
                intArg1 = -1;
            }
            break;
        case 24:
            if (getWindowMode() >= 2) {
                if (ifHasSubModal(48889965, 1266) == 0) {
                    intArg0 = -1;
                }
                intArg1 = -1;
            } else {
                if (ifHasSubModal(35913900, 1266) == 0) {
                    intArg0 = -1;
                }
                intArg1 = -1;
            }
            break;
        case 25:
            if (cs2_1314(6) == 1 || intArg1 == -1) {
                intArg0 = cs2_6350(6);
                intArg1 = -1;
            }
            break;
        case 26:
            if (ifGetHide(Component.interface_79.component_79_16) == 1) {
                intArg0 = Component.interface_79.component_79_26;
                intArg1 = -1;
            }
            break;
        case 27:
            if (cs2_1314(5) == 1) {
                intArg0 = cs2_6350(5);
                intArg1 = -1;
            }
            break;
    }
    return [intArg0, intArg1];
}
