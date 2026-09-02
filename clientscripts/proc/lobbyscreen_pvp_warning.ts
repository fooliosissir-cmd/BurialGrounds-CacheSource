/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pvp_warning]

function proc_lobbyscreen_pvp_warning(intArg0: number): void {
    varc_loginscreen_pvp_warned = intArg0;
    ifSetHide(true, Component.interface_906.component_906_58);

    if (varc_loginscreen_pvp_warned == 1) {
        proc_lobbyscreen_entergame(Component.interface_906.component_906_186);
    }
}
