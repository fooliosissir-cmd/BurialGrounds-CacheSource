/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_feet_colourbutton]

function player_kit_feet_colourbutton(intArg0: number, intArg1: graphic): void {
    if (intArg0 != 1) {
        return;
    }
    baseColour(3, intArg1);
    varc_playerdesign3_feetcol = intArg1;
    player_kit_feet_redraw();
}
