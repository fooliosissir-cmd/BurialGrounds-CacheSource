/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,quickchat_onkey]

function quickchat_onkey(intArg0: number, intArg1: number, intArg2: component, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    if (ifGetHide(enumOp(type_int, type_component, Enum.enum_1550, intArg3 + 1)) == 0) {
        return;
    }
    let int7: component = enumOp(type_int, type_component, Enum.enum_1551, intArg3);

    if (intArg0 == 104) {
        if (intArg6 == 0) {
            return;
        }
        if (ccFind(int7, varc_128) == 1) {
            ccSetHide(true);
        }
        if (varc_128 <= 0) {
            varc_128 = intArg6 - 1;
        } else {
            varc_128 = varc_128 - 1;
        }
        if (ccFind(int7, varc_128) == 1 && ccGetHide() == 1) {
            ccSetHide(false);
            ccSetColour(colour(0x577E45));
        }
        return;
    }

    if (intArg0 == 105) {
        if (intArg6 == 0) {
            return;
        }
        if (ccFind(int7, varc_128) == 1) {
            ccSetHide(true);
        }
        if (varc_128 == intArg6 - 1) {
            varc_128 = 0;
        } else {
            varc_128 = varc_128 + 1;
        }
        if (ccFind(int7, varc_128) == 1 && ccGetHide() == 1) {
            ccSetHide(false);
            ccSetColour(colour(0x577E45));
        }
        return;
    }
    let int8: number = 0;
    let int9: number = 0;

    if (intArg0 == 84) {
        if (varc_128 < 0) {
            if (intArg4 != 32769 && intArg3 == 0) {
                proc_quickchat_enter_search(enumOp(type_int, type_component, Enum.enum_1550, intArg3), enumOp(type_int, type_component, Enum.enum_1551, intArg3), varc_128, intArg3 + 1);
            }
        } else if (intArg4 != -1) {
            int8 = chatCatGetDesc(intArg4);
            int9 = chatCatGetSubCatCount(intArg4);
            if (varc_128 == int8 + int9) {
                if (intArg3 == 0 && cs2_1036() != -1 && ccFind(enumOp(type_int, type_component, Enum.enum_1550, intArg3), varc_128) == 1) {
                    proc_quickchat_menu_select(enumOp(type_int, type_component, Enum.enum_1550, intArg3), enumOp(type_int, type_component, Enum.enum_1551, intArg3), varc_128, intArg2, intArg3 + 1, cs2_1036());
                }
            } else if (varc_128 < int8) {
                proc_quickchat_menu_select(enumOp(type_int, type_component, Enum.enum_1550, intArg3), enumOp(type_int, type_component, Enum.enum_1551, intArg3), varc_128, intArg2, intArg3 + 1, chatCatGetSubCat(intArg4, varc_128));
            } else if (varc_128 < int8 + int9) {
                proc_quickchat_phrase(intArg2, chatCatGetPhrase(intArg4, varc_128 - int8), intArg3);
            } else {
                proc_quickchat_enter_search(enumOp(type_int, type_component, Enum.enum_1550, intArg3), enumOp(type_int, type_component, Enum.enum_1551, intArg3), varc_128, intArg3 + 1);
            }
        } else if (intArg5 != -1) {
            int8 = 0;
            int9 = chatPhraseGetautoresponsecount(intArg5);
            proc_quickchat_phrase(intArg2, chatPhraseGetautoresponse(intArg5, varc_128), intArg3);
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

    if (intArg0 == 85 && intArg3 > 0) {
        proc_quickchat_return(intArg2, intArg3 - 1);
        return;
    }

    if (charIsalphanumeric(intArg1) == 0) {
        return;
    }
    intArg1 = charTouppercase(intArg1);
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = -1;

    if (intArg4 != -1) {
        int8 = chatCatGetDesc(intArg4);
        int9 = chatCatGetSubCatCount(intArg4);
        if (intArg3 == 0 && compare("X", appendChar("", intArg1)) == 0 && cs2_1036() != -1) {
            int10 = int8 + int9;
            if (ccFind(enumOp(type_int, type_component, Enum.enum_1550, intArg3), int10) == 1) {
                proc_quickchat_menu_select(enumOp(type_int, type_component, Enum.enum_1550, intArg3), enumOp(type_int, type_component, Enum.enum_1551, intArg3), int10, intArg2, intArg3 + 1, cs2_1036());
            }
            return;
        }
        int10 = 0;
        while (int11 < int8) {
            int12 = charTouppercase(chatCatGetSubCatShortcut(intArg4, int11));
            if (int12 == intArg1) {
                proc_quickchat_menu_select(enumOp(type_int, type_component, Enum.enum_1550, intArg3), enumOp(type_int, type_component, Enum.enum_1551, intArg3), int10, intArg2, intArg3 + 1, chatCatGetSubCat(intArg4, int10));
                return;
            }
            int10 = int10 + 1;
            int11 = int11 + 1;
        }
    } else {
        int8 = 0;
        int9 = chatPhraseGetautoresponsecount(intArg5);
    }

    if (charIsnumeric(intArg1) == 0) {
        return;
    }
    let int13: number = stringIndexofChar("0123456789", intArg1, 0);

    if (int13 == 0) {
        int13 = 10;
    }

    if (int13 > int9) {
        return;
    }
    int10 = int13 - 1;

    if (intArg4 != -1) {
        proc_quickchat_phrase(intArg2, chatCatGetPhrase(intArg4, int10), intArg3);
    } else if (intArg5 != -1) {
        proc_quickchat_phrase(intArg2, chatPhraseGetautoresponse(intArg5, int10), intArg3);
    }
}
