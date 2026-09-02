/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_pane_friendschat_op]

function lobbyscreen_pane_friendschat_op(intArg0: number, strArg0: string): void {
    switch (intArg0) {
        case 6:
            friendAdd(removetags(strArg0));
            break;
        case 7:
            ignoreAdd(removetags(strArg0));
            break;
        case 8:
            friendDel(removetags(strArg0));
            break;
        case 9:
            ignoreDel(removetags(strArg0));
            break;
        case 10:
            friendschat_kick(strArg0);
            break;
    }
}
