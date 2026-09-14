/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5962

function cs2_5962(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 100:
            return pushVarClanSettingBit<311>();
        case 101:
            return pushVarClanSettingBit<312>();
        case 102:
            return pushVarClanSettingBit<313>();
        case 103:
            return pushVarClanSettingBit<314>();
        case 125:
            return pushVarClanSettingBit<315>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
