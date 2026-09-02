/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5953

function cs2_5953(): void {
    proc_lobby_popup_close();
    lobby_popup(-3, 0, "Logging In - Please Wait", 1, -1, 0, -1, "", "", 0, "", "");
    lobbyLeaveLobby();
}
