/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6018

function cs2_6018(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return loadClanSettingVarbit<189>();
        case 1:
            return loadClanSettingVarbit<190>();
        case 2:
            return loadClanSettingVarbit<191>();
        case 3:
            return loadClanSettingVarbit<192>();
        case 4:
            return loadClanSettingVarbit<193>();
        case 5:
            return loadClanSettingVarbit<194>();
        case 100:
            return loadClanSettingVarbit<195>();
        case 101:
            return loadClanSettingVarbit<196>();
        case 102:
            return loadClanSettingVarbit<197>();
        case 103:
            return loadClanSettingVarbit<198>();
        case 125:
            return loadClanSettingVarbit<199>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
