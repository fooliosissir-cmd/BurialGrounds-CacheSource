/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah1_orbit_next]

function mah1_orbit_next(): void {
    varc_mah1_orbit_step = varc_mah1_orbit_step + 1;

    if (varc_mah1_orbit_step >= splineLength(0) - 1) {
        varc_mah1_orbit_step = 0;
        ifSetOnCamFinished(noHook(""), Component.interface_582.component_582_0);
        return;
    }

    if (varc_mah1_orbit_step == splineLength(0) - 2) {
        camMovealong(0, varc_mah1_orbit_step, 200, 75, 1, varc_mah1_orbit_step);
    } else {
        camMovealong(0, varc_mah1_orbit_step, 200, 200, 1, varc_mah1_orbit_step);
    }
    ifSetOnCamFinished(hook(mah1_orbit_next, "", []), Component.interface_582.component_582_0);
}
