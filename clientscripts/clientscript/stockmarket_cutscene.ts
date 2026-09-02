/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,stockmarket_cutscene]

function stockmarket_cutscene(intArg0: component): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 0:
            proc_tutorial3_fadeout(colour(0x000000), 30, intArg0);
            break;
        case 1:
            splineNew(0, 5);
            splineNew(1, 5);
            splineAddPoint(0, 0, coord(3166, 3447, 0), 1600, coord(3166, 3447, 0), 1600, 0);
            splineAddPoint(1, 0, coord(3165, 3459, 0), 600, coord(3165, 3458, 0), 600, 0);
            splineAddPoint(0, 1, coord(3166, 3462, 0), 2100, coord(3166, 3465, 0), 2100, 0);
            splineAddPoint(1, 1, coord(3165, 3471, 0), 600, coord(3165, 3476, 0), 600, 0);
            splineAddPoint(0, 2, coord(3168, 3474, 0), 1400, coord(3168, 3475, 0), 1400, 0);
            splineAddPoint(1, 2, coord(3158, 3484, 0), 400, coord(3154, 3485, 0), 400, 0);
            splineAddPoint(0, 3, coord(3161, 3484, 0), 700, coord(3160, 3486, 0), 700, 0);
            splineAddPoint(1, 3, coord(3149, 3479, 0), 300, coord(3150, 3476, 0), 300, 0);
            splineAddPoint(0, 4, coord(3155, 3479, 0), 500, coord(3154, 3478, 0), 500, 0);
            splineAddPoint(1, 4, coord(3163, 3469, 0), 300, coord(3165, 3470, 0), 300, 0);
            camMovealong(0, 0, 0, 0, 1, 0);
            proc_tutorial3_fadein(30, intArg0);
            break;
        case 2:
            if (splineLength(0) == 5) {
                camMovealong(0, 0, 300, 800, 1, 0);
                ifSetOnCamFinished(hook(cs2_5232, "Ii", [intArg0, 1]), intArg0);
            }
            break;
        case 3:
            if (splineLength(0) == 5) {
                camMovealong(0, 3, 500, 400, 1, 3);
            }
            break;
        default:
            ccDeleteAll(intArg0);
            camSmoothreset();
            break;
    }
}
