/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6012

function cs2_6012(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<156>();
        case 1:
            return pushVarClanSettingBit<157>();
        case 2:
            return pushVarClanSettingBit<158>();
        case 3:
            return pushVarClanSettingBit<159>();
        case 4:
            return pushVarClanSettingBit<160>();
        case 5:
            return pushVarClanSettingBit<161>();
        case 100:
            return pushVarClanSettingBit<162>();
        case 101:
            return pushVarClanSettingBit<163>();
        case 102:
            return pushVarClanSettingBit<164>();
        case 103:
            return pushVarClanSettingBit<165>();
        case 125:
            return pushVarClanSettingBit<166>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
