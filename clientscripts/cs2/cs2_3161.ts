/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3161

function cs2_3161(intArg0: number): void {
    if (intArg0 == 1 && userDetailQuickChat() == 0) {
        ifSetOnKey(hook(lobbyscreen_pane_clanchat_keyboard, "iz", [event_keycode, event_keychar]), Component.interface_912.component_912_23);
        ifSetOnTimer(hook(cs2_1391, "iI", [clientClock(), Component.interface_912.component_912_25]), Component.interface_912.component_912_24);
    } else {
        ifSetOnKey(noHook(""), Component.interface_912.component_912_23);
        ifSetOnTimer(noHook(""), Component.interface_912.component_912_24);
        ifSetText(escape(varcstr_lobbyscreen_input_clan), Component.interface_912.component_912_24);
    }
}
