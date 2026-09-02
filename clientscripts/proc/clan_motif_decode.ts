/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_motif_decode]

function clan_motif_decode(intArg0: number, intArg1: number, intArg2: number): [number, number] {
    let int3: number = enumOp(type_int, 120, Enum.clan_motif_int2tex, intArg0);
    let int4: number = enumOp(type_int, 120, Enum.clan_motif_int2tex, intArg1);

    if (intArg2 == 1 && (loadClanSettingVarbit<10>() == 1 || activeClanSettingsGetAffinedCount() < 5)) {
        int3 = 1080;
        int4 = 1017;
    } else {
        if (int3 == -1) {
            int3 = 1080;
        }
        if (int4 == -1) {
            int4 = 1017;
        }
    }
    return [int3, int4];
}
