/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah3_heist_next]

function mah3_heist_next(): void {
    varbit_mah3_spline_leg = varbit_mah3_spline_leg + 1;

    if (varbit_mah3_spline_leg >= splineLength(0) - 1) {
        varbit_mah3_spline_leg = 0;
        ifSetOnCamFinished(noHook(""), Component.mah3_heistsplines.controller);
        return;
    }
    camMovealong(0, varbit_mah3_spline_leg, 600, 400, 1, varbit_mah3_spline_leg);
    ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
}
