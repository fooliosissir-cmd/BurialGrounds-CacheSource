/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3100

function cs2_3100(intArg0: number): void {
    let int1: number = lobbyEntergamereply();

    if (int1 == -3) {
        return;
    } else if (int1 == 21 && intArg0 == 13) {
        proc_lobby_hop_abort();
        return;
    } else if (intArg0 == 13) {
        proc_lobby_popup_close();
        return;
    }
}
