/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_friendschat_load]

function lobbyscreen_pane_friendschat_load(intArg0: number): void {
    ifSetSize(ifGetX(Component.interface_589.component_589_45) - ifGetX(Component.interface_589.component_589_43), 0, 0, 1, Component.interface_589.component_589_55);
    ifSetSize(ifGetWidth(Component.interface_589.component_589_51) - ifGetWidth(Component.interface_589.component_589_55) - 2, 0, 0, 1, Component.interface_589.component_589_57);
    ifSetScrollSize(0, 0, Component.interface_589.component_589_51);
    ifSetScrollPos(0, 0, Component.interface_589.component_589_51);
    proc_scrollbar_vertical(Component.interface_589.component_589_52, Component.interface_589.component_589_51, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetScrollSize(0, 0, Component.interface_589.component_589_23);
    ifSetScrollPos(0, 0, Component.interface_589.component_589_23);
    proc_scrollbar_vertical(Component.interface_589.component_589_24, Component.interface_589.component_589_23, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetOnClanChannelTransmit(hook(clientscript_lobbyscreen_pane_friendschat_build, "IIIIII", [Component.interface_589.component_589_55, Component.interface_589.component_589_56, Component.interface_589.component_589_57, Component.interface_589.component_589_53, Component.interface_589.component_589_51, Component.interface_589.component_589_52]), Component.interface_589.component_589_51);
    ifSetOnFriendTransmit(hook(clientscript_lobbyscreen_pane_friendschat_build, "IIIIII", [Component.interface_589.component_589_55, Component.interface_589.component_589_56, Component.interface_589.component_589_57, Component.interface_589.component_589_53, Component.interface_589.component_589_51, Component.interface_589.component_589_52]), Component.interface_589.component_589_51);
    proc_lobbyscreen_pane_friendschat_build(Component.interface_589.component_589_55, Component.interface_589.component_589_56, Component.interface_589.component_589_57, Component.interface_589.component_589_53, Component.interface_589.component_589_51, Component.interface_589.component_589_52);

    if (fcGetChatCount() > 0) {
        ifSetText("Leave chat channel", Component.interface_589.component_589_41);
        ifSetOp(1, "Leave chat channel", Component.interface_589.component_589_39);
    } else {
        ifSetText("Join chat channel", Component.interface_589.component_589_41);
        ifSetOp(1, "Join chat channel", Component.interface_589.component_589_39);
    }
    varcstr_lobbyscreen_input_friendschat = "";
    cs2_3024(Component.interface_589.component_589_31);
    varc_lobby_caret_friendschat = stringLength(varcstr_lobbyscreen_input_friendschat);
    ifSetOnClick(hook(cs2_4570, "iII", [event_mousex, Component.interface_589.component_589_27, Component.interface_589.component_589_28]), Component.interface_589.component_589_27);
    cs2_4571(Component.interface_589.component_589_27, Component.interface_589.component_589_28, varcstr_lobbyscreen_input_friendschat);
    ifSetHide(true, Component.interface_589.component_589_28);
}
