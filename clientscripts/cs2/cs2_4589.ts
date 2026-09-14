/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4589

function cs2_4589(): void {
    ccDeleteAll(Component.interface_1110.component_1110_14);
    ccDeleteAll(Component.interface_1110.component_1110_12);
    ccDeleteAll(Component.interface_1110.component_1110_15);
    ccDeleteAll(Component.interface_1110.component_1110_17);
    ccDeleteAll(Component.interface_1110.component_1110_18);
    ccDeleteAll(Component.interface_1110.component_1110_16);
    ifSetHide(true, Component.interface_1110.component_1110_28);
    ifSetHide(false, Component.interface_1110.component_1110_67);
    ifSetText("You are not currently in a Clan Chat channel.", Component.interface_1110.component_1110_62);
    ifSetHide(true, Component.interface_1110.component_1110_30);
    ifSetHide(false, Component.interface_1110.component_1110_22);
    ifSetHide(false, Component.interface_1110.component_1110_24);
    cs2_4469();
    cs2_5396();
    ifSetGraphic(Graphic.aif_clanchat_icons_13, Component.interface_1110.component_1110_83);
    ifSetHide(true, Component.interface_1110.component_1110_13);
    ifSetSize(1, 19, 0, 0, Component.interface_1110.component_1110_20);
    varc_clan_chat_selected_slot = -1;
    varcstr_clan_channel_selected_name = "";
    ifSetText("", Component.interface_1110.component_1110_27);
    let str0: string = "Join your clan chat channel.";
    ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1110.component_1110_124, event_com, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xF5B241), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1110.component_1110_82);
    ifSetOp(1, "Join Clan Chat channel", Component.interface_1110.component_1110_82);
}
