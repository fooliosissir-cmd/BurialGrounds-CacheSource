/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5145

function cs2_5145(intArg0: number): number {
    let int1: number = activeClanSettingsGetAffinedSlot(removetags(chatPlayerNameUnfiltered()));

    if (int1 < 0) {
        return 0;
    }

    if (intArg0 == -1) {
        intArg0 = activeClanSettingsGetAffinedRank(int1);
    }
    let int2: number = 0;

    if (clanProfileFind() == 1) {
        int2 = loadClanVar<2132>() - dateMinutes();
        if (int2 < 360 && intArg0 < 126) {
            return 0;
        }
    }

    switch (intArg0) {
        case 100:
            return loadClanSettingVarbit<248>();
        case 101:
            return loadClanSettingVarbit<249>();
        case 102:
            return loadClanSettingVarbit<250>();
        case 103:
            return loadClanSettingVarbit<251>();
        case 125:
            return loadClanSettingVarbit<252>();
        case 126:
            return 1;
        case 127:
            return 1;
        default:
            return 0;
    }
}
