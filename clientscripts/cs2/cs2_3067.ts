/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3067

function cs2_3067(intArg0: number): void {
    if (worldListFetch() == 0) {
        ifSetOnTimer(hook(cs2_3067, "i", [intArg0]), Component.interface_906.component_906_187);
        return;
    } else {
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_187);
    }
    let int1: number = -1;

    if (intArg0 == 1) {
        int1 = varc_998;
    } else if (intArg0 == 2) {
        int1 = varc_999;
    } else {
        return;
    }
    let [int2, int3, int4, int5, int6, str0, str1, str2] = worldListStart();
    let int7: number = 0;

    while (int2 != -1 && int7 == 0) {
        if (int2 == int1) {
            int7 = 1;
        } else {
            [int2, int3, int4, int5, int6, str0, str1, str2] = worldListNext();
        }
    }

    if (intArg0 == 1) {
        cs2_3382(Component.interface_906.component_906_191);
    } else if (intArg0 == 2) {
        cs2_3382(Component.interface_906.component_906_192);
    }

    if (int2 > 0) {
        if (mapWorld() != int2) {
            if (worldListSwitch(int2, str2) == 1) {
                varc_loginscreen_pvp_warned = 0;
                proc_lobbyscreen_entergame(Component.interface_906.component_906_186);
            } else {
                cs2_3064(1);
                lobby_popup(-5, 1, "Could not connect you to the chosen world. Please choose another.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
            }
        } else {
            proc_lobbyscreen_entergame(Component.interface_906.component_906_186);
        }
    } else {
        lobby_popup(-5, 1, "World " + tostring(int1) + " is running in a different language or is unavailable.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
    }
}
