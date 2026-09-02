/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5149

function cs2_5149(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return 0;
        case 1:
            return 0;
        case 2:
            return 0;
        case 3:
            return 0;
        case 4:
            return 0;
        case 5:
            return 0;
        case 100:
            return loadClanSettingVarbit<151>();
        case 101:
            return loadClanSettingVarbit<152>();
        case 102:
            return loadClanSettingVarbit<153>();
        case 103:
            return loadClanSettingVarbit<154>();
        case 125:
            return loadClanSettingVarbit<155>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
