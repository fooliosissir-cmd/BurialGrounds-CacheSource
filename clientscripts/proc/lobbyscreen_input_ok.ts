/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_input_ok]

function proc_lobbyscreen_input_ok(intArg0: number, strArg0: string): void {
    let int1: number = 0;
    let str1: string = "";
    let str2: string = "";
    let int2: number = -1;
    let str3: string = "";
    let str4: string = "";
    let int3: number = -1;

    if (stringLength(varcstr_lobbyscreen_input) > 0) {
        switch (intArg0) {
            case 0:
                if (stringLength(varcstr_lobbyscreen_input) > 0 && stringLength(strArg0) > 0) {
                    if (chatGetFilterPrivate() == 2) {
                        cs2_3047(1);
                    }
                    chatSendprivate(removetags(strArg0), varcstr_lobbyscreen_input);
                }
                break;
            case 1:
                if (friendCount() < 0) {
                    mes("Unable to update Friends List - system busy.");
                } else if (stringLength(varcstr_lobbyscreen_input) > 0) {
                    friendAdd(varcstr_lobbyscreen_input);
                }
                break;
            case 2:
                if (ignoreCount() < 0) {
                    mes("Unable to update Ignore List - system busy.");
                } else if (stringLength(varcstr_lobbyscreen_input) > 0) {
                    ignoreAdd(varcstr_lobbyscreen_input);
                }
                break;
            case 3:
                if (friendCount() < 0) {
                    mes("Unable to update Friends List - system busy.");
                } else if (stringLength(varcstr_lobbyscreen_input) > 0) {
                    friendDel(varcstr_lobbyscreen_input);
                }
                break;
            case 4:
                if (ignoreCount() < 0) {
                    mes("Unable to update Ignore List - system busy.");
                } else if (stringLength(varcstr_lobbyscreen_input) > 0) {
                    ignoreDel(varcstr_lobbyscreen_input);
                }
                break;
            case 5:
                if (clanGetChatCount() <= 0 && stringLength(varcstr_lobbyscreen_input) > 0) {
                    clanJoinChat(varcstr_lobbyscreen_input);
                }
                break;
            case 6:
                varc_lobbyscreen_report_abuse_bug = 0;
                openurl("bugtracker_v4", "index.html", 0);
                break;
            case 7:
                if (stringLength(varcstr_lobbyscreen_input) > 0) {
                    clan_chat_kick_find(varcstr_lobbyscreen_input);
                }
                break;
            case 9:
                if (clanGetChatCount() > 0 && stringLength(varcstr_lobbyscreen_input) > 0) {
                    friendschat_kick(varcstr_lobbyscreen_input);
                }
                break;
            case 10:
                loginCancel();
                varc_login_reply_last = -1;
                break;
            case 12:
                proc_lobbyscreen_input_close();
                loginCancel();
                varc_login_reply_last = -1;
                cs2_4701(1, varc_lobby_queue_id, varc_lobby_queue_world, varcstr_lobby_queue_host);
                return;
        }
    }
    varc_1650 = 0;

    if (int1 == 1) {
        lobbyscreen_input(str1, str2, int2, str3, str4);
    } else {
        proc_lobbyscreen_input_close();
    }
}
