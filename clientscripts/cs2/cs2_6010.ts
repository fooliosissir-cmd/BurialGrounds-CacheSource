/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6010

function cs2_6010(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<295>();
        case 1:
            return pushVarClanSettingBit<296>();
        case 2:
            return pushVarClanSettingBit<297>();
        case 3:
            return pushVarClanSettingBit<298>();
        case 4:
            return pushVarClanSettingBit<299>();
        case 5:
            return pushVarClanSettingBit<300>();
        case 100:
            return pushVarClanSettingBit<243>();
        case 101:
            return pushVarClanSettingBit<244>();
        case 102:
            return pushVarClanSettingBit<245>();
        case 103:
            return pushVarClanSettingBit<246>();
        case 125:
            return pushVarClanSettingBit<247>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
