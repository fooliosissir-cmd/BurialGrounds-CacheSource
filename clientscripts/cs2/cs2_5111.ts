/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5111

function cs2_5111(intArg0: number, intArg1: boolean): void {
    varp_clan_rel_current_varp = intArg0;

    if (intArg1 == true) {
        cs2_5108(1);
    } else {
        cs2_5108(0);
    }
    cs2_5113(intArg1);
}
