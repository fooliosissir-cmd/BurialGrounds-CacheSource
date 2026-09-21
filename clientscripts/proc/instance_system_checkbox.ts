/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_checkbox]

function instance_system_checkbox(intArg0: boolean): graphic {
    if (varc_instance_practice_mode == 1) {
        if (intArg0 == true) {
            return gameframe_skin_graphic(Graphic.check_box_2_3);
        }
        return gameframe_skin_graphic(Graphic.check_box_2_2);
    }
    if (intArg0 == true) {
        return gameframe_skin_graphic(Graphic.check_box_2_1);
    }
    return gameframe_skin_graphic(Graphic.check_box_2_0);
}
