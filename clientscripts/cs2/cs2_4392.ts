/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4392

function cs2_4392(intArg0: component): void {
    if (varp_clan_custom_motif_colour1_varp > 0) {
        ifSetRecol(0, 31690, varp_clan_custom_motif_colour1_varp, intArg0);
    }

    if (varp_clan_custom_motif_colour2_varp > 0) {
        ifSetRecol(1, 60362, varp_clan_custom_motif_colour2_varp, intArg0);
    }

    if (varp_clan_custom_colour1_varp > 0) {
        ifSetRecol(3, 55246, varp_clan_custom_colour1_varp, intArg0);
    }

    if (varp_clan_custom_colour2_varp > 0) {
        ifSetRecol(4, 17358, varp_clan_custom_colour2_varp, intArg0);
    }
}
