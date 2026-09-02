/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_respond]

function quickchat_respond(intArg0: number, strArg0: string, intArg1: number): void {
    if (intArg1 == -1 || chatPhraseGetautoresponsecount(intArg1) == 0) {
        return;
    }
    varc_126 = intArg0;
    varcstr_27 = strArg0;
    varc_127 = 1;

    if (getWindowMode() >= 2) {
        ifSetGraphic(Graphic.aif_chat_background, Component.interface_752.component_752_1);
        ifSetAlpha(false, Component.interface_752.component_752_1);
        ifSetHide(false, Component.interface_752.component_752_1);
        ccDeleteAll(Component.interface_752.component_752_2);
        cs2_5392(Component.interface_752.component_752_2, 0, 0);
        cs2_1652(false);
        ifSetHide(true, Component.interface_746.component_746_49);
    }
    ifSetHide(true, Component.interface_137.component_137_50);
    ifSetOnKey(noHook(""), Component.interface_137.component_137_55);
    ifSetHide(false, Component.interface_137.component_137_0);
    ifSetHide(true, Component.interface_137.component_137_7);
    ifSetHide(true, Component.interface_137.component_137_9);
    ifSetHide(true, Component.interface_137.component_137_13);
    ifSetHide(false, Component.interface_137.component_137_17);
    ifSetHide(false, Component.interface_137.component_137_1);
    ifSetHide(true, Component.interface_137.component_137_3);
    ifSetScrollPos(0, 0, Component.interface_137.component_137_17);
    quickchat_response_add(Component.interface_137.component_137_1, intArg1);
}
