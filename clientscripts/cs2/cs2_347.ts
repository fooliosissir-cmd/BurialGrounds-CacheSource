/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_347

function cs2_347(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 == -1) {
            ccSetOnTimer(hook(player_kit_player_rotate, "Iii", [event_com, event_comsubid, 0]));
            ccSetOnClick(hook(cs2_347, "Iii", [event_com, event_comsubid, event_mousex]));
        } else {
            intArg2 = intArg2 - ccGetWidth() / 2;
            if (intArg2 >= 0) {
                ccSetOnTimer(hook(player_kit_player_rotate, "Iii", [event_com, event_comsubid, 1]));
            } else {
                ccSetOnTimer(hook(player_kit_player_rotate, "Iii", [event_com, event_comsubid, -1]));
            }
            ccSetOnClick(hook(cs2_347, "Iii", [event_com, event_comsubid, -1]));
        }
    }
}
