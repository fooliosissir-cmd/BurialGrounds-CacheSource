/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_chat_notify]

function lobbyscreen_chat_notify(intArg0: number, intArg1: component, intArg2: component): void {
    if (ifGetHide(intArg1) == 0) {
        ccDeleteAll(intArg2);
        ifSetOnTimer(noHook(""), intArg2);
        return;
    }

    if ((clientClock() - intArg0) % 40 < 20) {
        if (ccFind(intArg2, 0) == 1) {
            ccSetHide(false);
        } else {
            ccCreate(intArg2, 3, 0);
            ccSetSize(4, 2, 1, 1);
            ccSetPosition(0, 0, 1, 2);
            ccSetfill(true);
            ccSetTrans(225);
            ccSetColour(colour(0xFFFFFF));
        }
    } else if (ccFind(intArg2, 0) == 1) {
        ccSetHide(true);
    }
}
