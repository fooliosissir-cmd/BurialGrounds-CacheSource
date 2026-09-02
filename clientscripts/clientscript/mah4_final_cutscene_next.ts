/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah4_final_cutscene_next]

function clientscript_mah4_final_cutscene_next(): void {
    cs2_1678();

    switch (varc_mah4_final_cutscene_step) {
        case 0:
            proc_mah4_final_cutscene_next();
            break;
        default:
            ifSetOnCamFinished(noHook(""), Component.mah4_cutscene_overlay.main_layer);
            break;
    }
}
