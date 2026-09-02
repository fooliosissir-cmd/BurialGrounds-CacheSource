/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,chat_op]

function chat_op(intArg0: number, intArg1: number, strArg0: string): void {
    strArg0 = removetags(strArg0);
    let str1: string = removetags(chatLineGetcrownedname(intArg1));
    let int2: number = chatGettypebyline(intArg1);

    switch (intArg0) {
        case 1:
            opPlayer(4, strArg0);
            break;
        case 2:
            opPlayer(1, strArg0);
            break;
        case 3:
            opPlayer(7, strArg0);
            break;
        case 4:
            opPlayer(1, strArg0);
            break;
        case 5:
            opPlayer(9, strArg0);
            break;
        case 6:
            if (cs2_2709() == 0) {
                mes("You cannot add a friend until you have entered your date of birth");
                return;
            }
            if (friendTest(strArg0) == 1) {
                if (mapQuickChat() == 0 && userDetailQuickChat() == 0) {
                    varc_1650 = 1;
                    varcstr_23 = strArg0;
                    cs2_1558(false);
                    return;
                }
            } else {
                friendAdd(strArg0);
            }
            break;
        case 7:
            ignoreAdd(strArg0);
            break;
        case 8:
            varcstr_snapshot_name = strArg0;
            break;
        case 9:
            if (int2 == 17) {
                quickchat_respond(4, chatLineGetcrownedname(intArg1), chatLineGetQuickChatId(intArg1));
            } else if (int2 == 18) {
                quickchat_respond(5, chatLineGetcrownedname(intArg1), chatLineGetQuickChatId(intArg1));
            } else if (int2 == 20) {
                quickchat_respond(6, chatLineGetcrownedname(intArg1), chatLineGetQuickChatId(intArg1));
            } else if (int2 == 42) {
                quickchat_respond(9, chatLineGetcrownedname(intArg1), chatLineGetQuickChatId(intArg1));
            } else if (int2 == 45) {
                quickchat_respond(11, chatLineGetcrownedname(intArg1), chatLineGetQuickChatId(intArg1));
            }
            break;
        case 10:
            if (int2 == 41 || int2 == 42) {
                clan_chat_kick_find(strArg0);
            } else if (int2 == 9 || int2 == 20) {
                friendschat_kick(strArg0);
            } else {
                opPlayer(5, strArg0);
            }
            break;
    }
}
