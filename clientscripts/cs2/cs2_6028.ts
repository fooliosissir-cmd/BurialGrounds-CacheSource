/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6028

function cs2_6028(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 103:
            return loadClanSettingVarbit<305>();
        case 125:
            return loadClanSettingVarbit<306>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
