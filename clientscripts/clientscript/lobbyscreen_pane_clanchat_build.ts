/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_clanchat_build]

function clientscript_lobbyscreen_pane_clanchat_build(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    if (activeClanChannelFindAffined() == 1) {
        proc_lobbyscreen_pane_clanchat_build(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
        if (ifGetHide(Component.interface_906.component_906_212) == 0) {
            cs2_3161(1);
        } else {
            cs2_3161(0);
        }
    } else {
        lobbyscreen_pane_clanchat_clear(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5);
        cs2_3161(0);
    }
}
