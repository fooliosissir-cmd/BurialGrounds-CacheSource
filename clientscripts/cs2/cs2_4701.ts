/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4701

function cs2_4701(intArg0: number, intArg1: number, intArg2: number, strArg0: string): void {
    varc_lobby_queue_id = intArg1;
    varc_lobby_queue_world = intArg2;
    varcstr_lobby_queue_host = strArg0;

    if (intArg0 == 1) {
        if (varc_login_reply_last == 43 || varc_login_reply_last == 42) {
            lobbyscreen_input_full("Leave queue", "Are you sure you wish to leave the queue, you will lose your position if you do.", 0, 12, "", "", 1);
            return;
        }
        cs2_3141(intArg2, strArg0);
        if (intArg1 > -1 && ccFind(Component.interface_910.component_910_64, intArg1) == 1) {
            ifSetHide(false, Component.interface_910.component_910_67);
            ifSetPosition(0, ccGetY(), 0, 0, Component.interface_910.component_910_67);
        }
        if (mapWorld() == varc_998) {
            if (ccFind(Component.interface_910.component_910_21, 3) == 1) {
                ccSetHide(false);
            }
        } else if (ccFind(Component.interface_910.component_910_21, 3) == 1) {
            ccSetHide(true);
        }
        if (mapWorld() == varc_999) {
            if (ccFind(Component.interface_910.component_910_22, 3) == 1) {
                ccSetHide(false);
            }
        } else if (ccFind(Component.interface_910.component_910_22, 3) == 1) {
            ccSetHide(true);
        }
        cs2_3064(1);
    }
}
