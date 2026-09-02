/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3470

function cs2_3470(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 1:
            ccDeleteAll(intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 75, intArg0);
            break;
        case 2:
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, cs2_3459(coord(3785, 5706, 0), intArg1), 510, cs2_3459(coord(3786, 5702, 0), intArg1), 715, 0);
            splineAddPoint(1, 0, cs2_3459(coord(3791, 5711, 0), intArg1), 170, cs2_3459(coord(3787, 5712, 0), intArg1), 170, 0);
            splineAddPoint(0, 1, cs2_3459(coord(3824, 5704, 0), intArg1), 1035, cs2_3459(coord(3831, 5711, 0), intArg1), 1430, 0);
            splineAddPoint(1, 1, cs2_3459(coord(3816, 5711, 0), intArg1), 170, cs2_3459(coord(3819, 5717, 0), intArg1), 170, 0);
            splineAddPoint(0, 2, cs2_3459(coord(3816, 5738, 0), intArg1), 2095, cs2_3459(coord(3806, 5745, 0), intArg1), 2095, 0);
            splineAddPoint(1, 2, cs2_3459(coord(3807, 5726, 0), intArg1), 170, cs2_3459(coord(3800, 5728, 0), intArg1), 170, 0);
            splineAddPoint(0, 3, cs2_3459(coord(3786, 5736, 0), intArg1), 1565, cs2_3459(coord(3779, 5729, 0), intArg1), 965, 0);
            splineAddPoint(1, 3, cs2_3459(coord(3795, 5726, 0), intArg1), 170, cs2_3459(coord(3790, 5724, 0), intArg1), 170, 0);
            splineAddPoint(0, 4, cs2_3459(coord(3785, 5706, 0), intArg1), 470, cs2_3459(coord(3787, 5698, 0), intArg1), 435, 0);
            splineAddPoint(1, 4, cs2_3459(coord(3791, 5711, 0), intArg1), 170, cs2_3459(coord(3792, 5708, 0), intArg1), 170, 0);
            proc_tutorial3_fadein(150, intArg0);
            ifSetOnCamFinished(hook(cs2_3471, "Ii", [intArg0, 1]), intArg0);
            camMovealong(0, 0, 100, 700, 1, 0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
