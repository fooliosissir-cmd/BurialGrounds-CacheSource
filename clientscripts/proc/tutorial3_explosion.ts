/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tutorial3_explosion]

function tutorial3_explosion(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 201:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3681, 4963, 0), intArg1), 600, tutorial3_coord(coord(3682, 4963, 0), intArg1), 600, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3684, 4963, 0), intArg1), 550, tutorial3_coord(coord(3684, 4963, 0), intArg1), 600, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, 0);
            camMovealong(0, 0, 200, 75, 1, 0);
            break;
        case 202:
            proc_tutorial3_fadeout(colour(0x000000), 10, intArg0);
            break;
        case 203:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3684, 4963, 0), intArg1), 550, tutorial3_coord(coord(3684, 4963, 0), intArg1), 550, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3683, 4963, 0), intArg1), 750, tutorial3_coord(coord(3683, 4963, 0), intArg1), 750, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, tutorial3_coord(coord(3666, 4963, 0), intArg1), 200, 0);
            camMovealong(0, 0, 50, 25, 1, 0);
            proc_tutorial3_fadein(75, intArg0);
            break;
        case 204:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3679, 4966, 0), intArg1), 550, tutorial3_coord(coord(3680, 4966, 0), intArg1), 550, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3682, 4967, 0), intArg1), 550, tutorial3_coord(coord(3681, 4967, 0), intArg1), 550, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3685, 4958, 0), intArg1), 400, tutorial3_coord(coord(3684, 4958, 0), intArg1), 400, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3673, 4962, 0), intArg1), 400, tutorial3_coord(coord(3674, 4961, 0), intArg1), 400, 0);
            camMovealong(0, 0, 150, 220, 1, 0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
