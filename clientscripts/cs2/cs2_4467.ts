/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4467

function cs2_4467(): number {
    let int0: number = -1;
    let int1: number = -1;

    if (activeClanChannelFindAffined() == 1) {
        int1 = activeClanChannelGetUserSlot(removetags(chatPlayerName()));
        if (int1 >= 0) {
            int0 = activeClanChannelGetUserRank(int1);
            if (int0 >= activeClanChannelGetRankKick()) {
                return 1;
            }
        }
    }
    return 0;
}
