/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1410

function cs2_1410(intArg0: component): void {
    let int1: number = 255;
    let int2: number = 0;

    if (varc_topstat_run_button_glow < 256) {
        int1 = 255 - varc_topstat_run_button_glow;
    } else if (varc_topstat_run_button_glow < 510) {
        int1 = varc_topstat_run_button_glow % 255;
    } else {
        int1 = 255;
    }

    if (varc_option_run_status_varc == 4) {
        int2 = 8;
    } else if (varc_option_run_status_varc == 3) {
        int2 = 4;
    } else {
        int1 = 255;
    }
    ifSetTrans(int1, intArg0);
    varc_topstat_run_button_glow = varc_topstat_run_button_glow + int2;

    if (varc_topstat_run_button_glow > 510) {
        varc_topstat_run_button_glow = 0;
    }
}
