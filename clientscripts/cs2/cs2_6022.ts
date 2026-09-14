/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6022

function cs2_6022(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<211>();
        case 1:
            return pushVarClanSettingBit<212>();
        case 2:
            return pushVarClanSettingBit<213>();
        case 3:
            return pushVarClanSettingBit<214>();
        case 4:
            return pushVarClanSettingBit<215>();
        case 5:
            return pushVarClanSettingBit<216>();
        case 100:
            return pushVarClanSettingBit<217>();
        case 101:
            return pushVarClanSettingBit<218>();
        case 102:
            return pushVarClanSettingBit<219>();
        case 103:
            return pushVarClanSettingBit<220>();
        case 125:
            return pushVarClanSettingBit<221>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
