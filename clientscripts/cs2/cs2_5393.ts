/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5393

function cs2_5393(): number {
    let int0: number = -1;
    let int1: number = -1;

    if (activeClanChannelFindAffined() == 1) {
        if (compare(varcstr_clan_channel_selected_name, removetags(chatPlayerName())) == 0) {
            return 1;
        }
        int1 = activeClanChannelGetUserSlot(removetags(chatPlayerName()));
        if (int1 >= 0) {
            int0 = activeClanChannelGetUserRank(int1);
            if (cs2_5963(int0) == 1) {
                return 1;
            }
        }
    }
    return 0;
}
