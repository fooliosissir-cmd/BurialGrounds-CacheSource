/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_load]

function clientscript_lobbyscreen_load(intArg0: boolean, intArg1: number): void {
    ifSetOnTimer(hook(lobbyscreen_load_timer, "1ii", [intArg0, intArg1, varp_2567]), Component.interface_906.component_906_0);
}
