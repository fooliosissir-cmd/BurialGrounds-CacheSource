/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5964

function cs2_5964(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<316>();
        case 1:
            return pushVarClanSettingBit<317>();
        case 2:
            return pushVarClanSettingBit<318>();
        case 3:
            return pushVarClanSettingBit<319>();
        case 4:
            return pushVarClanSettingBit<320>();
        case 5:
            return pushVarClanSettingBit<321>();
        case 100:
            return pushVarClanSettingBit<322>();
        case 101:
            return pushVarClanSettingBit<323>();
        case 102:
            return pushVarClanSettingBit<324>();
        case 103:
            return pushVarClanSettingBit<325>();
        case 125:
            return pushVarClanSettingBit<326>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
