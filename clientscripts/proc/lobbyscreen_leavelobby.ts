/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_leavelobby]

function proc_lobbyscreen_leavelobby(): void {
    worldListPingworlds(false);
    lobbyLeaveLobby();
}
