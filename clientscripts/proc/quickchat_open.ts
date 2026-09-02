/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_open]

function quickchat_open(intArg0: number, strArg0: string): void {
    if (varc_has_displayname_client == 0) {
        return;
    }

    if (intArg0 == 2 && compare("", fcGetChatDisplayName()) == 0) {
        mes("You need to be in a Friends Chat channel to use Friends Channel Quick Chat.");
        return;
    }

    if (intArg0 == 8 && activeClanChannelFindAffined() == 0) {
        mes("You need to be in a Clan to use Clan Channel Quick Chat.");
        return;
    }

    if (intArg0 == 10 && activeClanChannelFindListened() == 0) {
        mes("You need to be a guest in a Clan Channel to use Guest Clan Quick Chat.");
        return;
    }

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
    let int1: number = 85;
    let int2: number = cs2_1036();
    let int3: number = 1;

    if (intArg0 == 3) {
        int1 = 32769;
        int2 = -1;
        int3 = 0;
    }
    varc_126 = intArg0;
    varcstr_27 = strArg0;
    varc_127 = 1;
    quickchat_menu_add(Component.interface_137.component_137_1, 0, int1, int2, int3);
}
