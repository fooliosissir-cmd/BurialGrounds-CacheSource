/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evq_spline_cave]

function proc_evq_spline_cave(): void {
    splineNew(0, 3);
    splineNew(1, 3);
    splineAddPoint(0, 0, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1975, 4399, 0)), 2385, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1973, 4399, 0)), 2370, 0);
    splineAddPoint(1, 0, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1976, 4407, 0)), 2265, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1977, 4408, 0)), 2260, 0);
    splineAddPoint(0, 1, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1971, 4400, 0)), 2420, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1969, 4401, 0)), 2355, 0);
    splineAddPoint(1, 1, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1976, 4409, 0)), 2285, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1975, 4409, 0)), 2235, 0);
    splineAddPoint(0, 2, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1969, 4403, 0)), 2395, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1968, 4405, 0)), 2380, 0);
    splineAddPoint(1, 2, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1974, 4408, 0)), 2270, cs2_2808(varc_evq_region_sw, coord(1952, 4384, 3), coord(1973, 4408, 0)), 2250, 0);
    varc_evq_region_sw = -1;
    varc_evq_spline_counter = 0;
    varc_evq_spline_enum_speed = Enum.enum_878;
    proc_evq_spline_progress(0);
    proc_evq_fade_in(5832706);
    ifSetOnCamFinished(hook(clientscript_evq_spline_progress, "i", [0]), Component.fade2.eventlayer);
}
