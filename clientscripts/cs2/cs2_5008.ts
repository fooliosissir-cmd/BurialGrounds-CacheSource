/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5008

function cs2_5008(): number {
    let int0: number = -1;
    let int1: number = -1;
    let int2: number = 0;

    if (activeClanSettingsFindAffined() == 1) {
        int0 = activeClanSettingsGetAffinedSlot(chatPlayerName());
        if (int0 < 0) {
            return 0;
        }
        int1 = activeClanSettingsGetAffinedRank(int0);
        int2 = pushVarClan<2132>() - dateMinutes();
        if (int2 < 360) {
            if (int1 < 126) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }
    return 0;
}
