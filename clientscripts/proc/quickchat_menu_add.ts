/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_menu_add]

function quickchat_menu_add(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: component = enumOp(type_int, type_component, Enum.enum_1550, intArg1);
    let int6: component = enumOp(type_int, type_component, Enum.enum_1551, intArg1);

    ccDeleteAll(int5);
    ccDeleteAll(int6);

    if (int5 == -1) {
        return;
    }
    ccCreate(intArg0, 4, intArg1);
    ccSetColour(colour(0x000000));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(1, 1, 0);
    let str0: string = qcGetName(intArg2);
    ccSetOpBase(str0);
    ccSetOnOpt(hook(clientscript_quickchat_return, "Ii", [intArg0, intArg1]));
    ccSetOp(1, "Return to: ");

    if (intArg1 > 0) {
        str0 = " " + "<col=0000ff>" + str0 + " " + "<img=2>";
    } else if (varc_126 == 1) {
        str0 = " To " + varcstr_27 + ": " + "<col=800000>" + str0 + " " + "<img=2>";
    } else if (varc_126 == 2) {
        str0 = " [" + "<col=0000ff>" + fcGetChatDisplayName() + "<col=000000>" + "]: " + "<col=800000>" + str0 + " " + "<img=2>";
    } else if (varc_126 == 8) {
        if (activeClanChannelFindAffined() == 1) {
            str0 = " [" + "<col=0000ff>" + activeClanChannelGetClanName() + "<col=000000>" + "]: " + "<col=800000>" + str0 + " " + "<img=2>";
        }
    } else if (varc_126 == 10) {
        if (activeClanChannelFindListened() == 1) {
            str0 = " [" + "<col=0000ff>" + activeClanChannelGetClanName() + "<col=000000>" + "]: " + "<col=800000>" + str0 + " " + "<img=2>";
        }
    } else {
        str0 = " " + "<col=0000ff>" + str0 + " " + "<img=2>";
    }
    ccSetText(str0);
    ccSetTextShadow(false);
    ccSetSize(parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full) + 4, ifGetHeight(intArg0), 0, 0);
    ccHookMouseEnter(hook(cs2_1080, "Ii", [Component.interface_137.component_137_2, intArg1]));
    ccHookMouseExit(hook(cs2_1081, "Ii", [Component.interface_137.component_137_2, intArg1]));
    ccCreate<1>(Component.interface_137.component_137_2, 3, intArg1);
    ccSetSize<1>(ccGetWidth(), ccGetHeight(), 0, 0);
    ccSetColour<1>(colour(0x577E45));
    ccSetfill<1>(true);
    ccSetHide<1>(true);
    ifSetHide(false, int5);
    let int7: number = chatCatGetDesc(intArg2);
    let int8: number = chatCatGetSubCatCount(intArg2);
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = -1;
    let int14: number = -1;
    let int15: number = -1;
    let int16: number = 0;

    while (int9 < int7) {
        ccCreate(int5, 4, int10);
        ccSetColour(colour(0x000000));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        int13 = chatCatGetSubCat(intArg2, int9);
        str0 = qcGetName(int13);
        ccSetOnOpt(hook(clientscript_quickchat_menu_select, "IIiIik", [int5, int6, int10, intArg0, intArg1 + 1, int13]));
        ccSetOpBase(str0);
        ccSetOp(1, "Select: ");
        ccHookMouseEnter(hook(cs2_1082, "iIi", [intArg1, int6, int10]));
        ccHookMouseExit(hook(cs2_1083, "iIi", [intArg1, int6, int10]));
        int15 = charTouppercase(chatCatGetSubCatShortcut(intArg2, int9));
        if (charIsalphanumeric(int15) == 1) {
            str0 = "<col=555555>" + appendChar("", int15) + ". " + "<col=000000>" + str0 + " " + "<img=2>";
        } else {
            str0 = str0 + " " + "<img=2>";
        }
        ccSetText(str0);
        ccSetTextShadow(false);
        int11 = parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full);
        if (int11 > int12) {
            int12 = int11;
        }
        int9 = int9 + 1;
        int10 = int10 + 1;
    }
    int9 = 0;

    while (int9 < int8) {
        ccCreate(int5, 4, int10);
        ccSetColour(colour(0x000000));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        int14 = chatCatGetPhrase(intArg2, int9);
        str0 = chatPhraseGetText(int14);
        ccSetOnOpt(hook(clientscript_quickchat_phrase, "Iei", [intArg0, int14, intArg1]));
        ccSetOpBase(str0);
        ccSetOp(1, "Send: ");
        ccHookMouseEnter(hook(cs2_1082, "iIi", [intArg1, int6, int10]));
        ccHookMouseExit(hook(cs2_1083, "iIi", [intArg1, int6, int10]));
        if (int9 < 10) {
            str0 = "<col=555555>" + tostring((int9 + 1) % 10) + ". " + "<col=000000>" + str0;
        }
        ccSetText(str0);
        ccSetTextShadow(false);
        int11 = parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full);
        if (int11 > int12) {
            int12 = int11;
        }
        int9 = int9 + 1;
        int10 = int10 + 1;
    }

    if (intArg3 != -1) {
        ccCreate(int5, 4, int10);
        ccSetColour(colour(0x000000));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        str0 = qcGetName(intArg3);
        ccSetOnOpt(hook(clientscript_quickchat_menu_select, "IIiIik", [int5, int6, int10, intArg0, intArg1 + 1, intArg3]));
        ccSetOpBase(str0);
        ccSetOp(1, "Select: ");
        ccHookMouseEnter(hook(cs2_1082, "iIi", [intArg1, int6, int10]));
        ccHookMouseExit(hook(cs2_1083, "iIi", [intArg1, int6, int10]));
        str0 = "<col=555555>" + "X. " + "<col=000000>" + str0 + " " + "<img=2>";
        ccSetText(str0);
        ccSetTextShadow(false);
        int11 = parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full);
        if (int11 > int12) {
            int12 = int11;
        }
        int10 = int10 + 1;
    }

    if (intArg4 == 1) {
        ccCreate(int5, 4, int10);
        ccSetColour(colour(0x000000));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        ccSetOnOpt(hook(clientscript_quickchat_enter_search, "IIii", [int5, int6, int10, intArg1]));
        ccSetOpBase("Search phrases");
        ccSetOp(1, "Select: ");
        ccHookMouseEnter(hook(cs2_1082, "iIi", [intArg1, int6, int10]));
        ccHookMouseExit(hook(cs2_1083, "iIi", [intArg1, int6, int10]));
        ccSetText("<col=555555>" + "Enter. " + "<col=000000>" + "Search " + "<img=2>");
        ccSetTextShadow(false);
        int11 = parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full);
        if (int11 > int12) {
            int12 = int11;
        }
        int10 = int10 + 1;
    }
    ifSetOnKey(hook(quickchat_onkey, "izIikei", [event_keycode, event_keychar, intArg0, intArg1, intArg2, -1, int10]), int5);
    int9 = 0;
    let int17: number = 0;

    while (ccFind(int5, int9) == 1) {
        if (int16 * 14 + 14 > ifGetHeight(int5)) {
            int17 = int17 + int12 + 4;
            int16 = 0;
        }
        ccSetSize(int12, 14, 0, 0);
        ccSetPosition(int17 + 2, int16 * 14, 0, 0);
        ccCreate<1>(int6, 3, int9);
        ccSetSize<1>(ccGetWidth() + 4, ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX() - 2, ccGetY(), 0, 0);
        ccSetColour<1>(colour(0x577E45));
        ccSetfill<1>(true);
        ccSetHide<1>(true);
        int9 = int9 + 1;
        int16 = int16 + 1;
    }
    int17 = int17 + int12 + 4;
    let int18: component = ifGetLayer(int5);
    ifSetSize(int17, ifGetHeight(int18), 0, 0, int5);
    ifSetSize(int17, ifGetHeight(int18), 0, 0, int6);
    ifSetPosition(ifGetX(int5) + int17, 0, 0, 0, enumOp(type_int, type_component, Enum.enum_1550, intArg1 + 1));
    proc_quickchat_return(intArg0, intArg1);
}
