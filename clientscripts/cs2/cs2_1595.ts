/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1595

function cs2_1595(intArg0: number, strArg0: string, strArg1: string): void {
    if (clanIsself(intArg0) == 0) {
        if (friendTest(strArg1) == 1) {
            ccSetOp(5, "Message " + strArg0);
            ccSetOp(7, "Remove friend " + strArg0);
        } else if (ignoreTest(strArg1) == 1) {
            ccSetOp(8, "Remove ignore " + strArg0);
        } else {
            ccSetOp(5, "Add friend " + strArg0);
            ccSetOp(6, "Add ignore " + strArg0);
        }
    }

    if (clanGetChatRank() >= clanGetChatMinKick() && clanGetChatRank() > clanGetChatUserRank(intArg0)) {
        ccSetOp(9, "Kick/ban user " + strArg0);
    }
}
