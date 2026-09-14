/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,friendschat_kick]

function friendschat_kick(strArg0: string): void {
    strArg0 = lowercase(removetags(strArg0));
    let int0: number = stringLength(strArg0);
    let int1: number = 0;
    strArg0 = cs2_2332(strArg0, "_", "\xa0");
    strArg0 = cs2_2332(strArg0, "-", "\xa0");
    strArg0 = cs2_2332(strArg0, " ", "\xa0");

    while (stringIndexofString(strArg0, " ", 0) == 0 && int0 > 0) {
        strArg0 = subString(strArg0, 1, int0);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, " ", int0 - 1) == int0 - 1 && int0 > 0) {
        strArg0 = subString(strArg0, 0, int0 - 1);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, "\xa0", 0) == 0 && int0 > 0) {
        strArg0 = subString(strArg0, 1, int0);
        int0 = stringLength(strArg0);
    }

    while (stringIndexofString(strArg0, "\xa0", int0 - 1) == int0 - 1 && int0 > 0) {
        strArg0 = subString(strArg0, 0, int0 - 1);
        int0 = stringLength(strArg0);
    }
    let str1: string = lowercase(removetags(chatPlayerName()));
    int0 = stringLength(str1);
    str1 = cs2_2332(str1, "_", "\xa0");
    str1 = cs2_2332(str1, "-", "\xa0");
    str1 = cs2_2332(str1, " ", "\xa0");

    while (stringIndexofString(str1, " ", 0) == 0 && int0 > 0) {
        str1 = subString(str1, 1, int0);
        int0 = stringLength(str1);
    }

    while (stringIndexofString(strArg0, " ", int0 - 1) == int0 - 1 && int0 > 0) {
        str1 = subString(str1, 0, int0 - 1);
        int0 = stringLength(str1);
    }

    while (stringIndexofString(str1, "\xa0", 0) == 0 && int0 > 0) {
        str1 = subString(str1, 1, int0);
        int0 = stringLength(str1);
    }

    while (stringIndexofString(str1, "\xa0", int0 - 1) == int0 - 1 && int0 > 0) {
        str1 = subString(str1, 0, int0 - 1);
        int0 = stringLength(str1);
    }

    if (compare(strArg0, "") != 0) {
        if (compare(strArg0, str1) == 0) {
            friendschat_kick_mes("You cannot kick or ban yourself.");
            return;
        }
        clanKickUser(strArg0);
        strArg0 = cs2_1814(strArg0);
        chatSetMode(1);
        chatSendpublic("[Attempting to kick/ban user from this Friends Chat.]");
    }
}
