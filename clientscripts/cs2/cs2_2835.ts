/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2835

function cs2_2835(): void {
    let int0: number = coordX(coord()) - coordX(coord()) % 64;
    let int1: number = coordZ(coord()) - coordZ(coord()) % 64;
    let int2: coord = moveCoord(0, int0, 0, int1);

    splineNew(0, 4);
    splineNew(1, 4);
    splineAddPoint(0, 0, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5852, 0)), 1185, cs2_2808(int2, coord(3336, 5832, 0), coord(3363, 5852, 0)), 1030, 0);
    splineAddPoint(1, 0, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5843, 0)), 338, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5845, 0)), 338, 0);
    splineAddPoint(0, 1, cs2_2808(int2, coord(3336, 5832, 0), coord(3366, 5849, 0)), 790, cs2_2808(int2, coord(3336, 5832, 0), coord(3366, 5847, 0)), 705, 0);
    splineAddPoint(1, 1, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5849, 0)), 338, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5850, 0)), 338, 0);
    splineAddPoint(0, 2, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5846, 0)), 620, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5848, 0)), 580, 0);
    splineAddPoint(1, 2, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5853, 0)), 338, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5855, 0)), 338, 0);
    splineAddPoint(0, 3, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5859, 0)), 495, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5861, 0)), 445, 0);
    splineAddPoint(1, 3, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5862, 0)), 338, cs2_2808(int2, coord(3336, 5832, 0), coord(3361, 5864, 0)), 338, 0);
    varc_nom_spline_step = 0;
    ifSetOnCamFinished(hook(cs2_2836, "", []), Component.nom_cutscene_controller.cutscene_controller);
    camMovealong(0, 0, 400, 400, 1, 0);
}
