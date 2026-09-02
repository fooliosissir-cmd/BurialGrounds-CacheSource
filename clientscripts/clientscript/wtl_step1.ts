/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wtl_step1]

function wtl_step1(): void {
    varc_wtl_spline_step = 1;
    camMovealong(0, varc_wtl_spline_step, 200, 100, 1, varc_wtl_spline_step);
    ifSetOnCamFinished(hook(cs2_1631, "", []), Component.interface_75.component_75_0);
}
