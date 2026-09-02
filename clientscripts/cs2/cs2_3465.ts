/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3465

function cs2_3465(intArg0: component, intArg1: coord): void {
    switch (varc_tutorial3_cutscene_tracker) {
        case 11:
            ccDeleteAll(intArg0);
            proc_tutorial3_fadeout(colour(0x000000), 75, intArg0);
            break;
        case 12:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, love_instance(30, 27, intArg1), 800, love_instance(30, 30, intArg1), 850, 0);
            splineAddPoint(1, 0, love_instance(35, 30, intArg1), 300, love_instance(35, 40, intArg1), 300, 0);
            splineAddPoint(0, 1, love_instance(40, 40, intArg1), 1000, love_instance(40, 40, intArg1), 950, 0);
            splineAddPoint(1, 1, love_instance(28, 52, intArg1), 200, love_instance(28, 46, intArg1), 200, 0);
            camMovealong(0, 0, 100, 200, 1, 0);
            proc_tutorial3_fadein(25, intArg0);
            break;
        case 13:
            camSmoothreset();
            camForceAngle(268, 644);
            break;
        case 14:
            proc_tutorial3_fadeout(colour(0x000000), 25, intArg0);
            break;
        case 15:
            proc_tutorial3_fadein(25, intArg0);
            break;
        default:
            camSmoothreset();
            break;
    }
}
