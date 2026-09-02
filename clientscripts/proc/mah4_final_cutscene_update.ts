/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mah4_final_cutscene_update]

function mah4_final_cutscene_update(): void {
    varc_mah4_cutscene_fade_framecount = varc_mah4_cutscene_fade_framecount + 1;

    if (varc_mah4_cutscene_fade_framecount >= 2 - 1) {
        varc_mah4_cutscene_fade_framecount = 0;
        if (varc_mah4_cutscene_fade_direction == 0) {
            varc_mah4_cutscene_fade_transparency = min(varc_mah4_cutscene_fade_transparency + 2, 255);
        } else if (varc_mah4_cutscene_fade_direction == 1) {
            varc_mah4_cutscene_fade_transparency = max(varc_mah4_cutscene_fade_transparency - 2, 0);
        }
        ifSetTrans(varc_mah4_cutscene_fade_transparency, Component.mah4_cutscene_overlay.black_rect);
    }
    varc_mah4_golden_framecount = varc_mah4_golden_framecount + 1;

    if (varc_mah4_golden_framecount >= 6 - 1) {
        varc_mah4_golden_framecount = 0;
        if (varc_mah4_golden_direction == 0) {
            varc_mah4_golden_transparency = min(varc_mah4_golden_transparency + 1, 255);
            if (varc_mah4_golden_transparency >= 255) {
                varc_mah4_golden_direction = 1;
            }
        } else if (varc_mah4_golden_direction == 1 && varc_mah4_golden_active == 1) {
            varc_mah4_golden_transparency = max(varc_mah4_golden_transparency - 3, 192);
            if (varc_mah4_golden_transparency <= 192) {
                varc_mah4_golden_direction = 0;
            }
        }
        ifSetTrans(varc_mah4_golden_transparency, Component.mah4_cutscene_overlay.yellow_rect);
    }
}
