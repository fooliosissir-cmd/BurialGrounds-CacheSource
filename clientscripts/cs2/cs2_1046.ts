/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1046

function cs2_1046(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: number, intArg6: number): void {
    let int7: number = 1;
    let int8: number = 0;
    let int9: number = 1000;
    let int10: number = -1;

    if (charIsalphanumeric(intArg1) == 1) {
        while (int8 < intArg6) {
            if (ccFind(intArg3, cs2_1844(int8) + 1) == 1 && stringIndexofChar(lowercase(ccGetText()), charTolowercase(intArg1), 0) == 0 && ccFind<1>(intArg3, 0) == 1) {
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetColour<1>(colour(0x577E45));
                ccSetfill<1>(true);
                if (int8 < varc_128) {
                    if (ccGetY() < ifGetScrollY(intArg3)) {
                        scrollbar_resize(intArg4, intArg3, ccGetY());
                    }
                } else if (int8 > varc_128 && ccGetY() + ccGetHeight() > ifGetHeight(intArg3) + ifGetScrollY(intArg3)) {
                    scrollbar_resize(intArg4, intArg3, ccGetY() + ccGetHeight() - ifGetHeight(intArg3));
                }
                varc_128 = int8;
                return;
            }
            int8 = int8 + 1;
        }
        return;
    }

    if (intArg0 == 104) {
        if (intArg6 == 0) {
            return;
        }
        if (varc_128 <= 0) {
            varc_128 = intArg6 - 1;
        } else {
            varc_128 = varc_128 - 1;
        }
        if (ccFind(intArg3, cs2_1844(varc_128) + 1) == 1) {
            if (ccFind<1>(intArg3, 0) == 1) {
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetColour<1>(colour(0x577E45));
                ccSetfill<1>(true);
            }
            if (ccGetY() < ifGetScrollY(intArg3)) {
                scrollbar_resize(intArg4, intArg3, ifGetScrollY(intArg3) - ccGetHeight());
            } else if (ccGetY() + ccGetHeight() > ifGetHeight(intArg3) + ifGetScrollY(intArg3)) {
                scrollbar_resize(intArg4, intArg3, ifGetScrollHeight(intArg3));
            }
        }
        return;
    }

    if (intArg0 == 105) {
        if (intArg6 == 0) {
            return;
        }
        if (varc_128 == intArg6 - 1) {
            varc_128 = 0;
        } else {
            varc_128 = varc_128 + 1;
        }
        if (ccFind(intArg3, cs2_1844(varc_128) + 1) == 1) {
            if (ccFind<1>(intArg3, 0) == 1) {
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetColour<1>(colour(0x577E45));
                ccSetfill<1>(true);
            }
            if (ccGetY() + ccGetHeight() > ifGetHeight(intArg3) + ifGetScrollY(intArg3)) {
                scrollbar_resize(intArg4, intArg3, ifGetScrollY(intArg3) + ccGetHeight());
            } else if (ccGetY() < ifGetScrollY(intArg3)) {
                scrollbar_resize(intArg4, intArg3, 0);
            }
        }
        return;
    }

    if (intArg0 == 102) {
        quickchat_open(varc_126, varcstr_27);
        return;
    }

    if (intArg0 == 13) {
        proc_quickchat_close();
        return;
    }

    if (intArg0 == 84) {
        if (varc_128 >= 0 && ccFind(intArg3, varc_128 + 1) == 1) {
            proc_quickchat_phrase_int(intArg2, intArg5, cs2_1844(varc_128));
        }
        return;
    }

    if (intArg0 == 85) {
        if (varc_127 == 0) {
            proc_quickchat_close();
        } else {
            varc_128 = -1;
            ifSetHide(true, Component.interface_137.component_137_7);
            ifSetHide(true, Component.interface_137.component_137_9);
            ifSetHide(true, Component.interface_137.component_137_13);
            ifSetHide(false, Component.interface_137.component_137_17);
            ifSetHide(false, Component.interface_137.component_137_1);
            ifSetHide(true, Component.interface_137.component_137_3);
        }
        return;
    }
}
