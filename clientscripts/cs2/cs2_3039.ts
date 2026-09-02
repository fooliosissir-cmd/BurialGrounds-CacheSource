/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3039

function cs2_3039(intArg0: number, intArg1: number, intArg2: number, strArg0: string): void {
    switch (intArg0) {
        case 1:
            if (userDetailQuickChat() == 0) {
                lobbyscreen_input("Send message to " + strArg0, "", 0, strArg0, "");
            } else {
                mes("Users restricted to quick-chat cannot send messages from the Lobby.");
            }
            break;
        case 2:
            proc_lobby_friends_join(intArg1);
            break;
        case 3:
        case 4:
            mes("That player is currently offline.");
            break;
        case 10:
            friendDel(removetags(strArg0));
            break;
    }
}
