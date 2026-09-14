/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4293

function cs2_4293(): number {
    let int0: number = -1;

    if (activeClanChannelFindAffined() == 1) {
        int0 = activeClanChannelGetUserSlot(removetags(chatPlayerName()));
        if (int0 != -1) {
            return activeClanChannelGetUserRank(int0);
        }
    }
    return -1;
}
