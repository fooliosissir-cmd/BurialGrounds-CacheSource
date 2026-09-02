/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,makeover_colour_force]

function makeover_colour_force(intArg0: number, intArg1: component, intArg2: component, intArg3: number): void {
    if (intArg0 != 1) {
        return;
    }
    varbit_player_kit_mom_colour = intArg3;
    makeover_colour(intArg1, intArg2);
}
