/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1631

function cs2_1631(): void {
    if (varc_wtl_spline_step <= splineLength(0)) {
        varc_wtl_spline_step = varc_wtl_spline_step + 1;
        switch (varc_wtl_spline_step) {
            case 2:
            case 4:
                ifSetOnCamFinished(hook(cs2_1631, "", []), Component.interface_75.component_75_0);
                camMovealong(0, varc_wtl_spline_step, 200, 200, 1, varc_wtl_spline_step);
                break;
            default:
                ifSetOnCamFinished(noHook(""), Component.interface_75.component_75_0);
                break;
        }
    } else {
        varc_wtl_spline_step = 0;
    }
}
