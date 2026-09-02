/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_listdialog]

function quickchat_phrase_listdialog(intArg0: number): void {
    varc_128 = -1;
    let str0: string = chatPhraseGetText(intArg0);

    if (varc_126 == 1) {
        str0 = "To " + varcstr_27 + ": " + "<col=800000>" + str0;
    } else if (varc_126 == 2) {
        str0 = "[" + "<col=0000ff>" + fcGetChatDisplayName() + "<col=000000>" + "]: " + "<col=800000>" + str0;
    } else if (varc_126 == 8) {
        if (activeClanChannelFindAffined() == 1) {
            str0 = "[" + "<col=0000ff>" + activeClanChannelGetClanName() + "<col=000000>" + "]: " + "<col=800000>" + str0;
        }
    } else if (varc_126 == 10) {
        if (activeClanChannelFindListened() == 1) {
            str0 = "[" + "<col=0000ff>" + activeClanChannelGetClanName() + "<col=000000>" + "]: " + "<col=800000>" + str0;
        }
    } else {
        str0 = "<col=0000ff>" + str0;
    }
    ifSetHide(true, Component.interface_137.component_137_50);
    ifSetOnKey(noHook(""), Component.interface_137.component_137_55);
    ifSetHide(false, Component.interface_137.component_137_0);
    ifSetHide(true, Component.interface_137.component_137_7);
    ifSetHide(false, Component.interface_137.component_137_9);
    ifSetHide(true, Component.interface_137.component_137_13);
    ifSetHide(true, Component.interface_137.component_137_17);
    ifSetHide(true, Component.interface_137.component_137_1);
    ifSetHide(false, Component.interface_137.component_137_3);
    ifSetColour(colour(0x000000), Component.interface_137.component_137_3);
    ifSetTextFont(Graphic.p12_full, Component.interface_137.component_137_3);
    ifSetTextAlign(0, 1, 0, Component.interface_137.component_137_3);
    ifSetText(str0, Component.interface_137.component_137_3);
    ifSetTextShadow(false, Component.interface_137.component_137_3);
    ccDeleteAll(Component.interface_137.component_137_12);
    let int1: Enum = qcGetPhraseValue(intArg0, varc_134, 0);
    ccCreate(Component.interface_137.component_137_12, 3, 0);
    let int2: number = ifGetWidth(Component.interface_137.component_137_12);
    let int3: number = int2 - 8;
    let int4: number = 1;
    let int5: number = 0;
    defineArray(0, type_int, 250);
    str0 = enumOp(type_int, type_string, int1, 0);

    while (compare("", str0) != 0 && int4 < 250) {
        ccCreate(Component.interface_137.component_137_12, 4, int4);
        ccSetPosition(4, 14 * int5, 0, 0);
        ccSetSize(int3, 14, 0, 0);
        ccSetColour(colour(0x000000));
        ccSetText(str0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextShadow(false);
        ccHookMouseEnter(hook(cs2_1045, "iIi", [int4, Component.interface_137.component_137_12, int5]));
        ccSetOnClick(hook(clientscript_quickchat_phrase_int, "Iei", [Component.interface_137.component_137_1, intArg0, int4 - 1]));
        array0[int5] = int5;
        str0 = enumOp(type_int, type_string, int1, int4);
        int4 = int4 + 1;
        int5 = int5 + 1;
    }
    let int6: number = int5 - 1;

    if (compare(enumOp(type_int, type_string, int1, 1000), "non-alpha") != 0) {
        cs2_520(0, 0, int6, int1);
        int5 = 0;
        while (int5 <= int6) {
            if (ccFind(Component.interface_137.component_137_12, array0[int5] + 1) == 1) {
                ccSetPosition(4, 14 * int5, 0, 0);
                ccHookMouseEnter(hook(cs2_1045, "iIi", [array0[int5] + 1, Component.interface_137.component_137_12, int5]));
            }
            int5 = int5 + 1;
        }
    }
    int5 = 0;

    while (int5 < 250) {
        cs2_1384(int5, array0[int5]);
        int5 = int5 + 1;
    }
    ifSetOnKey(hook(cs2_1046, "izIIIei", [event_keycode, event_keychar, Component.interface_137.component_137_1, Component.interface_137.component_137_12, Component.interface_137.component_137_11, intArg0, int4 - 1]), Component.interface_137.component_137_12);
    ifSetScrollSize(0, 14 * (int4 - 1), Component.interface_137.component_137_12);
    proc_scrollbar_vertical(Component.interface_137.component_137_11, Component.interface_137.component_137_12, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    scrollbar_resize(Component.interface_137.component_137_11, Component.interface_137.component_137_12, 0);
}
