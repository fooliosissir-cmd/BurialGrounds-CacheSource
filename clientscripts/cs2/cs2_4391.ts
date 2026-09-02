/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4391

function cs2_4391(intArg0: component): void {
    let int1: number = -1;
    let int2: number = -1;

    if (activeClanSettingsFindAffined() == 1) {
        [int1, int2] = clan_motif_decode(varbit_clan_custom_motif_a_varp, varbit_clan_custom_motif_b_varp, 0);
        ifSetRetex(0, 1024, int1, intArg0);
        ifSetRetex(1, 1057, int2, intArg0);
    }
}
