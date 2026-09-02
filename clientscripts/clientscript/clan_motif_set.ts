/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_motif_set]

function clan_motif_set(intArg0: component, intArg1: component): void {
    let int2: graphic = -1;
    let int3: graphic = -1;

    if (activeClanSettingsFindAffined() == 1) {
        [int2, int3] = cs2_4384(varbit_clan_custom_motif_a_varp, varbit_clan_custom_motif_b_varp, 0);
        ifSetGraphic(int2, intArg0);
        ifSetGraphic(int3, intArg1);
        ifSetColour(hsvtorgb(varp_clan_custom_motif_colour1_varp), intArg0);
        ifSetColour(hsvtorgb(varp_clan_custom_motif_colour2_varp), intArg1);
    }
}
