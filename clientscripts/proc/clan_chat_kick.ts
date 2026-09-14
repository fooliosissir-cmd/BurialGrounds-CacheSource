/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_chat_kick]

function clan_chat_kick(strArg0: string): void {
    let int0: number = -1;
    let int1: number = -1;
    let int2: number = -1;
    let int3: number = activeClanChannelGetUserSlot(strArg0);

    if (int3 >= 0) {
        if (int3 == -1) {
            return;
        }
        int0 = activeClanChannelGetUserRank(int3);
        int1 = activeClanChannelGetUserSlot(removetags(chatPlayerName()));
        if (int1 >= 0) {
            if (int1 == int3) {
                mesTyped(43, 0, "You cannot temporarily ban yourself.");
                return;
            }
            int2 = activeClanChannelGetUserRank(int1);
            if (int1 == -1) {
                return;
            }
            if (int2 >= activeClanChannelGetRankKick()) {
                if (int0 > -1) {
                    mesTyped(43, 0, "You can only temporarily ban guests.");
                    mesTyped(43, 0, "A clan admin can remove your clanmate.");
                } else if (int2 > int0) {
                    activeClanChannelKickUser(activeClanChannelGetUserSlot(strArg0));
                    chatSetMode(2);
                    chatSendpublic("[Attempting to kick/ban user from this channel.]");
                } else {
                    mesTyped(43, 0, "You can only kick people with a lower rank than yourself.");
                }
            } else {
                mesTyped(43, 0, "You do not have sufficient rank to kick.");
            }
        }
    } else {
        mesTyped(43, 0, "Could not find that guest to kick from your Clan Chat.");
    }
}
