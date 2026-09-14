/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6018

function cs2_6018(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerName()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }

    switch (intArg0) {
        case 0:
            return pushVarClanSettingBit<189>();
        case 1:
            return pushVarClanSettingBit<190>();
        case 2:
            return pushVarClanSettingBit<191>();
        case 3:
            return pushVarClanSettingBit<192>();
        case 4:
            return pushVarClanSettingBit<193>();
        case 5:
            return pushVarClanSettingBit<194>();
        case 100:
            return pushVarClanSettingBit<195>();
        case 101:
            return pushVarClanSettingBit<196>();
        case 102:
            return pushVarClanSettingBit<197>();
        case 103:
            return pushVarClanSettingBit<198>();
        case 125:
            return pushVarClanSettingBit<199>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
