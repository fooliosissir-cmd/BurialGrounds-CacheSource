/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6147

function cs2_6147(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: coord = varc_1904;
    let int6: number = 0;
    let int7: coord = -1;
    let int8: coord = -1;
    let int9: coord = -1;
    let int10: coord = -1;
    let int11: number = 300 + random(250);
    let int12: number = 2 + random(6);
    let int13: number = 0;
    let int14: number = varc_fremsaga_bilrach_interrogate_base_height + 250 + random(300);

    splineNew(0, int12);
    splineNew(1, int12);

    while (int13 < int12) {
        [int7, int8, int9, int10] = cs2_6150(intArg1, intArg4, moveCoord(int5, 1, 0, 1));
        int6 = intArg2 + scale(int13, int12 - 1, int14 - intArg2);
        splineAddPoint(0, int13, int7, int6, int8, int6, 0);
        splineAddPoint(1, int13, int5, 400 + varc_fremsaga_bilrach_interrogate_base_height, int5, 400 + varc_fremsaga_bilrach_interrogate_base_height, 0);
        intArg1 = intArg1 + intArg4;
        int13 = int13 + 1;
    }

    if (intArg3 == -1) {
        intArg3 = int11;
    }
    camMovealong(0, 0, intArg3, int11, 1, 0);
    intArg1 = intArg1 - intArg4;

    while (intArg1 < 0) {
        intArg1 = intArg1 + 8;
    }

    while (intArg1 > 7) {
        intArg1 = intArg1 - 8;
    }
    ifSetOnCamFinished(hook(cs2_6148, "Iiiiii", [intArg0, intArg1, int14, intArg4, int11, 0]), intArg0);
}
