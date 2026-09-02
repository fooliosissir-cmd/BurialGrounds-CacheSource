/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_qfc_text_init]

function clan_qfc_text_init(intArg0: component, intArg1: component): void {
    ifSetOnKey(hook(clan_qfc_text_input, "IziI", [intArg0, event_keychar, event_keycode, intArg1]), intArg0);
    ifSetOnClick(hook(clan_qfc_text_click, "IIi", [intArg0, intArg1, event_mousex]), intArg0);
    ifSetOnTimer(hook(cs2_1400, "iI", [clientClock(), intArg1]), intArg0);
}
