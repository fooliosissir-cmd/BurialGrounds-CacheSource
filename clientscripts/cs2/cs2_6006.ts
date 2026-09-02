/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6006

function cs2_6006(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 100:
            if (loadClanSettingVarbit<233>() == 1) {
                return 1;
            }
            break;
        case 101:
            if (loadClanSettingVarbit<234>() == 1) {
                return 1;
            }
            break;
        case 102:
            if (loadClanSettingVarbit<235>() == 1) {
                return 1;
            }
            break;
        case 103:
            if (loadClanSettingVarbit<236>() == 1) {
                return 1;
            }
            break;
        case 125:
            if (loadClanSettingVarbit<237>() == 1) {
                return 1;
            }
            break;
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
    return 0;
}
