/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chatdefault_init]

function chatdefault_init(): void {
    let int0: number = 0;

    ifSetOnKey(hook(chatdefault_onkey, "iz", [event_keycode, event_keychar]), Component.interface_137.component_137_55);
    ifSetOnChatTransmit(hook(clientscript_chatdefault_updatechatbox, "1", [true]), Component.interface_751.component_751_3);
    ifSetOnClanChannelTransmit(hook(clientscript_chatdefault_updatechatbox, "1", [true]), Component.interface_751.component_751_3);
    ifSetOnFriendTransmit(hook(clientscript_chatdefault_updatechatbox, "1", [false]), Component.interface_751.component_751_3);
    ifSetOnMiscTransmit(hook(cs2_82, "", []), 49217539);
    ifSetOnVarcStrTransmit(hook(cs2_710, "Y", [], [0]), Component.interface_751.component_751_3);
    varcstr_1 = "";
    varc_1028 = 0;
    varc_42 = -1;
    varc_chat_view = 0;
    varc_43 = chatGethistorylength();
    varc_3 = -1;
    varc_4 = 0;
    varcstr_2 = "";
    varcstr_3 = "";
    varcstr_4 = "";
    varcstr_5 = "";
    varcstr_6 = "";
    varcstr_7 = "";
    varcstr_8 = "";
    varcstr_9 = "";
    varcstr_10 = "";
    varcstr_11 = "";
    varcstr_12 = "";
    varcstr_13 = "";
    varcstr_14 = "";
    varcstr_15 = "";
    varcstr_16 = "";
    varcstr_17 = "";
    varcstr_18 = "";
    varcstr_19 = "";
    varcstr_20 = "";
    varcstr_21 = "";
    varcstr_276 = "";
    cs2_1558(true);
    ifSetHide(false, Component.interface_137.component_137_55);

    if (getWindowMode() >= 2) {
        ccDeleteAll(Component.interface_752.component_752_2);
        cs2_5392(Component.interface_752.component_752_2, 22, 0);
        ifSetGraphic(gameframe_skin_graphic(Graphic.graphic_1247), Component.interface_752.component_752_1);
        ifSetAlpha(true, Component.interface_752.component_752_1);
        ifSetHide(false, Component.interface_752.component_752_1);
        ifSetHide(true, Component.interface_137.component_137_51);
        ifSetHide(false, Component.interface_137.component_137_52);
        ifSetColour(colour(0xFFFFFF), Component.interface_137.component_137_56);
        ifSetTextShadow(true, Component.interface_137.component_137_55);
        ifSetColour(colour(0xFFFFFF), Component.interface_137.component_137_55);
    } else {
        ifSetGraphic(Graphic.chat_background, Component.interface_752.component_752_1);
        ifSetHide(false, Component.interface_752.component_752_1);
        ccDeleteAll(Component.interface_752.component_752_2);
        cs2_1088(Component.interface_752.component_752_2, 0);
        ifSetHide(false, Component.interface_137.component_137_51);
        ifSetHide(true, Component.interface_137.component_137_52);
        ifSetColour(colour(0x000000), Component.interface_137.component_137_56);
        ifSetTextShadow(false, Component.interface_137.component_137_55);
        ifSetColour(colour(0x000000), Component.interface_137.component_137_55);
    }
    varc_7 = ifGetHeight(Component.interface_137.component_137_57);
    cs2_178();
    varcstr_partnername = "";
}
