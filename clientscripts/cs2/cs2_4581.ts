/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4581

function cs2_4581(intArg0: number): void {
    let int1: number = -1;
    let int2: number = -1;

    if (activeClanChannelFindAffined() == 1 && activeClanSettingsFindAffined() == 1) {
        int1 = activeClanChannelGetUserSlot(removetags(chatPlayerNameUnfiltered()));
        if (int1 >= 0) {
            int2 = activeClanChannelGetUserRank(int1);
            if (int2 >= 100) {
                varcstr_350 = activeClanSettingsGetbanneddisplayname(intArg0);
            }
        }
    }
}
