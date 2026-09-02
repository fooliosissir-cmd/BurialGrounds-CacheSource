/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_clanchat_join]

function lobbyscreen_pane_clanchat_join(): void {
    if (fcGetChatCount() > 0) {
        fcLeaveChat();
    } else {
        lobbyscreen_input("Join Chat Channel", "", 8, "", "");
    }
}
