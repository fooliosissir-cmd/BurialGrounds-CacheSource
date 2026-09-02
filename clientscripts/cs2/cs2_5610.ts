/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5610

function cs2_5610(): void {
    if (varc_xmas11_timmy_annoy_percent < 0) {
        varc_xmas11_timmy_annoy_percent = 0;
    }

    if (varc_xmas11_timmy_annoy_percent > 100) {
        varc_xmas11_timmy_annoy_percent = 100;
    }
    xmas11_aif_progressbar_set(varc_xmas11_timmy_annoy_percent, Component.xmas11_timmy_prog_overlay.red_large_progress_value_layer);
}
