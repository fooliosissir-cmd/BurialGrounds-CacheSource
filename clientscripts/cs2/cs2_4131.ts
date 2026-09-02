/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4131

function cs2_4131(intArg0: component, intArg1: coord): void {
    switch (varc_glo3_cutscene) {
        case 101:
            ccDeleteAll(intArg0);
            proc_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 102:
            splineNew(0, 4);
            splineNew(1, 4);
            splineAddPoint(0, 0, cs2_4129(coord(3544, 4513, 0), intArg1), 610, cs2_4129(coord(3544, 4513, 0), intArg1), 610, 0);
            splineAddPoint(1, 0, cs2_4129(coord(3547, 4511, 0), intArg1), 475, cs2_4129(coord(3547, 4511, 0), intArg1), 475, 0);
            splineAddPoint(0, 1, cs2_4129(coord(3548, 4513, 0), intArg1), 610, cs2_4129(coord(3550, 4512, 0), intArg1), 610, 0);
            splineAddPoint(1, 1, cs2_4129(coord(3549, 4510, 0), intArg1), 475, cs2_4129(coord(3550, 4509, 0), intArg1), 475, 0);
            splineAddPoint(0, 2, cs2_4129(coord(3550, 4511, 0), intArg1), 550, cs2_4129(coord(3550, 4511, 0), intArg1), 550, 0);
            splineAddPoint(1, 2, cs2_4129(coord(3550, 4508, 0), intArg1), 475, cs2_4129(coord(3550, 4508, 0), intArg1), 475, 0);
            splineAddPoint(0, 3, cs2_4129(coord(3551, 4514, 0), intArg1), 545, cs2_4129(coord(3551, 4515, 0), intArg1), 545, 0);
            splineAddPoint(1, 3, cs2_4129(coord(3549, 4522, 0), intArg1), 475, cs2_4129(coord(3549, 4522, 0), intArg1), 475, 0);
            camMovealong(0, 0, 1000, 1000, 1, 0);
            proc_fadein(30, intArg0);
            break;
        case 103:
            splineNew(0, 3);
            splineNew(1, 3);
            splineAddPoint(0, 0, cs2_4129(coord(3550, 4511, 0), intArg1), 550, cs2_4129(coord(3550, 4511, 0), intArg1), 550, 0);
            splineAddPoint(1, 0, cs2_4129(coord(3550, 4508, 0), intArg1), 475, cs2_4129(coord(3550, 4508, 0), intArg1), 475, 0);
            splineAddPoint(0, 1, cs2_4129(coord(3551, 4514, 0), intArg1), 545, cs2_4129(coord(3551, 4515, 0), intArg1), 545, 0);
            splineAddPoint(1, 1, cs2_4129(coord(3549, 4522, 0), intArg1), 475, cs2_4129(coord(3549, 4522, 0), intArg1), 475, 0);
            splineAddPoint(0, 2, cs2_4129(coord(3550, 4517, 0), intArg1), 520, cs2_4129(coord(3550, 4517, 0), intArg1), 520, 0);
            splineAddPoint(1, 2, cs2_4129(coord(3549, 4522, 0), intArg1), 475, cs2_4129(coord(3549, 4522, 0), intArg1), 475, 0);
            camMovealong(0, 0, 1000, 1000, 1, 0);
            break;
        case 104:
            splineNew(0, 2);
            splineNew(1, 2);
            splineAddPoint(0, 0, cs2_4129(coord(3550, 4517, 0), intArg1), 520, cs2_4129(coord(3550, 4517, 0), intArg1), 520, 0);
            splineAddPoint(1, 0, cs2_4129(coord(3549, 4522, 0), intArg1), 475, cs2_4129(coord(3549, 4522, 0), intArg1), 475, 0);
            splineAddPoint(0, 1, cs2_4129(coord(3546, 4516, 0), intArg1), 510, cs2_4129(coord(3542, 4511, 0), intArg1), 510, 0);
            splineAddPoint(1, 1, cs2_4129(coord(3540, 4512, 0), intArg1), 475, cs2_4129(coord(3540, 4512, 0), intArg1), 475, 0);
            camMovealong(0, 0, 1000, 1000, 1, 0);
            break;
        case 105:
            proc_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 106:
            proc_fadein(50, intArg0);
            break;
        case 107:
            ccDeleteAll(intArg0);
            break;
    }
}
