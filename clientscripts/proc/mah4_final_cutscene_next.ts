/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mah4_final_cutscene_next]

function proc_mah4_final_cutscene_next(): void {
    if (varc_mah4_final_cutscene_step < splineLength(0) - 1) {
        varc_mah4_final_cutscene_step = varc_mah4_final_cutscene_step + 1;
        camMovealong(0, varc_mah4_final_cutscene_step, 200, 200, 1, varc_mah4_final_cutscene_step);
        ifSetOnCamFinished(hook(clientscript_mah4_final_cutscene_next, "", []), Component.mah4_cutscene_overlay.main_layer);
    }
}
