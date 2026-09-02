/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,love_makeup]

function love_makeup(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 31:
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_3459(coord(3806, 5726, 0), intArg1), 500, cs2_3459(coord(3806, 5726, 0), intArg1), 500, 0);
            splineAddPoint(1, 0, cs2_3459(coord(3802, 5722, 0), intArg1), 350, cs2_3459(coord(3802, 5722, 0), intArg1), 350, 0);
            splineAddPoint(0, 1, cs2_3459(coord(3806, 5725, 0), intArg1), 450, cs2_3459(coord(3806, 5725, 0), intArg1), 450, 0);
            splineAddPoint(1, 1, cs2_3459(coord(3803, 5723, 0), intArg1), 350, cs2_3459(coord(3803, 5723, 0), intArg1), 350, 0);
            splineAddPoint(0, 2, cs2_3459(coord(3804, 5723, 0), intArg1), 550, cs2_3459(coord(3804, 5723, 0), intArg1), 550, 0);
            splineAddPoint(1, 2, cs2_3459(coord(3804, 5728, 0), intArg1), 350, cs2_3459(coord(3801, 5726, 0), intArg1), 350, 0);
            camMovealong(0, 0, 50, 10, 1, 0);
            break;
        case 32:
            camMovealong(0, 1, 500, 500, 1, 1);
            break;
        case 33:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 34:
            proc_tutorial3_fadein(25, intArg0);
            break;
        case 35:
            proc_tutorial3_fadeout(colour(0x000000), 25, intArg0);
            break;
        case 36:
            proc_tutorial3_fadein(50, intArg0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
