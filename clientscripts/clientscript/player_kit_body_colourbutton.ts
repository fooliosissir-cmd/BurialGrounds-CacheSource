/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_body_colourbutton]

function player_kit_body_colourbutton(intArg0: number, intArg1: graphic, intArg2: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (intArg2 == 1) {
        baseColour(1, intArg1);
        varc_playerdesign3_torsocol = intArg1;
    } else if (intArg2 == 2) {
        baseColour(2, intArg1);
        varc_playerdesign3_legscol = intArg1;
    }
    player_kit_body_redraw();
}
