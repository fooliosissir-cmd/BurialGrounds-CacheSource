/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evq_spline_funeral]

function proc_evq_spline_funeral(): void {
    splineNew(0, 7);
    splineNew(1, 7);
    splineAddPoint(0, 0, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2504, 3893, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2506, 3892, 0)), 378, 0);
    splineAddPoint(1, 0, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2510, 3887, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2510, 3888, 0)), 210, 0);
    splineAddPoint(0, 1, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2506, 3894, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2505, 3894, 0)), 378, 0);
    splineAddPoint(1, 1, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2511, 3889, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2511, 3890, 0)), 210, 0);
    splineAddPoint(0, 2, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2502, 3893, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2500, 3893, 0)), 378, 0);
    splineAddPoint(1, 2, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3891, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3892, 0)), 210, 0);
    splineAddPoint(0, 3, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2498, 3891, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2498, 3889, 0)), 378, 0);
    splineAddPoint(1, 3, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3893, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3894, 0)), 210, 0);
    splineAddPoint(0, 4, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2500, 3888, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2502, 3887, 0)), 378, 0);
    splineAddPoint(1, 4, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3896, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3897, 0)), 210, 0);
    splineAddPoint(0, 5, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2506, 3888, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2507, 3888, 0)), 378, 0);
    splineAddPoint(1, 5, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3899, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3900, 0)), 210, 0);
    splineAddPoint(0, 6, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2508, 3888, 0)), 378, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2509, 3888, 0)), 378, 0);
    splineAddPoint(1, 6, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3902, 0)), 210, cs2_2808(varc_evq_region_sw, coord(2480, 3864, 0), coord(2512, 3904, 0)), 210, 0);
    varc_evq_region_sw = -1;
    varc_evq_spline_counter = 0;
    varc_evq_spline_enum_speed = Enum.enum_879;
    proc_evq_spline_progress(0);
    proc_evq_fade_in(5832706);
    ifSetOnCamFinished(hook(clientscript_evq_spline_progress, "i", [0]), Component.fade2.eventlayer);
}
