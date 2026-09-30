/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_load_timer]

function lobbyscreen_load_timer(intArg0: boolean, intArg1: number, intArg2: number): void {
    if (varp_2567 != 0) {
        // Burial Grounds has no legacy RuneScape advertisement/billing flow.
        // Keep the real lobby-ready gate, then always enter the custom lobby initializer.
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_0);
        proc_lobbyscreen_load(intArg0, intArg1);
        varc_1882 = 0;
    }
}
