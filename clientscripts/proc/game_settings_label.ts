/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,game_settings_label]

function game_settings_label(intArg0: number): string {
    switch (intArg0) {
        case 0:
            return "Interface skin";
        case 1:
            return "Buff bar";
    }
    return "";
}
