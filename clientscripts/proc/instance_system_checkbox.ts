/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_checkbox]

function instance_system_checkbox(): number {
    if (varc_instance_practice_mode == 1) {
        return Graphic.check_box_2_2;
    }
    return Graphic.check_box_2_0;
}