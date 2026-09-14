/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4431

function cs2_4431(intArg0: component): void {
    let str0: string = "";

    if (activeClanChannelFindAffined() == 1) {
        ifSetOnTimer(noHook(""), intArg0);
        proc_clan_chat_onclansettingstransmit();
        ifSetOnClanSettingsTransmit(hook(clientscript_clan_chat_onclansettingstransmit, "", []), Component.interface_1110.component_1110_3);
        ifSetOnClanChannelTransmit(hook(clientscript_clan_chat_onclansettingstransmit, "", []), Component.interface_1110.component_1110_3);
        ifSetGraphic(Graphic.aif_clanchat_icons_12, Component.interface_1110.component_1110_83);
    } else {
        clan_chat_clearlist();
        str0 = "Join Clan Chat channel.";
        ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1110.component_1110_124, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1110.component_1110_82);
        ifSetOp(1, "Join Clan Chat channel", Component.interface_1110.component_1110_82);
        cs2_4589();
    }
}
