/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5964

function cs2_5964(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<316>();
        case 1:
            return loadClanSettingVarbit<317>();
        case 2:
            return loadClanSettingVarbit<318>();
        case 3:
            return loadClanSettingVarbit<319>();
        case 4:
            return loadClanSettingVarbit<320>();
        case 5:
            return loadClanSettingVarbit<321>();
        case 100:
            return loadClanSettingVarbit<322>();
        case 101:
            return loadClanSettingVarbit<323>();
        case 102:
            return loadClanSettingVarbit<324>();
        case 103:
            return loadClanSettingVarbit<325>();
        case 125:
            return loadClanSettingVarbit<326>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
