/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friend_op]

function friend_op(intArg0: number, intArg1: number, strArg0: string): void {
    if (varc_has_displayname_client == 0) {
        return;
    }
    let str1: string = removetags(strArg0);

    switch (intArg0) {
        case 1:
            varc_1650 = 1;
            varcstr_23 = str1;
            cs2_1558(false);
            return;
        case 2:
            if (friendPlatform(intArg1) == 0) {
                quickchat_open(1, str1);
            } else {
                quickchat_open(3, str1);
            }
            break;
        case 3:
        case 4:
            mes("That player is currently offline.");
            break;
        case 5:
            friendDel(str1);
            break;
    }
}
