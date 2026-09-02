/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2836

function cs2_2836(): void {
    varc_nom_spline_step = varc_nom_spline_step + 1;

    switch (varc_nom_spline_step) {
        case 2:
            ifSetOnCamFinished(hook(cs2_2836, "", []), Component.nom_cutscene_controller.cutscene_controller);
            camMovealong(0, varc_nom_spline_step, 400, 0, 1, varc_nom_spline_step);
            break;
        case 3:
            ifSetOnCamFinished(noHook(""), Component.nom_cutscene_controller.cutscene_controller);
            break;
        default:
            ifSetOnCamFinished(hook(cs2_2836, "", []), Component.nom_cutscene_controller.cutscene_controller);
            camMovealong(0, varc_nom_spline_step, 400, 400, 1, varc_nom_spline_step);
            break;
    }
}
