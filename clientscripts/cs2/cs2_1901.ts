/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1901

function cs2_1901(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: number): void {
    if (intArg0 == 104) {
        if (intArg6 == 0) {
            return;
        }
        if (varc_128 <= 0) {
            varc_128 = intArg6 - 1;
        } else {
            varc_128 = varc_128 - 1;
        }
        if (ccFind(intArg4, varc_128 + 1) == 1) {
            if (ccFind<1>(intArg4, 0) == 1) {
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetColour<1>(colour(0x577E45));
                ccSetfill<1>(true);
            }
            if (ccGetY() < ifGetScrollY(intArg4)) {
                scrollbar_resize(intArg5, intArg4, ifGetScrollY(intArg4) - ccGetHeight());
            } else if (ccGetY() + ccGetHeight() > ifGetHeight(intArg4) + ifGetScrollY(intArg4)) {
                scrollbar_resize(intArg5, intArg4, ifGetScrollHeight(intArg4));
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
        if (ccFind(intArg4, varc_128 + 1) == 1) {
            if (ccFind<1>(intArg4, 0) == 1) {
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
                ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
                ccSetColour<1>(colour(0x577E45));
                ccSetfill<1>(true);
            }
            if (ccGetY() + ccGetHeight() > ifGetHeight(intArg4) + ifGetScrollY(intArg4)) {
                scrollbar_resize(intArg5, intArg4, ifGetScrollY(intArg4) + ccGetHeight());
            } else if (ccGetY() < ifGetScrollY(intArg4)) {
                scrollbar_resize(intArg5, intArg4, 0);
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
    let int7: number = stringLength(varcstr_30);
    let int8: number = chatPhraseFind(varcstr_30, false);
    let int9: number = 0;
    let int10: number = -1;

    if (intArg0 == 84) {
        if (varc_128 < 0) {
            if (int7 > 0) {
                varc_129 = 0;
                ifSetOnTimer(noHook(""), intArg3);
                cs2_1904(intArg2, intArg4, intArg5);
            } else {
                proc_quickchat_close();
            }
        } else if (int8 > 0 && ccFind(intArg4, varc_128 + 1) == 1) {
            while (int9 < int8) {
                int10 = chatPhraseFindNext();
                if (compare(ccGetText(), chatPhraseGetText(int10)) == 0) {
                    proc_quickchat_phrase(intArg2, int10, 0);
                    return;
                }
                int9 = int9 + 1;
            }
        }
        return;
    }

    if (intArg0 == 85) {
        if (int7 > 0) {
            varcstr_30 = subString(varcstr_30, 0, int7 - 1);
        } else if (varc_127 == 0) {
            proc_quickchat_close();
        } else {
            varc_128 = -1;
            ifSetHide(true, Component.interface_137.component_137_7);
            ifSetHide(true, Component.interface_137.component_137_9);
            ifSetHide(true, Component.interface_137.component_137_13);
            ifSetHide(false, Component.interface_137.component_137_17);
            ifSetHide(false, Component.interface_137.component_137_1);
            ifSetHide(true, Component.interface_137.component_137_3);
            proc_quickchat_return(intArg2, 0);
            return;
        }
    } else if (charIsprintable(intArg1) == 1 && int7 < 80) {
        varcstr_30 = removetags(appendChar(varcstr_30, intArg1));
    } else {
        return;
    }
    ifSetText("Search for: " + varcstr_30 + "*", intArg3);
    varc_129 = 50;
    ifSetOnTimer(hook(cs2_1903, "IIII", [intArg2, intArg3, intArg4, intArg5]), intArg3);
}
