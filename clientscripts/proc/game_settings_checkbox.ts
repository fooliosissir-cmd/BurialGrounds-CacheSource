/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,game_settings_checkbox]

function game_settings_checkbox(intArg0: number, intArg1: boolean): graphic {
    if (game_settings_current(intArg0) == 1) {
        if (intArg1 == true) {
            return gameframe_skin_graphic(Graphic.check_box_2_3);
        }
        return gameframe_skin_graphic(Graphic.check_box_2_2);
    }
    if (intArg1 == true) {
        return gameframe_skin_graphic(Graphic.check_box_2_1);
    }
    return gameframe_skin_graphic(Graphic.check_box_2_0);
}
