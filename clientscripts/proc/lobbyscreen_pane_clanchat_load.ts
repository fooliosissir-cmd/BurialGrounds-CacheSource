/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_clanchat_load]

function lobbyscreen_pane_clanchat_load(intArg0: number): void {
    ifSetSize(ifGetX(Component.interface_912.component_912_38) - ifGetX(Component.interface_912.component_912_36), 0, 0, 1, Component.interface_912.component_912_49);
    ifSetSize(ifGetWidth(Component.interface_912.component_912_45) - ifGetWidth(Component.interface_912.component_912_49) - 2, 0, 0, 1, Component.interface_912.component_912_51);
    ifSetScrollSize(0, 0, Component.interface_912.component_912_45);
    ifSetScrollPos(0, 0, Component.interface_912.component_912_45);
    proc_scrollbar_vertical(Component.interface_912.component_912_46, Component.interface_912.component_912_45, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetScrollSize(0, 0, Component.interface_912.component_912_20);
    ifSetScrollPos(0, 0, Component.interface_912.component_912_20);
    proc_scrollbar_vertical(Component.interface_912.component_912_21, Component.interface_912.component_912_20, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetOnClanSettingsTransmit(hook(clientscript_lobbyscreen_pane_clanchat_build, "IIIIII", [Component.interface_912.component_912_49, Component.interface_912.component_912_50, Component.interface_912.component_912_51, Component.interface_912.component_912_47, Component.interface_912.component_912_45, Component.interface_912.component_912_46]), Component.interface_912.component_912_45);
    ifSetOnClanChannelTransmit(hook(clientscript_lobbyscreen_pane_clanchat_build, "IIIIII", [Component.interface_912.component_912_49, Component.interface_912.component_912_50, Component.interface_912.component_912_51, Component.interface_912.component_912_47, Component.interface_912.component_912_45, Component.interface_912.component_912_46]), Component.interface_912.component_912_45);

    if (activeClanChannelFindAffined() == 1) {
        ifSetHide(true, Component.interface_912.component_912_39);
        proc_lobbyscreen_pane_clanchat_build(Component.interface_912.component_912_49, Component.interface_912.component_912_50, Component.interface_912.component_912_51, Component.interface_912.component_912_47, Component.interface_912.component_912_45, Component.interface_912.component_912_46);
        if (ifGetHide(Component.interface_906.component_906_212) == 0) {
            cs2_3161(1);
        } else {
            cs2_3161(0);
        }
    } else {
        ifSetHide(false, Component.interface_912.component_912_39);
        cs2_3161(0);
    }
    varcstr_lobbyscreen_input_clan = "";
    cs2_3024(Component.interface_912.component_912_28);
    cs2_3027(Component.interface_912.component_912_8);
    varc_lobby_caret_clan = stringLength(varcstr_lobbyscreen_input_clan);
    ifSetOnClick(hook(cs2_1335, "iII", [event_mousex, Component.interface_912.component_912_24, Component.interface_912.component_912_25]), Component.interface_912.component_912_24);
    cs2_1390(Component.interface_912.component_912_24, Component.interface_912.component_912_25, varcstr_lobbyscreen_input_clan);
    ifSetHide(true, Component.interface_912.component_912_25);
}
