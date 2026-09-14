/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6024

function cs2_6024(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<222>();
        case 1:
            return pushVarClanSettingBit<223>();
        case 2:
            return pushVarClanSettingBit<224>();
        case 3:
            return pushVarClanSettingBit<225>();
        case 4:
            return pushVarClanSettingBit<226>();
        case 5:
            return pushVarClanSettingBit<227>();
        case 100:
            return pushVarClanSettingBit<228>();
        case 101:
            return pushVarClanSettingBit<229>();
        case 102:
            return pushVarClanSettingBit<230>();
        case 103:
            return pushVarClanSettingBit<231>();
        case 125:
            return pushVarClanSettingBit<232>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
