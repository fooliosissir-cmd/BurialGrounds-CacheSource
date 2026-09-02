/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_friendschat_chat_op]

function lobbyscreen_pane_friendschat_chat_op(intArg0: number, strArg0: string, strArg1: string): void {
    switch (intArg0) {
        case 1:
            if (friendTest(removetags(strArg1)) == 0) {
                friendAdd(removetags(strArg1));
            }
            break;
        case 2:
            if (friendTest(removetags(strArg1)) == 0) {
                ignoreAdd(removetags(strArg1));
            }
            break;
        case 3:
            lobbyscreen_input("Send message to " + strArg0, "", 0, strArg1, "");
            break;
        case 5:
            varcstr_lobbyscreen_report_abuse_name = removetags(strArg0);
            proc_lobbyscreen_report_abuse_stage2();
            break;
        case 10:
            friendschat_kick(removetags(strArg1));
            break;
    }
}
