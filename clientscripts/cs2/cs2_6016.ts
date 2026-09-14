/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6016

function cs2_6016(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<178>();
        case 1:
            return pushVarClanSettingBit<179>();
        case 2:
            return pushVarClanSettingBit<180>();
        case 3:
            return pushVarClanSettingBit<181>();
        case 4:
            return pushVarClanSettingBit<182>();
        case 5:
            return pushVarClanSettingBit<183>();
        case 100:
            return pushVarClanSettingBit<184>();
        case 101:
            return pushVarClanSettingBit<185>();
        case 102:
            return pushVarClanSettingBit<186>();
        case 103:
            return pushVarClanSettingBit<187>();
        case 125:
            return pushVarClanSettingBit<188>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
