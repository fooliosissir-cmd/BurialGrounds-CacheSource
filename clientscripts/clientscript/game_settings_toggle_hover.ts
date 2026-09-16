/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,game_settings_toggle_hover]

function game_settings_toggle_hover(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: boolean): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(game_settings_checkbox(intArg3, intArg4));
    }

    if (ccFind(intArg0, intArg2) == 1) {
        if (intArg4 == true) {
            ccSetColour(colour(0xFAFAFA));
        } else {
            ccSetColour(colour(0xEBE0BC));
        }
    }
}
