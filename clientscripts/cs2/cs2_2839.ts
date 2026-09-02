/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2839

function cs2_2839(): void {
    varc_nom_spline_step = 2;
    camMovealong(0, varc_nom_spline_step, 350, 400, 1, varc_nom_spline_step);
    ifSetOnCamFinished(hook(cs2_2840, "", []), Component.nom_cutscene_controller.cutscene_controller);
}
