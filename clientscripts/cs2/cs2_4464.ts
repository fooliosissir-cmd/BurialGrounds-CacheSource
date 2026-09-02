/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4464

function cs2_4464(): number {
    let int0: number = -1;

    if (activeClanSettingsFindAffined() == 1) {
        if (activeClanChannelFindAffined() == 1) {
            int0 = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));
            if (int0 != -1 && activeClanChannelGetUserRank(int0) >= activeClanSettingsGetRankKick()) {
                return 1;
            }
        } else {
            mes("You must be in a clan to do that.");
        }
    } else {
        mes("You must be in a clan to do that.");
    }
    return 0;
}
