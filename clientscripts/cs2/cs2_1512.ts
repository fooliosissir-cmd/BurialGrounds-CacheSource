/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1512

function cs2_1512(intArg0: number, intArg1: number): void {
    if (intArg0 != 1) {
        return;
    }

    switch (intArg1) {
        case 1:
        case 2:
            if (cs2_361(varc_1010, 3) != -1) {
                return;
            }
            break;
    }
    varc_player_kit_body_layer = intArg1;
    player_kit_body_redraw();
}
