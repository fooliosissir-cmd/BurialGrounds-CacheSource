/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_interrogate_cutscene]

function fremsaga_bilrach_interrogate_cutscene(intArg0: component): void {
    let int1: number = 1;

    if (random(2) == 0) {
        int1 = 0 - int1;
    }

    switch (varc_fremsaga_bilrach_interrogate_cutscene) {
        case 0:
            camForceAngle(varc_fremsaga_bilrech_interrogate_end_angle_v, varc_fremsaga_bilrech_interrogate_end_angle_h);
            cs2_6147(intArg0, random(8), 400 + varc_fremsaga_bilrach_interrogate_base_height, -1, int1);
            break;
        case 4:
            camSmoothreset();
            break;
    }
}
