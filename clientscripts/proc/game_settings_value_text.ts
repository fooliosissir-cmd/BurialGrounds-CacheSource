/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,game_settings_value_text]

function game_settings_value_text(intArg0: number, intArg1: number): string {
    switch (intArg0) {
        case 0:
            if (intArg1 == 1) {
                return "2011";
            }
            return "2012";
    }
    return "";
}
