/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6014

function cs2_6014(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<167>();
        case 1:
            return loadClanSettingVarbit<168>();
        case 2:
            return loadClanSettingVarbit<169>();
        case 3:
            return loadClanSettingVarbit<170>();
        case 4:
            return loadClanSettingVarbit<171>();
        case 5:
            return loadClanSettingVarbit<172>();
        case 100:
            return loadClanSettingVarbit<173>();
        case 101:
            return loadClanSettingVarbit<174>();
        case 102:
            return loadClanSettingVarbit<175>();
        case 103:
            return loadClanSettingVarbit<176>();
        case 125:
            return loadClanSettingVarbit<177>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
