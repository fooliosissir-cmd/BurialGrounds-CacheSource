/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4292

function cs2_4292(): number {
    let int0: number = -1;

    if (activeClanChannelFindAffined() == 1) {
        int0 = activeClanChannelGetUserSlot(removetags(chatPlayerName()));
        if (activeClanChannelGetUserRank(int0) >= 100) {
            return 1;
        }
    }
    return 0;
}
