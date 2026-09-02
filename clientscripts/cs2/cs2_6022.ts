/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6022

function cs2_6022(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<211>();
        case 1:
            return loadClanSettingVarbit<212>();
        case 2:
            return loadClanSettingVarbit<213>();
        case 3:
            return loadClanSettingVarbit<214>();
        case 4:
            return loadClanSettingVarbit<215>();
        case 5:
            return loadClanSettingVarbit<216>();
        case 100:
            return loadClanSettingVarbit<217>();
        case 101:
            return loadClanSettingVarbit<218>();
        case 102:
            return loadClanSettingVarbit<219>();
        case 103:
            return loadClanSettingVarbit<220>();
        case 125:
            return loadClanSettingVarbit<221>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
