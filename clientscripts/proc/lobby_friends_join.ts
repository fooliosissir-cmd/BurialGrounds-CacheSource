/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_friends_join]

function proc_lobby_friends_join(intArg0: number): void {
    let int1: number;
    let int2: number;
    let str0: string;
    let str1: string;

    if (worldListFetch() == 0) {
        ifSetOnTimer(hook(clientscript_lobby_friends_join, "i", [intArg0]), Component.interface_909.component_909_14);
        return;
    } else {
        ifSetOnTimer(noHook(""), Component.interface_909.component_909_14);
    }
    [int2, int1, int1, int1, str0, str0, str1] = worldListSpecific(intArg0);

    if (int2 == -1) {
        mes("Sorry, you can't join that person.");
    } else if (worldListSwitch(intArg0, str1) == 1) {
        varc_loginscreen_pvp_warned = 0;
        cs2_3143(0, "Switched to game world " + tostring(intArg0));
        proc_lobbyscreen_entergame(Component.interface_906.component_906_186);
    } else {
        cs2_3143(1, "Sorry, we couldn't contact world " + tostring(intArg0) + "." + "<br>" + "Please choose a different world.");
        mes("Sorry, we couldn't contact world " + tostring(intArg0) + ". Please choose a different world.");
    }
}
