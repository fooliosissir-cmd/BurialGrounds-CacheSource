/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6020

function cs2_6020(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<200>();
        case 1:
            return loadClanSettingVarbit<201>();
        case 2:
            return loadClanSettingVarbit<202>();
        case 3:
            return loadClanSettingVarbit<203>();
        case 4:
            return loadClanSettingVarbit<204>();
        case 5:
            return loadClanSettingVarbit<205>();
        case 100:
            return loadClanSettingVarbit<206>();
        case 101:
            return loadClanSettingVarbit<207>();
        case 102:
            return loadClanSettingVarbit<208>();
        case 103:
            return loadClanSettingVarbit<209>();
        case 125:
            return loadClanSettingVarbit<210>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
