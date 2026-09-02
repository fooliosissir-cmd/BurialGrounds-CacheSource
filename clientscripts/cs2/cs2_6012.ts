/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6012

function cs2_6012(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<156>();
        case 1:
            return loadClanSettingVarbit<157>();
        case 2:
            return loadClanSettingVarbit<158>();
        case 3:
            return loadClanSettingVarbit<159>();
        case 4:
            return loadClanSettingVarbit<160>();
        case 5:
            return loadClanSettingVarbit<161>();
        case 100:
            return loadClanSettingVarbit<162>();
        case 101:
            return loadClanSettingVarbit<163>();
        case 102:
            return loadClanSettingVarbit<164>();
        case 103:
            return loadClanSettingVarbit<165>();
        case 125:
            return loadClanSettingVarbit<166>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
