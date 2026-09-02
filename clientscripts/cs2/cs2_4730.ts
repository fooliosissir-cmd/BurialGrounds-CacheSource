/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4730

function cs2_4730(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): number {
    if (stringLength(varcstr_1) >= 3) {
        if (compare(subString(varcstr_1, 0, 3), "///") == 0) {
            if (intArg0 >= 0) {
                if (intArg1 >= intArg2) {
                    chatSetMode(3);
                    varcstr_1 = subString(varcstr_1, 3, stringLength(varcstr_1));
                    if (compare(varcstr_1, "") != 0) {
                        chatSendpublic(varcstr_1);
                    }
                    chatSetMode(varc_1651);
                    return 1;
                } else {
                    mesTyped(43, 0, "Guests cannot chat in this Clan Chat channel.");
                    varcstr_1 = "";
                    varc_1028 = 0;
                    cs2_1558(false);
                    return 1;
                }
            } else {
                varc_chat_view = 0;
                cs2_181(0);
                cs2_178();
                rebuildchatbox();
                cs2_89();
                mes("You aren't a guest in a visited Clan Chat channel.");
                varcstr_1 = "";
                varc_1028 = 0;
                return 1;
            }
        } else if (compare(subString(varcstr_1, 0, 2), "//") == 0) {
            if (intArg3 >= 0) {
                if (intArg4 >= intArg5) {
                    chatSetMode(2);
                    varcstr_1 = subString(varcstr_1, 2, stringLength(varcstr_1));
                    if (compare(varcstr_1, "") != 0) {
                        chatSendpublic(varcstr_1);
                    }
                    chatSetMode(varc_1651);
                    return 1;
                } else {
                    mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                    varcstr_1 = "";
                    varc_1028 = 0;
                    cs2_1558(false);
                    return 1;
                }
            } else {
                varc_chat_view = 0;
                cs2_181(0);
                cs2_178();
                rebuildchatbox();
                cs2_89();
                mes("You aren't in a Clan Chat channel.");
                varcstr_1 = "";
                varc_1028 = 0;
                return 1;
            }
        } else if (compare(subString(varcstr_1, 0, 1), "/") == 0) {
            chatSetMode(1);
            varcstr_1 = subString(varcstr_1, 1, stringLength(varcstr_1));
            if (compare(varcstr_1, "") != 0) {
                chatSendpublic(varcstr_1);
            }
            chatSetMode(varc_1651);
            return 1;
        }
    } else if (stringLength(varcstr_1) >= 2) {
        if (compare(subString(varcstr_1, 0, 2), "//") == 0) {
            if (intArg3 >= 0) {
                if (intArg4 >= intArg5) {
                    chatSetMode(2);
                    varcstr_1 = subString(varcstr_1, 2, stringLength(varcstr_1));
                    if (compare(varcstr_1, "") != 0) {
                        chatSendpublic(varcstr_1);
                    }
                    chatSetMode(varc_1651);
                    return 1;
                } else {
                    mesTyped(43, 0, "Your rank is not high enough to talk in your clan chat.");
                    varcstr_1 = "";
                    varc_1028 = 0;
                    cs2_1558(false);
                    return 1;
                }
            } else {
                varc_chat_view = 0;
                cs2_181(0);
                cs2_178();
                rebuildchatbox();
                cs2_89();
                mes("You aren't in a Clan Chat channel.");
                varcstr_1 = "";
                varc_1028 = 0;
                return 1;
            }
        } else if (compare(subString(varcstr_1, 0, 1), "/") == 0) {
            chatSetMode(1);
            varcstr_1 = subString(varcstr_1, 1, stringLength(varcstr_1));
            if (compare(varcstr_1, "") != 0) {
                chatSendpublic(varcstr_1);
            }
            chatSetMode(varc_1651);
            return 1;
        }
    } else if (stringLength(varcstr_1) >= 1 && compare(subString(varcstr_1, 0, 1), "/") == 0) {
        chatSetMode(1);
        varcstr_1 = subString(varcstr_1, 1, stringLength(varcstr_1));
        if (compare(varcstr_1, "") != 0) {
            chatSendpublic(varcstr_1);
        }
        chatSetMode(varc_1651);
        return 1;
    }
    return 0;
}
