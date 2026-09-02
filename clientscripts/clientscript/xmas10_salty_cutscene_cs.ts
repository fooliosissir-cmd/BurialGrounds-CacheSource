/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xmas10_salty_cutscene_cs]

function xmas10_salty_cutscene_cs(intArg0: component): void {
    switch (varc_xmas10_salty_cutscene_tracker) {
        case 1:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 2:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, xmas10_cs(16, 11), 500, xmas10_cs(16, 11), 500, 0);
            splineAddPoint(0, 1, xmas10_cs(14, 12), 400, xmas10_cs(14, 12), 400, 0);
            splineAddPoint(1, 0, xmas10_cs(15, 15), 400, xmas10_cs(15, 15), 400, 0);
            splineAddPoint(1, 1, xmas10_cs(15, 15), 300, xmas10_cs(15, 15), 300, 0);
            camMovealong(0, 0, 100, 100, 1, 0);
            break;
        case 3:
            proc_tutorial3_fadeout(colour(0x000000), 30, intArg0);
            break;
        case 4:
            camReset();
            proc_tutorial3_fadein(50, intArg0);
            break;
    }
}
