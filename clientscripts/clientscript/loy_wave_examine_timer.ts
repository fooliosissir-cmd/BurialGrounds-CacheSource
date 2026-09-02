/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loy_wave_examine_timer]

function loy_wave_examine_timer(): void {
    if (varc_loy_wave_examine >= 160) {
        return;
    } else if (varc_loy_wave_examine_stop == 1) {
        varc_loy_wave_examine = 160;
        ifSetPosition(0, 75, 0, 0, Component.loy_waves.examine_background);
        return;
    } else if (varc_loy_wave_examine == 158) {
        ifSetHide(true, Component.loy_waves.examine_background);
    } else {
        ifSetPosition(-2 - varc_loy_wave_examine, 75, 0, 0, Component.loy_waves.examine_background);
        varc_loy_wave_examine = varc_loy_wave_examine + 2;
    }
}
