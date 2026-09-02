/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3058

function cs2_3058(): void {
    ifOpenSubClient(Component.interface_906.component_906_208, Interface.interface_907);
    cs2_2998();
    ifOpenSubClient(Component.interface_906.component_906_209, Interface.interface_910);
    cs2_3103();
    ifOpenSubClient(Component.interface_906.component_906_210, Interface.interface_909);
    cs2_3023();
    lobbyscreen_pane_friendslist_chat_load(Component.interface_909.component_909_49);
    cs2_3043(Component.interface_909.component_909_66);
    ifOpenSubClient(Component.interface_906.component_906_212, Interface.interface_912);
    lobbyscreen_pane_clanchat_load(59768841);
    lobbyscreen_pane_clanchat_chat_load(Component.interface_912.component_912_10);
    ifOpenSubClient(Component.interface_906.component_906_211, Interface.interface_589);
    lobbyscreen_pane_friendschat_load(38600715);
    lobbyscreen_pane_friendschat_chat_load(Component.interface_589.component_589_12);
    ifOpenSubClient(Component.interface_906.component_906_213, Interface.interface_911);
    lobbyscreen_options_load();
    ifSetOnChatTransmit(hook(lobbyscreen_chat_handler, "III", [Component.interface_909.component_909_49, Component.interface_912.component_912_10, Component.interface_589.component_589_12]), Component.interface_906.component_906_0);
    [varc_1275, varc_1276, varc_1510] = lobbyscreen_chat_count();
}
