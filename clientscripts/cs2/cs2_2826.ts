/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2826

function cs2_2826(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 301:
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, tutorial3_coord(coord(3677, 4957, 0), intArg1), 565, tutorial3_coord(coord(3676, 4960, 0), intArg1), 820, 0);
            splineAddPoint(1, 0, tutorial3_coord(coord(3677, 4964, 0), intArg1), 295, tutorial3_coord(coord(3679, 4969, 0), intArg1), 378, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3682, 4970, 0), intArg1), 700, tutorial3_coord(coord(3684, 4974, 0), intArg1), 705, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3691, 4971, 0), intArg1), 335, tutorial3_coord(coord(3694, 4971, 0), intArg1), 305, 0);
            splineAddPoint(0, 2, tutorial3_coord(coord(3679, 4963, 0), intArg1), 740, tutorial3_coord(coord(3673, 4962, 0), intArg1), 755, 0);
            splineAddPoint(1, 2, tutorial3_coord(coord(3679, 4981, 0), intArg1), 315, tutorial3_coord(coord(3678, 4993, 0), intArg1), 270, 0);
            splineAddPoint(0, 3, tutorial3_coord(coord(3679, 4959, 0), intArg1), 554, tutorial3_coord(coord(3680, 4957, 0), intArg1), 554, 0);
            splineAddPoint(1, 3, tutorial3_coord(coord(3667, 4964, 0), intArg1), 305, tutorial3_coord(coord(3650, 4964, 0), intArg1), 215, 0);
            camMovealong(0, 0, 500, 300, 1, 0);
            break;
        case 302:
            camMovealong(0, 1, 600, 300, 1, 1);
            break;
        case 303:
            camMovealong(0, 2, 600, 300, 1, 2);
            break;
        default:
            camSmoothreset();
            break;
    }
}
