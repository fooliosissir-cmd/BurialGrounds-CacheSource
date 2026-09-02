/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6024

function cs2_6024(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<222>();
        case 1:
            return loadClanSettingVarbit<223>();
        case 2:
            return loadClanSettingVarbit<224>();
        case 3:
            return loadClanSettingVarbit<225>();
        case 4:
            return loadClanSettingVarbit<226>();
        case 5:
            return loadClanSettingVarbit<227>();
        case 100:
            return loadClanSettingVarbit<228>();
        case 101:
            return loadClanSettingVarbit<229>();
        case 102:
            return loadClanSettingVarbit<230>();
        case 103:
            return loadClanSettingVarbit<231>();
        case 125:
            return loadClanSettingVarbit<232>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
