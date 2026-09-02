/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friendschat_list_op]

function friendschat_list_op(intArg0: number, intArg1: number, strArg0: string, strArg1: string): void {
    switch (intArg0) {
        case 5:
            if (friendTest(strArg1) == 1) {
                varc_1650 = 1;
                varcstr_23 = strArg0;
                cs2_1558(false);
                return;
            } else {
                friendAdd(strArg0);
            }
            break;
        case 6:
            ignoreAdd(strArg0);
            break;
        case 7:
            friendDel(strArg0);
            break;
        case 8:
            ignoreDel(strArg0);
            break;
        case 9:
            friendschat_kick(strArg0);
            break;
    }
}
