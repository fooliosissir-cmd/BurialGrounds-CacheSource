/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mah3_heist_camera]

function mah3_heist_camera(): void {
    varbit_mah3_spline_leg = 0;

    if (varbit_mah3_heist == 0) {
        ifSetHide(false, Component.mah3_heistsplines.blackout);
        ifSetHide(true, Component.mah3_heistsplines.smokelayer);
    }

    if (varbit_mah3_heist == 1) {
        ifSetHide(true, Component.mah3_heistsplines.blackout);
        splineNew(0, 2);
        splineNew(1, 2);
        splineAddPoint(0, 0, coord(3274, 10044, 0), 1450, coord(3279, 10046, 0), 1385, 0);
        splineAddPoint(1, 0, coord(3280, 10045, 0), 700, coord(3280, 10045, 0), 700, 0);
        splineAddPoint(0, 1, coord(3281, 10044, 0), 1125, coord(3282, 10043, 0), 1000, 0);
        splineAddPoint(1, 1, coord(3281, 10038, 0), 600, coord(3281, 10038, 0), 600, 0);
        camMovealong(0, 0, 250, 350, 1, 0);
    }

    if (varbit_mah3_heist == 2) {
        splineNew(0, 3);
        splineNew(1, 3);
        splineAddPoint(0, 0, coord(3283, 10045, 0), 1065, coord(3283, 10046, 0), 1130, 0);
        splineAddPoint(1, 0, coord(3282, 10038, 0), 600, coord(3282, 10038, 0), 600, 0);
        splineAddPoint(0, 1, coord(3285, 10044, 0), 1140, coord(3288, 10045, 0), 1105, 0);
        splineAddPoint(1, 1, coord(3290, 10043, 0), 600, coord(3292, 10042, 0), 600, 0);
        splineAddPoint(0, 2, coord(3289, 10043, 0), 825, coord(3290, 10044, 0), 565, 0);
        splineAddPoint(1, 2, coord(3289, 10039, 0), 600, coord(3287, 10039, 0), 600, 0);
        camMovealong(0, 0, 250, 350, 1, 0);
        ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
    }

    if (varbit_mah3_heist == 3) {
        ifSetHide(true, Component.mah3_heistsplines.blackout);
        splineNew(0, 4);
        splineNew(1, 4);
        splineAddPoint(0, 0, coord(3358, 10032, 0), 805, coord(3355, 10031, 0), 650, 0);
        splineAddPoint(1, 0, coord(3358, 10025, 0), 620, coord(3358, 10025, 0), 580, 0);
        splineAddPoint(0, 1, coord(3359, 10026, 0), 725, coord(3362, 10026, 0), 650, 0);
        splineAddPoint(1, 1, coord(3363, 10022, 0), 555, coord(3363, 10022, 0), 505, 0);
        splineAddPoint(0, 2, coord(3368, 10023, 0), 800, coord(3369, 10021, 0), 740, 0);
        splineAddPoint(1, 2, coord(3369, 10019, 0), 525, coord(3369, 10018, 0), 505, 0);
        splineAddPoint(0, 3, coord(3370, 10018, 0), 745, coord(3370, 10016, 0), 650, 0);
        splineAddPoint(1, 3, coord(3370, 10012, 0), 600, coord(3371, 10011, 0), 670, 0);
        camMovealong(0, 0, 300, 400, 1, 0);
        ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
    }

    if (varbit_mah3_heist == 4) {
        ifSetHide(true, Component.mah3_heistsplines.blackout);
        splineNew(0, 3);
        splineNew(1, 3);
        splineAddPoint(0, 0, coord(3282, 10039, 0), 1125, coord(3283, 10038, 0), 1085, 0);
        splineAddPoint(1, 0, coord(3282, 10034, 0), 750, coord(3282, 10035, 0), 750, 0);
        splineAddPoint(0, 1, coord(3283, 10031, 0), 1015, coord(3282, 10030, 0), 865, 0);
        splineAddPoint(1, 1, coord(3279, 10029, 0), 750, coord(3279, 10031, 0), 750, 0);
        splineAddPoint(0, 2, coord(3276, 10031, 0), 980, coord(3274, 10031, 0), 865, 0);
        splineAddPoint(1, 2, coord(3274, 10025, 0), 620, coord(3274, 10024, 0), 540, 0);
        camMovealong(0, 0, 300, 400, 1, 0);
        ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
    }

    if (varbit_mah3_heist == 5) {
        ifSetHide(false, Component.mah3_heistsplines.smokelayer);
    }

    if (varbit_mah3_heist == 6) {
        splineNew(0, 6);
        splineNew(0, 6);
        splineNew(1, 6);
        splineAddPoint(0, 0, coord(3276, 10031, 0), 980, coord(3274, 10031, 0), 1185, 0);
        splineAddPoint(1, 0, coord(3274, 10025, 0), 620, coord(3274, 10024, 0), 540, 0);
        splineAddPoint(0, 1, coord(3280, 10031, 0), 1190, coord(3281, 10031, 0), 1165, 0);
        splineAddPoint(1, 1, coord(3283, 10030, 0), 750, coord(3286, 10030, 0), 750, 0);
        splineAddPoint(0, 2, coord(3284, 10031, 0), 1220, coord(3286, 10030, 0), 1190, 0);
        splineAddPoint(1, 2, coord(3287, 10029, 0), 750, coord(3288, 10028, 0), 750, 0);
        splineAddPoint(0, 3, coord(3287, 10030, 0), 1160, coord(3289, 10029, 0), 1135, 0);
        splineAddPoint(1, 3, coord(3289, 10025, 0), 750, coord(3290, 10023, 0), 750, 0);
        splineAddPoint(0, 4, coord(3289, 10027, 0), 1045, coord(3290, 10026, 0), 1005, 0);
        splineAddPoint(1, 4, coord(3291, 10022, 0), 750, coord(3292, 10021, 0), 750, 0);
        splineAddPoint(0, 5, coord(3290, 10023, 0), 975, coord(3290, 10024, 0), 920, 0);
        splineAddPoint(1, 5, coord(3294, 10023, 0), 725, coord(3294, 10024, 0), 725, 0);
        camMovealong(0, 0, 500, 600, 1, 0);
        ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
    }

    if (varbit_mah3_heist == 7) {
        ifSetHide(true, Component.mah3_heistsplines.smokelayer);
        splineNew(0, 2);
        splineNew(1, 2);
        splineAddPoint(0, 0, coord(3290, 10023, 0), 975, coord(3291, 10023, 0), 1410, 0);
        splineAddPoint(1, 0, coord(3294, 10023, 0), 725, coord(3296, 10023, 0), 725, 0);
        splineAddPoint(0, 1, coord(3294, 10023, 0), 915, coord(3295, 10023, 0), 800, 0);
        splineAddPoint(1, 1, coord(3299, 10023, 0), 650, coord(3299, 10023, 0), 725, 0);
        camMovealong(0, 0, 400, 200, 1, 0);
        ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
    }

    if (varbit_mah3_heist == 8) {
        ifSetHide(true, Component.mah3_heistsplines.smokelayer);
        splineNew(0, 2);
        splineNew(1, 2);
        splineAddPoint(0, 0, coord(3294, 10023, 0), 915, coord(3295, 10023, 0), 960, 0);
        splineAddPoint(1, 0, coord(3299, 10023, 0), 650, coord(3299, 10023, 0), 725, 0);
        splineAddPoint(0, 1, coord(3301, 10022, 0), 985, coord(3301, 10022, 0), 950, 0);
        splineAddPoint(1, 1, coord(3304, 10023, 0), 800, coord(3304, 10023, 0), 800, 0);
        camMovealong(0, 0, 400, 200, 1, 0);
        ifSetOnCamFinished(hook(mah3_heist_next, "", []), Component.mah3_heistsplines.controller);
    }
}
