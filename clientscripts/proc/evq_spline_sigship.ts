/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evq_spline_sigship]

function proc_evq_spline_sigship(): void {
    splineNew(0, 4);
    splineNew(1, 4);
    splineAddPoint(0, 0, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4523, 5882, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4521, 5883, 0)), 378, 0);
    splineAddPoint(1, 0, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4519, 5882, 0)), 210, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4518, 5882, 0)), 210, 0);
    splineAddPoint(0, 1, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4521, 5882, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4520, 5882, 0)), 378, 0);
    splineAddPoint(1, 1, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4517, 5882, 0)), 335, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4516, 5882, 0)), 325, 0);
    splineAddPoint(0, 2, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4519, 5880, 0)), 378, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4519, 5879, 0)), 378, 0);
    splineAddPoint(1, 2, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4515, 5880, 0)), 346, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4515, 5879, 0)), 346, 0);
    splineAddPoint(0, 3, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4516, 5872, 0)), 670, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4514, 5868, 0)), 785, 0);
    splineAddPoint(1, 3, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4516, 5878, 0)), 210, cs2_2808(varc_evq_region_sw, coord(4501, 5878, 0), coord(4516, 5877, 0)), 210, 0);
    varc_evq_region_sw = -1;
    varc_evq_spline_counter = 0;
    varc_evq_spline_enum_speed = Enum.enum_877;
    proc_evq_spline_progress(1);
    proc_evq_fade_in(5832706);
    ifSetOnCamFinished(hook(clientscript_evq_spline_progress, "i", [1]), Component.fade2.eventlayer);
}
