/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4384

function cs2_4384(intArg0: number, intArg1: number, intArg2: number): [graphic, graphic] {
    let int3: graphic = enumOp(type_int, type_graphic, Enum.clan_motif_int2gfx, intArg0);
    let int4: graphic = enumOp(type_int, type_graphic, Enum.clan_motif_int2gfx, intArg1);

    if (intArg2 == 1 && (loadClanSettingVarbit<10>() == 1 || activeClanSettingsGetAffinedCount() < 5)) {
        int3 = Graphic.clan_icon_generic_runestone_r;
        int4 = Graphic.clan_icon_generic_runestone_s;
    } else {
        if (int3 == -1) {
            int3 = Graphic.clan_icon_generic_runestone_r;
        }
        if (int4 == -1) {
            int4 = Graphic.clan_icon_generic_runestone_s;
        }
    }
    return [int3, int4];
}
