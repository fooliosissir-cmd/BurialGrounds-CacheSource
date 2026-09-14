/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6014

function cs2_6014(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<167>();
        case 1:
            return pushVarClanSettingBit<168>();
        case 2:
            return pushVarClanSettingBit<169>();
        case 3:
            return pushVarClanSettingBit<170>();
        case 4:
            return pushVarClanSettingBit<171>();
        case 5:
            return pushVarClanSettingBit<172>();
        case 100:
            return pushVarClanSettingBit<173>();
        case 101:
            return pushVarClanSettingBit<174>();
        case 102:
            return pushVarClanSettingBit<175>();
        case 103:
            return pushVarClanSettingBit<176>();
        case 125:
            return pushVarClanSettingBit<177>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
