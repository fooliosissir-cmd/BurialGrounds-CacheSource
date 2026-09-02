/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evq_spline_bruship]

function proc_evq_spline_bruship(): void {
    splineNew(0, 8);
    splineNew(1, 8);
    splineAddPoint(0, 0, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4498, 5879, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4499, 5879, 0)), 378, 0);
    splineAddPoint(1, 0, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4501, 5879, 0)), 325, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4502, 5879, 0)), 295, 0);
    splineAddPoint(0, 1, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4500, 5879, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4501, 5879, 0)), 378, 0);
    splineAddPoint(1, 1, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4503, 5879, 0)), 330, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4504, 5879, 0)), 335, 0);
    splineAddPoint(0, 2, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4502, 5879, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4503, 5879, 0)), 378, 0);
    splineAddPoint(1, 2, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4505, 5879, 0)), 330, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4506, 5879, 0)), 350, 0);
    splineAddPoint(0, 3, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4504, 5879, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4505, 5879, 0)), 378, 0);
    splineAddPoint(1, 3, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4507, 5879, 0)), 325, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4508, 5879, 0)), 305, 0);
    splineAddPoint(0, 4, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4506, 5879, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4507, 5879, 0)), 378, 0);
    splineAddPoint(1, 4, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4509, 5879, 0)), 340, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4510, 5879, 0)), 325, 0);
    splineAddPoint(0, 5, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4508, 5878, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4509, 5877, 0)), 378, 0);
    splineAddPoint(1, 5, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4511, 5879, 0)), 330, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4512, 5879, 0)), 340, 0);
    splineAddPoint(0, 6, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4510, 5877, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4511, 5877, 0)), 378, 0);
    splineAddPoint(1, 6, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4513, 5879, 0)), 346, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4514, 5879, 0)), 346, 0);
    splineAddPoint(0, 7, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4512, 5877, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4513, 5877, 0)), 378, 0);
    splineAddPoint(1, 7, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4515, 5879, 0)), 345, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4516, 5879, 0)), 355, 0);
    varc_evq_region_sw = -1;
    varc_evq_spline_counter = 0;
    varc_evq_spline_enum_speed = Enum.enum_875;
    proc_evq_spline_progress(1);
    proc_evq_fade_in(5832706);
    ifSetOnCamFinished(hook(clientscript_evq_spline_progress, "i", [1]), Component.fade2.eventlayer);
}
