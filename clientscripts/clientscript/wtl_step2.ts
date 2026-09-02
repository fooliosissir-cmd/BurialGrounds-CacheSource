/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wtl_step2]

function wtl_step2(): void {
    varc_wtl_spline_step = 3;
    camMovealong(0, varc_wtl_spline_step, 200, 200, 1, varc_wtl_spline_step);
    ifSetOnCamFinished(hook(cs2_1631, "", []), Component.interface_75.component_75_0);
}
