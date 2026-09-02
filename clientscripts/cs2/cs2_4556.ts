/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4556

function cs2_4556(intArg0: number): void {
    if (intArg0 == 1 && userDetailQuickChat() == 0) {
        ifSetOnKey(hook(lobbyscreen_pane_friendschat_keyboard, "iz", [event_keycode, event_keychar]), Component.interface_589.component_589_26);
        ifSetOnTimer(hook(cs2_4572, "iI", [clientClock(), Component.interface_589.component_589_28]), Component.interface_589.component_589_27);
    } else {
        ifSetOnKey(noHook(""), Component.interface_589.component_589_26);
        ifSetOnTimer(noHook(""), Component.interface_589.component_589_27);
        ifSetText(escape(varcstr_lobbyscreen_input_friendschat), Component.interface_589.component_589_27);
    }
}
