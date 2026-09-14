/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_response_add]

function quickchat_response_add(intArg0: component, intArg1: number): void {
    let int2: component = enumOp(type_int, type_component, Enum.enum_1550, 0);
    let int3: component = enumOp(type_int, type_component, Enum.enum_1551, 0);

    ccDeleteAll(int2);
    ccDeleteAll(int3);
    ccCreate(intArg0, 4, 0);
    ccSetColour(colour(0x000000));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetPosition(0, 0, 0, 0);
    let str0: string = chatPhraseGetText(intArg1);

    if (varc_126 == 1) {
        str0 = "From " + varcstr_27 + ": " + "<col=800000>" + str0;
    } else if (varc_126 == 2) {
        str0 = "[" + "<col=0000ff>" + clanGetChatDisplayName() + "<col=000000>" + "] " + varcstr_27 + ": " + "<col=800000>" + str0;
    } else if (varc_126 == 8) {
        if (activeClanChannelFindAffined() == 1) {
            str0 = "[" + "<col=0000ff>" + activeClanChannelGetClanName() + "<col=000000>" + "] " + varcstr_27 + ": " + "<col=800000>" + str0;
        }
    } else if (varc_126 == 10) {
        if (activeClanChannelFindListened() == 1) {
            str0 = "[" + "<col=0000ff>" + activeClanChannelGetClanName() + "<col=000000>" + "] " + varcstr_27 + ": " + "<col=800000>" + str0;
        }
    } else {
        str0 = varcstr_27 + ": " + "<col=0000ff>" + str0;
    }
    ccSetText(str0);
    ccSetTextShadow(false);
    ccSetSize(parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full), ifGetHeight(intArg0), 0, 0);
    ifSetHide(false, int2);
    let int4: number = chatPhraseGetautoresponsecount(intArg1);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = -1;
    let int10: number = 0;

    while (int5 < int4) {
        ccCreate(int2, 4, int6);
        ccSetColour(colour(0x000000));
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        int9 = chatPhraseGetautoresponse(intArg1, int5);
        str0 = chatPhraseGetText(int9);
        ccSetOnOp(hook(clientscript_quickchat_phrase, "Iei", [intArg0, int9, 0]));
        ccSetOpBase(str0);
        ccSetOp(1, "Send: ");
        ccSetOnMouseOver(hook(cs2_1082, "iIi", [0, int3, int6]));
        ccSetOnMouseLeave(hook(cs2_1083, "iIi", [0, int3, int6]));
        if (int5 < 10) {
            str0 = "<col=555555>" + tostring((int5 + 1) % 10) + ". " + "<col=000000>" + str0;
        }
        ccSetText(str0);
        ccSetTextShadow(false);
        int7 = parawidth(str0, ifGetWidth(intArg0), Graphic.p12_full);
        if (int7 > int8) {
            int8 = int7;
        }
        int5 = int5 + 1;
        int6 = int6 + 1;
    }
    ifSetOnKey(hook(quickchat_onkey, "izIikei", [event_keycode, event_keychar, intArg0, 0, -1, intArg1, int6]), int2);
    int5 = 0;
    let int11: number = 0;

    while (ccFind(int2, int5) == 1) {
        if (int10 * 14 + 14 > ifGetHeight(int2)) {
            int11 = int11 + int8 + 4;
            int10 = 0;
        }
        ccSetSize(int8, 14, 0, 0);
        ccSetPosition(int11 + 2, int10 * 14, 0, 0);
        ccCreate<1>(int3, 3, int5);
        ccSetSize<1>(ccGetWidth() + 4, ccGetHeight(), 0, 0);
        ccSetPosition<1>(ccGetX() - 2, ccGetY(), 0, 0);
        ccSetColour<1>(colour(0x577E45));
        ccSetfill<1>(true);
        ccSetHide<1>(true);
        int5 = int5 + 1;
        int10 = int10 + 1;
    }
    int11 = int11 + int8 + 4;
    let int12: component = ifGetLayer(int2);
    ifSetSize(int11, ifGetHeight(int12), 0, 0, int2);
    ifSetSize(int11, ifGetHeight(int12), 0, 0, int3);
    proc_quickchat_return(intArg0, 0);
}
