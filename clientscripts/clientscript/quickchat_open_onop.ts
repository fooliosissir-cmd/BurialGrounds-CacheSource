/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,quickchat_open_onop]

function quickchat_open_onop(intArg0: number): void {
    let [int1, int2, int3, int4, int5, int6] = cs2_4590();

    if (intArg0 == 1) {
        varc_1651 = 0;
        chatSetMode(0);
        cs2_1558(false);
        return;
    } else if (intArg0 == 2) {
        quickchat_open(0, "");
    } else if (intArg0 == 3) {
        varc_1651 = 1;
        chatSetMode(1);
        cs2_1558(false);
        return;
    } else if (intArg0 == 4) {
        if (clanGetChatCount() > 0) {
            quickchat_open(2, "");
        } else {
            varc_chat_view = 0;
            cs2_181(0);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            mes("You aren't in a Friends Chat channel.");
            return;
        }
    } else if (intArg0 == 5) {
        varc_1651 = 2;
        chatSetMode(2);
        cs2_1558(false);
        return;
    } else if (intArg0 == 6) {
        if (int1 >= 0) {
            if (int2 >= int3) {
                quickchat_open(8, "");
            } else {
                mesTyped(43, 0, "Your rank is not high enough to chat in the Clan Chat.");
                return;
            }
        } else {
            varc_chat_view = 0;
            cs2_181(0);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            mes("You aren't in a Clan Chat channel.");
            return;
        }
    } else if (intArg0 == 7) {
        varc_1651 = 3;
        chatSetMode(3);
        cs2_1558(false);
        return;
    } else if (intArg0 == 8) {
        if (int4 >= 0) {
            if (int5 >= int6) {
                quickchat_open(10, "");
            } else {
                mesTyped(43, 0, "Guests cannot chat in this visited Clan channel.");
                return;
            }
        } else {
            varc_chat_view = 0;
            cs2_181(0);
            cs2_178();
            rebuildchatbox();
            cs2_89();
            mes("You aren't a guest in a Clan Chat channel.");
            return;
        }
    }
}
