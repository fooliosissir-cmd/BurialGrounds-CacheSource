/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,xmas10_snowangel_cutscene_cs]

function xmas10_snowangel_cutscene_cs(intArg0: component): void {
    switch (varc_xmas10_snowangel_cutscene_tracker) {
        case 1:
            proc_tutorial3_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 2:
            proc_tutorial3_fadein(50, intArg0);
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, xmas10_cs(14, 6), 1200, xmas10_cs(14, 6), 1200, 0);
            splineAddPoint(0, 1, xmas10_cs(14, 4), 1100, xmas10_cs(14, 4), 1100, 0);
            splineAddPoint(1, 0, xmas10_cs(15, 15), 500, xmas10_cs(15, 15), 500, 0);
            splineAddPoint(1, 1, xmas10_cs(15, 14), 400, xmas10_cs(15, 14), 400, 0);
            camMovealong(0, 0, 260, 260, 1, 0);
            break;
        case 3:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, xmas10_cs(14, 4), 1100, xmas10_cs(14, 4), 1100, 0);
            splineAddPoint(0, 1, xmas10_cs(14, 0), 900, xmas10_cs(14, 0), 900, 0);
            splineAddPoint(1, 0, xmas10_cs(15, 14), 400, xmas10_cs(15, 14), 400, 0);
            splineAddPoint(1, 1, xmas10_cs(15, 14), 300, xmas10_cs(15, 14), 300, 0);
            camMovealong(0, 0, 250, 250, 1, 0);
            break;
        case 4:
            proc_tutorial3_fadeout(colour(0x000000), 30, intArg0);
            break;
        case 5:
            camReset();
            proc_tutorial3_fadein(50, intArg0);
            break;
    }
}
