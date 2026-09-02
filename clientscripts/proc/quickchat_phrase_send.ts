/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_send]

function quickchat_phrase_send(intArg0: number): void {
    let int1: number = intArg0;

    if (intArg0 == 105) {
        if (varbit_7774 != 0) {
            intArg0 = 1021;
        } else if (varp_394 == 0) {
            intArg0 = 561;
        }
    }
    activeChatPhrasePrepare(intArg0);
    let int2: number = 0;
    let int3: number = chatPhraseGetdynamiccommand(intArg0);
    let int4: number = -1;

    while (int2 < int3 && int2 < 10) {
        switch (chatPhraseGetdynamiccommandparamEnum(intArg0, int2)) {
            case 0:
                quickchat_phrase_setint(int2);
                break;
            case 1:
                quickchat_phrase_setobj(int2);
                break;
            case 10:
                quickchat_phrase_setobj(int2);
                break;
            case 2:
                quickchat_phrase_setint(int2);
                break;
        }
        int2 = int2 + 1;
    }

    if (varc_126 == 0 || varc_126 == 4) {
        activeChatPhraseSend();
    } else if (varc_126 == 1) {
        int4 = quickchat_friend_status(varcstr_27);
        if (int4 == 1) {
            activeChatPhraseSendprivate(removetags(varcstr_27));
            cs2_1089();
        } else if (int4 == -1) {
            mes("Sorry, this user is not on your Friends List.");
        } else {
            mes("Sorry, your friend is no longer playing RuneScape.");
        }
    } else if (varc_126 == 5) {
        activeChatPhraseSendprivate(removetags(varcstr_27));
        cs2_1089();
    } else if (varc_126 == 3 || varc_126 == 7) {
        activeChatPhraseSendprivate(removetags(varcstr_27));
        cs2_1089();
    } else if (varc_126 == 2 || varc_126 == 6) {
        qcSendfriendschatmessage();
    } else if (varc_126 == 8 || varc_126 == 9) {
        if (activeClanChannelFindAffined() == 1) {
            qcSendClanChatMessage();
        }
    } else if ((varc_126 == 10 || varc_126 == 11) && activeClanChannelFindListened() == 1) {
        qcSendguestclanchatmessage();
    }
    varc_130 = int1;
    varc_131 = varc_126;
    varcstr_28 = varcstr_27;
    proc_quickchat_close();
}
