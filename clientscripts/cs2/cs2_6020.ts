/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6020

function cs2_6020(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<200>();
        case 1:
            return pushVarClanSettingBit<201>();
        case 2:
            return pushVarClanSettingBit<202>();
        case 3:
            return pushVarClanSettingBit<203>();
        case 4:
            return pushVarClanSettingBit<204>();
        case 5:
            return pushVarClanSettingBit<205>();
        case 100:
            return pushVarClanSettingBit<206>();
        case 101:
            return pushVarClanSettingBit<207>();
        case 102:
            return pushVarClanSettingBit<208>();
        case 103:
            return pushVarClanSettingBit<209>();
        case 125:
            return pushVarClanSettingBit<210>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
