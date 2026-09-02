/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2838

function cs2_2838(): void {
    let int0: number = coordX(coord()) - coordX(coord()) % 64;
    let int1: number = coordZ(coord()) - coordZ(coord()) % 64;
    let int2: coord = moveCoord(0, int0, 0, int1);

    splineNew(0, 6);
    splineNew(1, 6);
    splineAddPoint(0, 0, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5845, 0)), 1025, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5845, 0)), 790, 0);
    splineAddPoint(1, 0, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5848, 0)), 355, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5848, 0)), 265, 0);
    splineAddPoint(0, 1, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5858, 0)), 506, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5858, 0)), 506, 0);
    splineAddPoint(1, 1, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5861, 0)), 190, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5861, 0)), 190, 0);
    splineAddPoint(0, 2, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5855, 0)), 506, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5855, 0)), 506, 0);
    splineAddPoint(1, 2, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5860, 0)), 195, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5860, 0)), 210, 0);
    splineAddPoint(0, 3, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5852, 0)), 506, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5851, 0)), 506, 0);
    splineAddPoint(1, 3, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5855, 0)), 115, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5854, 0)), 70, 0);
    splineAddPoint(0, 4, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5850, 0)), 506, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5849, 0)), 506, 0);
    splineAddPoint(1, 4, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5854, 0)), 240, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5853, 0)), 330, 0);
    splineAddPoint(0, 5, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5848, 0)), 506, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5847, 0)), 506, 0);
    splineAddPoint(1, 5, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5861, 0)), 350, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5863, 0)), 350, 0);
    varc_nom_spline_step = 0;
    ifSetOnCamFinished(hook(cs2_2840, "", []), Component.nom_cutscene_controller.cutscene_controller);
    camMovealong(0, varc_nom_spline_step, 100, 100, 1, varc_nom_spline_step);
}
