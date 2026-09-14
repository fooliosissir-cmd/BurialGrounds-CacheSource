/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5147

function cs2_5147(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }
    let int2: number = 0;

    if (clanProfileFind() == 1) {
        int2 = pushVarClan<2132>() - dateMinutes();
        if (int2 < 360 && intArg0 < 126) {
            return 0;
        }
    }

    switch (intArg0) {
        case 100:
            return pushVarClanSettingBit<253>();
        case 101:
            return pushVarClanSettingBit<254>();
        case 102:
            return pushVarClanSettingBit<255>();
        case 103:
            return pushVarClanSettingBit<256>();
        case 125:
            return pushVarClanSettingBit<257>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
