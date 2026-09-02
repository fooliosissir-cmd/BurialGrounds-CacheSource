/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5366

function cs2_5366(): void {
    let int0: number = 100 / 8;
    let int1: number = varc_agidad_ifcv_timer_perc / int0;

    if (varc_agidad_ifcv_timer_perc % int0 == 0) {
        int1 = int1 - 1;
    }
    let int2: number = 0;

    while (int2 < 8) {
        if (int2 > int1) {
            cs2_5367(int2 * 6 + 3, 0);
            cs2_5367(int2 * 6 + 4, 0);
            cs2_5367(int2 * 6 + 5, 0);
        } else if (int2 < int1) {
            cs2_5367(int2 * 6 + 3, 2);
            cs2_5367(int2 * 6 + 4, 2);
            cs2_5367(int2 * 6 + 5, 2);
        } else if (int2 == int1 && int2 != varc_agidad_ifcv_last_fade_segment) {
            varc_agidad_ifcv_fade_elapsed = 0;
            varc_agidad_ifcv_last_fade_segment = int2;
            cs2_5367(int2 * 6 + 3, 1);
            cs2_5367(int2 * 6 + 4, 1);
            cs2_5367(int2 * 6 + 5, 1);
        }
        int2 = int2 + 1;
    }
}
