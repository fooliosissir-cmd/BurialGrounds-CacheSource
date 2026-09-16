/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,game_settings_current]

function game_settings_current(intArg0: number): number {
    switch (intArg0) {
        case 0:
            return varbit_option_gameframe_skin;
        case 1:
            return varbit_option_buff_bar;
    }
    return 0;
}
