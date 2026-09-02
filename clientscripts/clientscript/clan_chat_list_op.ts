/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_list_op]

function clan_chat_list_op(intArg0: number, intArg1: number, strArg0: string): void {
    let int2: number = -1;
    let int3: number = -1;
    let int4: number = -1;

    switch (intArg0) {
        case 1:
            varc_1650 = 1;
            varcstr_23 = strArg0;
            cs2_1558(false);
            return;
        case 5:
            mes("Attempting to add " + strArg0 + " to your Friends List.");
            strArg0 = removetags(strArg0);
            friendAdd(strArg0);
            break;
        case 6:
            mes("Attempting to add " + strArg0 + " to your Ignore List.");
            strArg0 = removetags(strArg0);
            ignoreAdd(strArg0);
            break;
        case 7:
            mes("Attempting to remove " + strArg0 + " from your Friends List.");
            strArg0 = removetags(strArg0);
            friendDel(strArg0);
            break;
        case 8:
            mes("Attempting to remove " + strArg0 + " from your Ignore List.");
            strArg0 = removetags(strArg0);
            ignoreDel(strArg0);
            break;
        case 9:
            clan_chat_kick_find(strArg0);
            break;
    }
}
