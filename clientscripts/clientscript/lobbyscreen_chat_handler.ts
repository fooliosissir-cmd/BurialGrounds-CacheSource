/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_chat_handler]

function lobbyscreen_chat_handler(intArg0: component, intArg1: component, intArg2: component): void {
    let [int3, int4, int5] = lobbyscreen_chat_count();
    proc_lobbyscreen_pane_friendslist_chat_build(intArg0);
    proc_lobbyscreen_pane_clanchat_chat_build(intArg1);
    proc_lobbyscreen_pane_friendschat_chat_build(intArg2);

    if (ifGetHide(Component.interface_906.component_906_210) == 1 && int3 > varc_1275) {
        ifSetOnTimer(hook(lobbyscreen_chat_notify, "iII", [clientClock(), Component.interface_906.component_906_210, event_com]), Component.interface_906.component_906_216);
    }

    if (ifGetHide(Component.interface_906.component_906_212) == 1 && int4 > varc_1276) {
        ifSetOnTimer(hook(lobbyscreen_chat_notify, "iII", [clientClock(), Component.interface_906.component_906_212, event_com]), Component.interface_906.component_906_218);
    }

    if (ifGetHide(Component.interface_906.component_906_211) == 1 && int5 > varc_1510) {
        ifSetOnTimer(hook(lobbyscreen_chat_notify, "iII", [clientClock(), Component.interface_906.component_906_211, event_com]), Component.interface_906.component_906_217);
    }
    varc_1275 = int3;
    varc_1276 = int4;
    varc_1510 = int5;
}
