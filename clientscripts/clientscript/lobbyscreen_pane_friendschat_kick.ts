/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_friendschat_kick]

function lobbyscreen_pane_friendschat_kick(): void {
    if (cs2_1891() == 1) {
        deltooltip_action(Component.interface_589.component_589_35);
        lobbyscreen_input("Kick/ban from chat channel", "", 9, "", "");
    }
}
