/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_clanchat_chat_op]

function lobbyscreen_pane_clanchat_chat_op(intArg0: number, strArg0: string, strArg1: string): void {
    let int1: number = -1;
    let int2: number = -1;

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
            clan_chat_kick_find(removetags(strArg1));
            break;
    }
}
