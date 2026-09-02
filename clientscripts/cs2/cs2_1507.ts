/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1507

function cs2_1507(intArg0: number, intArg1: graphic): void {
    if (intArg0 != 1) {
        return;
    }

    if (gender() == 1) {
        baseIdkit(13, intArg1);
    } else {
        baseIdkit(6, intArg1);
    }
    varc_1014 = intArg1;
    player_kit_feet_redraw();
}
