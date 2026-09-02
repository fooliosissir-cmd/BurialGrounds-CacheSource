/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6010

function cs2_6010(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<295>();
        case 1:
            return loadClanSettingVarbit<296>();
        case 2:
            return loadClanSettingVarbit<297>();
        case 3:
            return loadClanSettingVarbit<298>();
        case 4:
            return loadClanSettingVarbit<299>();
        case 5:
            return loadClanSettingVarbit<300>();
        case 100:
            return loadClanSettingVarbit<243>();
        case 101:
            return loadClanSettingVarbit<244>();
        case 102:
            return loadClanSettingVarbit<245>();
        case 103:
            return loadClanSettingVarbit<246>();
        case 125:
            return loadClanSettingVarbit<247>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
