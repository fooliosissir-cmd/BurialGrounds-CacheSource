/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,aif_tooltip]

function aif_tooltip(intArg0: component, intArg1: component, intArg2: number, strArg0: string, intArg3: number, intArg4: graphic, intArg5: graphic, intArg6: colour, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number): void {
    if (tooltip_time(25) == 0) {
        return;
    }
    let int12: number = 0;
    let int13: number = 0;

    if (ccFind<1>(intArg0, ifGetNextSubId(intArg0) - 1) == 1 && (ccFind(intArg1, intArg2) == 1 || (intArg2 == -1 && ifFind(intArg1) == 1)) && ccGetGraphic<1>() == 5613) {
        switch (intArg9) {
            case 3:
                if (ccGet2dangle<1>() == 0) {
                    int13 = ifGetHeight(intArg0);
                    int12 = cc_gety_absolute() + intArg11 - (trh_esc_mouseleave(intArg0) + int13 / 2);
                    int13 = (int13 - 35) / 2;
                    int12 = max(min(int12, int13), 0 - int13);
                    ccSetPosition<1>(0, int12, 2, 1);
                    return;
                }
                break;
            case 1:
                if (ccGet2dangle<1>() == 32768) {
                    int13 = ifGetHeight(intArg0);
                    int12 = cc_gety_absolute() + intArg11 - (trh_esc_mouseleave(intArg0) + int13 / 2);
                    int13 = (int13 - 35) / 2;
                    int12 = max(min(int12, int13), 0 - int13);
                    ccSetPosition<1>(0, int12, 0, 1);
                    return;
                }
                break;
            case 0:
                if (ccGet2dangle<1>() == 49152) {
                    int13 = ifGetWidth(intArg0);
                    int12 = cc_getx_absolute() + intArg10 - (if_getx_absolute(intArg0) + int13 / 2);
                    int13 = (int13 - 35) / 2;
                    int12 = max(min(int12, int13), 0 - int13);
                    ccSetPosition<1>(int12, 0, 1, 2);
                    return;
                }
                break;
            default:
                if (ccGet2dangle<1>() == 16384) {
                    int13 = ifGetWidth(intArg0);
                    int12 = cc_getx_absolute() + intArg10 - (if_getx_absolute(intArg0) + int13 / 2);
                    int13 = (int13 - 35) / 2;
                    int12 = max(min(int12, int13), 0 - int13);
                    ccSetPosition<1>(int12, 0, 1, 0);
                    return;
                }
                break;
        }
    }
    aif_tooltip_draw(intArg0, intArg1, intArg2, strArg0, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11);
}
