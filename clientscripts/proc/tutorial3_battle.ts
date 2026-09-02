/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,tutorial3_battle]

function tutorial3_battle(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 1:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3680, 4941, 0), intArg1), 600, tutorial3_coord(coord(3680, 4941, 0), intArg1), 600, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3680, 4941, 0), intArg1), 450, tutorial3_coord(coord(3680, 4941, 0), intArg1), 450, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4948, 0), intArg1), 100, tutorial3_coord(coord(3680, 4948, 0), intArg1), 100, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4953, 0), intArg1), 100, tutorial3_coord(coord(3680, 4953, 0), intArg1), 100, 0);
            camMovealong(0, 0, 100, 140, 1, 0);
            ifSetOnTimer(hook(cs2_2771, "Ii", [intArg0, clientClock()]), intArg0);
            break;
        case 2:
            ifSetOnTimer(noHook(""), intArg0);
            splineNew(0, 10);
            splineNew(1, 10);
            splineAddPoint(0, 0, tutorial3_coord(coord(3673, 4965, 0), intArg1), 400, tutorial3_coord(coord(3673, 4965, 0), intArg1), 420, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3674, 4964, 0), intArg1), 400, tutorial3_coord(coord(3674, 4964, 0), intArg1), 420, 128);
            splineAddPoint(0, 2, tutorial3_coord(coord(3675, 4963, 0), intArg1), 400, tutorial3_coord(coord(3675, 4963, 0), intArg1), 420, 0);
            splineAddPoint(0, 3, tutorial3_coord(coord(3676, 4962, 0), intArg1), 400, tutorial3_coord(coord(3676, 4962, 0), intArg1), 420, -128);
            splineAddPoint(0, 4, tutorial3_coord(coord(3677, 4961, 0), intArg1), 400, tutorial3_coord(coord(3677, 4961, 0), intArg1), 420, 0);
            splineAddPoint(0, 5, tutorial3_coord(coord(3678, 4960, 0), intArg1), 400, tutorial3_coord(coord(3678, 4960, 0), intArg1), 420, 128);
            splineAddPoint(0, 6, tutorial3_coord(coord(3679, 4959, 0), intArg1), 400, tutorial3_coord(coord(3679, 4959, 0), intArg1), 420, 0);
            splineAddPoint(0, 7, tutorial3_coord(coord(3680, 4958, 0), intArg1), 400, tutorial3_coord(coord(3680, 4958, 0), intArg1), 420, -128);
            splineAddPoint(0, 8, tutorial3_coord(coord(3680, 4957, 0), intArg1), 400, tutorial3_coord(coord(3680, 4957, 0), intArg1), 420, 0);
            splineAddPoint(0, 9, tutorial3_coord(coord(3680, 4956, 0), intArg1), 400, tutorial3_coord(coord(3680, 4956, 0), intArg1), 420, 128);
            splineAddPoint(0, 10, tutorial3_coord(coord(3680, 4955, 0), intArg1), 400, tutorial3_coord(coord(3680, 4955, 0), intArg1), 420, 0);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4954, 0), intArg1), 400, tutorial3_coord(coord(3680, 4954, 0), intArg1), 400, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4953, 0), intArg1), 395, tutorial3_coord(coord(3680, 4953, 0), intArg1), 395, 0);
            splineAddPoint(1, 2, tutorial3_coord(coord(3680, 4952, 0), intArg1), 390, tutorial3_coord(coord(3680, 4952, 0), intArg1), 390, 0);
            splineAddPoint(1, 3, tutorial3_coord(coord(3680, 4951, 0), intArg1), 385, tutorial3_coord(coord(3680, 4951, 0), intArg1), 385, 0);
            splineAddPoint(1, 4, tutorial3_coord(coord(3680, 4950, 0), intArg1), 380, tutorial3_coord(coord(3680, 4950, 0), intArg1), 380, 0);
            splineAddPoint(1, 5, tutorial3_coord(coord(3680, 4949, 0), intArg1), 375, tutorial3_coord(coord(3680, 4949, 0), intArg1), 375, 0);
            splineAddPoint(1, 6, tutorial3_coord(coord(3680, 4948, 0), intArg1), 370, tutorial3_coord(coord(3680, 4948, 0), intArg1), 370, 0);
            splineAddPoint(1, 7, tutorial3_coord(coord(3680, 4947, 0), intArg1), 365, tutorial3_coord(coord(3680, 4947, 0), intArg1), 365, 0);
            splineAddPoint(1, 8, tutorial3_coord(coord(3680, 4946, 0), intArg1), 360, tutorial3_coord(coord(3680, 4946, 0), intArg1), 360, 0);
            splineAddPoint(1, 9, tutorial3_coord(coord(3680, 4945, 0), intArg1), 355, tutorial3_coord(coord(3680, 4945, 0), intArg1), 355, 0);
            splineAddPoint(1, 10, tutorial3_coord(coord(3680, 4945, 0), intArg1), 350, tutorial3_coord(coord(3680, 4945, 0), intArg1), 350, 0);
            ifSetOnCamFinished(hook(cs2_2772, "Ii", [intArg0, 1]), intArg0);
            camMovealong(0, 0, 3000, 2500, 1, 0);
            soundSynth(Sound.sound_6645, 1, 0);
            break;
        case 3:
            ifSetOnCamFinished(noHook(""), intArg0);
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3680, 4950, 0), intArg1), 350, tutorial3_coord(coord(3680, 4950, 0), intArg1), 350, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3680, 4950, 0), intArg1), 300, tutorial3_coord(coord(3680, 4950, 0), intArg1), 300, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4958, 0), intArg1), 300, tutorial3_coord(coord(3680, 4958, 0), intArg1), 300, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4958, 0), intArg1), 350, tutorial3_coord(coord(3680, 4958, 0), intArg1), 350, 0);
            camMovealong(0, 0, 60, 50, 1, 0);
            break;
        case 4:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3684, 4946, 0), intArg1), 450, tutorial3_coord(coord(3684, 4945, 0), intArg1), 450, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3682, 4940, 0), intArg1), 600, tutorial3_coord(coord(3682, 4941, 0), intArg1), 600, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4945, 0), intArg1), 400, tutorial3_coord(coord(3680, 4946, 0), intArg1), 400, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4947, 0), intArg1), 350, tutorial3_coord(coord(3680, 4946, 0), intArg1), 350, 0);
            camMovealong(0, 0, 250, 200, 1, 0);
            break;
        case 5:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3684, 4945, 0), intArg1), 700, tutorial3_coord(coord(3684, 4945, 0), intArg1), 700, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3684, 4945, 0), intArg1), 700, tutorial3_coord(coord(3684, 4945, 0), intArg1), 700, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4942, 0), intArg1), 350, tutorial3_coord(coord(3680, 4941, 0), intArg1), 350, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4941, 0), intArg1), 150, tutorial3_coord(coord(3680, 4941, 0), intArg1), 350, 0);
            camMovealong(0, 0, 100, 100, 1, 0);
            break;
        case 6:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3683, 4941, 0), intArg1), 450, tutorial3_coord(coord(3683, 4942, 0), intArg1), 450, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3681, 4942, 0), intArg1), 450, tutorial3_coord(coord(3681, 4942, 0), intArg1), 450, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4945, 0), intArg1), 400, tutorial3_coord(coord(3680, 4946, 0), intArg1), 400, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4947, 0), intArg1), 400, tutorial3_coord(coord(3680, 4946, 0), intArg1), 400, 0);
            camMovealong(0, 0, 60, 60, 1, 0);
            break;
        case 7:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3681, 4942, 0), intArg1), 400, tutorial3_coord(coord(3681, 4941, 0), intArg1), 400, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3681, 4940, 0), intArg1), 400, tutorial3_coord(coord(3681, 4941, 0), intArg1), 400, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3677, 4941, 0), intArg1), 350, tutorial3_coord(coord(3677, 4941, 0), intArg1), 350, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3677, 4941, 0), intArg1), 350, tutorial3_coord(coord(3677, 4941, 0), intArg1), 350, 0);
            camMovealong(0, 0, 30, 30, 1, 0);
            break;
        case 8:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3684, 4949, 0), intArg1), 450, tutorial3_coord(coord(3684, 4948, 0), intArg1), 450, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3683, 4947, 0), intArg1), 450, tutorial3_coord(coord(3684, 4948, 0), intArg1), 450, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3682, 4948, 0), intArg1), 400, tutorial3_coord(coord(3681, 4949, 0), intArg1), 400, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3680, 4949, 0), intArg1), 400, tutorial3_coord(coord(3681, 4949, 0), intArg1), 400, 0);
            camMovealong(0, 0, 150, 150, 1, 0);
            break;
        case 9:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3684, 4945, 0), intArg1), 500, tutorial3_coord(coord(3682, 4945, 0), intArg1), 500, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3677, 4944, 0), intArg1), 700, tutorial3_coord(coord(3677, 4945, 0), intArg1), 700, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3682, 4940, 0), intArg1), 250, tutorial3_coord(coord(3682, 4940, 0), intArg1), 250, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3683, 4940, 0), intArg1), 250, tutorial3_coord(coord(3683, 4940, 0), intArg1), 250, 0);
            camMovealong(0, 0, 30, 30, 1, 0);
            break;
        case 10:
            splineNew(0, 2);
            splineAddPoint(0, 0, tutorial3_coord(coord(3684, 4937, 0), intArg1), 800, tutorial3_coord(coord(3684, 4937, 0), intArg1), 800, 0);
            splineAddPoint(0, 1, tutorial3_coord(coord(3684, 4935, 0), intArg1), 600, tutorial3_coord(coord(3684, 4935, 0), intArg1), 600, 0);
            splineNew(1, 2);
            splineAddPoint(1, 0, tutorial3_coord(coord(3680, 4944, 0), intArg1), 500, tutorial3_coord(coord(3680, 4944, 0), intArg1), 500, 0);
            splineAddPoint(1, 1, tutorial3_coord(coord(3678, 4946, 0), intArg1), 400, tutorial3_coord(coord(3678, 4946, 0), intArg1), 400, 0);
            camMovealong(0, 0, 400, 80, 1, 0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
