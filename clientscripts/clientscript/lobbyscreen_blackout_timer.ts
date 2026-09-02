/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_blackout_timer]

function lobbyscreen_blackout_timer(intArg0: component): void {
    let int1: number = ifGetTrans(intArg0);

    if (int1 < 253) {
        ifSetTrans(int1 + 2, intArg0);
    } else {
        ifSetTrans(255, intArg0);
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_335);
    }
}
