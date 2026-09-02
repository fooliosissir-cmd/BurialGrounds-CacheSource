/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cruc_cutscene]

function cruc_cutscene(): void {
    splineNew(0, 5);
    splineNew(1, 5);
    splineAddPoint(0, 0, coord(3357, 6080, 0), 500, coord(3357, 6081, 0), 500, 0);
    splineAddPoint(1, 0, coord(3360, 6113, 0), 25, coord(3360, 6113, 0), 25, 0);
    splineAddPoint(0, 1, coord(3357, 6091, 0), 800, coord(3357, 6094, 0), 800, 0);
    splineAddPoint(1, 1, coord(3359, 6114, 0), 25, coord(3359, 6114, 0), 25, 0);
    splineAddPoint(0, 2, coord(3357, 6100, 0), 1000, coord(3357, 6105, 0), 1000, 0);
    splineAddPoint(1, 2, coord(3358, 6115, 0), 25, coord(3358, 6115, 0), 25, 0);
    splineAddPoint(0, 3, coord(3362, 6108, 0), 800, coord(3362, 6111, 0), 800, 0);
    splineAddPoint(1, 3, coord(3356, 6116, 0), 25, coord(3356, 6116, 0), 25, 0);
    splineAddPoint(0, 4, coord(3361, 6118, 0), 500, coord(3360, 6120, 0), 500, 0);
    splineAddPoint(1, 4, coord(3355, 6116, 0), 25, coord(3355, 6116, 0), 25, 0);
    camMovealong(0, 0, 100, 100, 1, 0);
    ifSetOnCamFinished(hook(cs2_5469, "i", [0]), Component.interface_1161.component_1161_0);
}
