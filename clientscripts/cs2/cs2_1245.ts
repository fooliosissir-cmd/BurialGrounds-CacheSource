/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1245

function cs2_1245(intArg0: number): [number, number] {
    if (intArg0 == 1) {
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, coord(2692, 5333, 0), 1500, coord(2694, 5326, 0), 1450, 0);
        splineAddPoint(1, 0, coord(2702, 5333, 0), 250, coord(2702, 5326, 0), 250, 0);
        splineAddPoint(0, 1, coord(2703, 5314, 0), 1400, coord(2710, 5312, 0), 1350, 0);
        splineAddPoint(1, 1, coord(2710, 5323, 0), 250, coord(2715, 5322, 0), 250, 0);
        cs2_1899(0, 100, 150);
        splineAddPoint(0, 2, coord(2730, 5319, 0), 1300, coord(2736, 5327, 0), 1250, 0);
        splineAddPoint(1, 2, coord(2719, 5332, 0), 250, coord(2719, 5337, 0), 250, 0);
        cs2_1899(1, 100, 150);
        splineAddPoint(0, 3, coord(2723, 5339, 0), 900, coord(2720, 5344, 0), 900, 0);
        splineAddPoint(1, 3, coord(2720, 5353, 0), 250, coord(2721, 5360, 0), 250, 0);
        cs2_1899(2, 100, 150);
        splineAddPoint(0, 4, coord(2721, 5361, 0), 700, coord(2721, 5364, 0), 700, 0);
        splineAddPoint(1, 4, coord(2721, 5369, 0), 250, coord(2721, 5370, 0), 250, 0);
        cs2_1899(3, 100, 150);
        splineAddPoint(0, 5, coord(2721, 5367, 0), 700, coord(2721, 5367, 0), 700, 0);
        splineAddPoint(1, 5, coord(2721, 5372, 0), 250, coord(2721, 5372, 0), 250, 0);
        cs2_1899(4, 100, 150);
    }
    return [44405978, 1250324];
}
