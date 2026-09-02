/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_resend]

function quickchat_phrase_resend(): void {
    varc_126 = varc_131;
    varcstr_27 = varcstr_28;
    varc_127 = 0;

    if (ifGetHide(Component.interface_137.component_137_0) == 1) {
        if (getWindowMode() >= 2) {
            ifSetGraphic(Graphic.aif_chat_background, Component.interface_752.component_752_1);
            ifSetAlpha(false, Component.interface_752.component_752_1);
            ifSetHide(false, Component.interface_752.component_752_1);
            ccDeleteAll(Component.interface_752.component_752_2);
            cs2_5392(Component.interface_752.component_752_2, 0, 0);
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
    }
    proc_quickchat_phrase(Component.interface_137.component_137_1, varc_130, -1);
}
