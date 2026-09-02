/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_motto_text_init]

function clan_motto_text_init(intArg0: component, intArg1: component, intArg2: component): void {
    ifSetOnKey(hook(clan_motto_text_input, "IIziI", [intArg0, intArg1, event_keychar, event_keycode, intArg2]), intArg0);
    ifSetOnClick(hook(clan_motto_text_click, "IIi", [intArg0, intArg2, event_mousex]), intArg0);
    ifSetOnTimer(hook(cs2_1400, "iI", [clientClock(), intArg2]), intArg0);
}
