/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_88

function cs2_88(intArg0: number, intArg1: number, strArg0: string): void {
    strArg0 = removetags(strArg0);

    switch (intArg0) {
        case 7:
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
        case 8:
            ignoreAdd(strArg0);
            break;
        case 9:
            quickchat_respond(5, strArg0, chatGethistoryphrase(intArg1));
            break;
        case 10:
            varcstr_snapshot_name = strArg0;
            break;
    }
}
