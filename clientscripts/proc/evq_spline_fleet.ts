/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,evq_spline_fleet]

function proc_evq_spline_fleet(): void {
    splineNew(0, 5);
    splineNew(1, 5);
    splineAddPoint(0, 0, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(623, 761, 0)), 378, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(628, 760, 0)), 378, 0);
    splineAddPoint(1, 0, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(622, 753, 0)), 210, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(626, 749, 0)), 210, 0);
    splineAddPoint(0, 1, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(633, 745, 0)), 378, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(633, 738, 0)), 378, 0);
    splineAddPoint(1, 1, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(625, 743, 0)), 210, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(624, 741, 0)), 210, 0);
    splineAddPoint(0, 2, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(625, 727, 0)), 378, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(621, 724, 0)), 378, 0);
    splineAddPoint(1, 2, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(617, 735, 0)), 210, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(613, 734, 0)), 210, 0);
    splineAddPoint(0, 3, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(610, 723, 0)), 435, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 725, 0)), 465, 0);
    splineAddPoint(1, 3, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 736, 0)), 210, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 736, 0)), 210, 0);
    splineAddPoint(0, 4, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 729, 0)), 545, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 730, 0)), 530, 0);
    splineAddPoint(1, 4, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 736, 0)), 210, cs2_2808(varc_evq_region_sw, coord(576, 704, 0), coord(607, 736, 0)), 210, 0);
    varc_evq_region_sw = -1;
    varc_evq_spline_counter = 0;
    varc_evq_spline_enum_speed = Enum.enum_876;
    proc_evq_spline_progress(1);
    proc_evq_fade_in(5832706);
    ifSetOnCamFinished(hook(clientscript_evq_spline_progress, "i", [1]), Component.fade2.eventlayer);
}
