/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_countdialog]

function quickchat_phrase_countdialog(intArg0: number): void {
    varc_129 = 0;
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
    ifSetHide(false, Component.interface_137.component_137_7);
    ifSetHide(true, Component.interface_137.component_137_9);
    ifSetHide(true, Component.interface_137.component_137_13);
    ifSetHide(true, Component.interface_137.component_137_17);
    ifSetHide(true, Component.interface_137.component_137_1);
    ifSetHide(false, Component.interface_137.component_137_3);
    ifSetColour(colour(0x000000), Component.interface_137.component_137_3);
    ifSetTextFont(Graphic.p12_full, Component.interface_137.component_137_3);
    ifSetTextAlign(0, 1, 0, Component.interface_137.component_137_3);
    ifSetText(str0, Component.interface_137.component_137_3);
    ifSetTextShadow(false, Component.interface_137.component_137_3);
    ccDeleteAll(Component.interface_137.component_137_7);
    ifSetText("Please enter a value: *", Component.interface_137.component_137_8);
    ifSetOnKey(hook(cs2_1048, "izIIe", [event_keycode, event_keychar, Component.interface_137.component_137_1, Component.interface_137.component_137_8, intArg0]), Component.interface_137.component_137_7);
}
