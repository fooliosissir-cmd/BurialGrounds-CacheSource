/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobby_popup_close]

function clientscript_lobby_popup_close(): void {
    proc_lobby_popup_close();

    if (userDetailLobbyPlayage() == 0 || compare(subString(chatPlayerNameUnfiltered(), 0, 1), "#") == 0) {
        proc_lobbyscreen_leavelobby();
    }
}
