/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah4_final_cutscene_init]

function mah4_final_cutscene_init(): void {
    ifSetOnTimer(hook(mah4_cutscene_update, "", []), Component.mah4_cutscene_overlay.main_layer);
    varc_mah4_cutscene_fade_transparency = 0;
    varc_mah4_cutscene_fade_direction = 0;
    varc_mah4_golden_active = 0;
    varc_mah4_golden_direction = 0;
    varc_mah4_golden_transparency = 255;
    varc_mah4_final_cutscene_step = 0;
    splineNew(0, 0);
    splineNew(1, 0);
    cs2_1678();
    camMovealong(0, 0, 200, 200, 1, 0);
    ifSetOnCamFinished(hook(clientscript_mah4_final_cutscene_next, "", []), Component.mah4_cutscene_overlay.main_layer);
}
