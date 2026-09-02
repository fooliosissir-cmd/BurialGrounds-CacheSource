/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_enter_search]

function proc_quickchat_enter_search(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    varc_159 = 0;
    varc_158 = 0;
    let int4: number = 0;

    while (ccFind(intArg0, int4) == 1) {
        if (int4 == intArg2) {
            ccHookMouseEnter(noHook(""));
            ccHookMouseExit(noHook(""));
            if (ccFind<1>(intArg1, int4) == 1) {
                ccSetHide<1>(false);
                ccSetColour<1>(colour(0x969777));
            }
        } else {
            ccHookMouseEnter(hook(cs2_1082, "iIi", [intArg3 - 1, intArg1, int4]));
            ccHookMouseExit(hook(cs2_1083, "iIi", [intArg3 - 1, intArg1, int4]));
            if (ccFind<1>(intArg1, int4) == 1) {
                ccSetHide<1>(true);
            }
        }
        int4 = int4 + 1;
    }
    varc_128 = -1;
    varc_129 = 0;
    varcstr_30 = "";
    let str0: string = "Search phrases...";

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
    ifSetHide(true, Component.interface_137.component_137_9);
    ifSetHide(false, Component.interface_137.component_137_13);
    ifSetHide(true, Component.interface_137.component_137_17);
    ifSetHide(true, Component.interface_137.component_137_1);
    ifSetHide(false, Component.interface_137.component_137_3);
    ifSetColour(colour(0x000000), Component.interface_137.component_137_3);
    ifSetTextFont(Graphic.p12_full, Component.interface_137.component_137_3);
    ifSetTextAlign(0, 1, 0, Component.interface_137.component_137_3);
    ifSetText(str0, Component.interface_137.component_137_3);
    ifSetTextShadow(false, Component.interface_137.component_137_3);
    ccDeleteAll(Component.interface_137.component_137_16);
    ifSetText("Search for: *", Component.interface_137.component_137_14);
    ifSetOnKey(hook(cs2_1901, "izIIIIi", [event_keycode, event_keychar, Component.interface_137.component_137_1, Component.interface_137.component_137_14, Component.interface_137.component_137_16, Component.interface_137.component_137_15, 0]), Component.interface_137.component_137_13);
    ifSetScrollSize(0, 0, Component.interface_137.component_137_16);
    scrollbar_resize(Component.interface_137.component_137_15, Component.interface_137.component_137_16, 0);
}
