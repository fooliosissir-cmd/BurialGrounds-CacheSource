/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_friendschat_join]

function lobbyscreen_pane_friendschat_join(): void {
    if (clanGetChatCount() > 0) {
        clanLeaveChat();
    } else {
        lobbyscreen_input("Join Chat Channel", "", 5, "", "");
    }
}
