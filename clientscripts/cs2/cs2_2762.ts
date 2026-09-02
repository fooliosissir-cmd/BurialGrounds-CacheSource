/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2762

function cs2_2762(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 101:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3683, 4941, 0), intArg1), 450, tutorial3_coord(coord(3683, 4941, 0), intArg1), 500, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3684, 4941, 0), intArg1), 600, tutorial3_coord(coord(3684, 4941, 0), intArg1), 550, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3677, 4947, 0), intArg1), 350, tutorial3_coord(coord(3677, 4947, 0), intArg1), 375, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4945, 0), intArg1), 350, tutorial3_coord(coord(3680, 4945, 0), intArg1), 375, 0);
            camMovealong(0, 0, 300, 400, 1, 0);
            break;
        case 102:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3677, 4953, 0), intArg1), 600, tutorial3_coord(coord(3677, 4954, 0), intArg1), 600, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3678, 4958, 0), intArg1), 700, tutorial3_coord(coord(3678, 4957, 0), intArg1), 700, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3678, 4943, 0), intArg1), 400, tutorial3_coord(coord(3678, 4941, 0), intArg1), 400, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3678, 4946, 0), intArg1), 400, tutorial3_coord(coord(3678, 4946, 0), intArg1), 400, 0);
            camMovealong(0, 0, 250, 200, 1, 0);
            break;
        case 103:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3679, 4949, 0), intArg1), 700, tutorial3_coord(coord(3680, 4950, 0), intArg1), 650, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3680, 4954, 0), intArg1), 650, tutorial3_coord(coord(3680, 4954, 0), intArg1), 650, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4963, 0), intArg1), 5, tutorial3_coord(coord(3680, 4963, 0), intArg1), 5, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4968, 0), intArg1), 5, tutorial3_coord(coord(3680, 4968, 0), intArg1), 5, 0);
            camMovealong(0, 0, 200, 200, 1, 0);
            break;
        case 104:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3669, 4965, 0), intArg1), 300, tutorial3_coord(coord(3669, 4964, 0), intArg1), 300, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3671, 4962, 0), intArg1), 300, tutorial3_coord(coord(3670, 4962, 0), intArg1), 300, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4957, 0), intArg1), 250, tutorial3_coord(coord(3680, 4957, 0), intArg1), 250, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4957, 0), intArg1), 250, tutorial3_coord(coord(3680, 4957, 0), intArg1), 250, 0);
            camMovealong(0, 0, 100, 50, 1, 0);
            break;
        case 105:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3680, 4959, 0), intArg1), 700, tutorial3_coord(coord(3680, 4963, 0), intArg1), 700, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3675, 4963, 0), intArg1), 700, tutorial3_coord(coord(3676, 4963, 0), intArg1), 700, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3666, 4963, 0), intArg1), 5, tutorial3_coord(coord(3666, 4963, 0), intArg1), 5, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3666, 4963, 0), intArg1), 5, tutorial3_coord(coord(3666, 4963, 0), intArg1), 5, 0);
            camMovealong(0, 0, 80, 50, 1, 0);
            break;
        case 106:
            proc_tutorial3_fadeout(colour(0x000000), 40, intArg0);
            break;
        case 107:
            proc_tutorial3_fadein(25, intArg0);
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3679, 4958, 0), intArg1), 350, tutorial3_coord(coord(3679, 4959, 0), intArg1), 350, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3675, 4965, 0), intArg1), 550, tutorial3_coord(coord(3676, 4965, 0), intArg1), 550, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3675, 4958, 0), intArg1), 300, tutorial3_coord(coord(3675, 4958, 0), intArg1), 300, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3668, 4958, 0), intArg1), 350, tutorial3_coord(coord(3668, 4958, 0), intArg1), 350, 0);
            camMovealong(0, 0, 120, 40, 1, 0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
