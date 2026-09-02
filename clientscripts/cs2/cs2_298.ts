/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_298

function cs2_298(intArg0: coord, intArg1: coord, intArg2: boolean, intArg3: colour, intArg4: number, intArg5: component, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): number {
    if (varbit_worldmap_samemaplinks_hidden == 1) {
        return intArg10;
    }
    intArg3 = colour(0xFFFF00);
    let int11: number = intArg10 + 1;
    let int12: number = intArg10 + 2;
    let [int13, int14] = worldmap_elements_chooseposition(intArg0, intArg2, intArg5, intArg6, intArg7, intArg8, intArg9);
    let [int15, int16] = worldmap_elements_chooseposition(intArg1, intArg2, intArg5, intArg6, intArg7, intArg8, intArg9);
    let int17: number = int13 + (int15 - int13) / 2;
    let int18: number = int14 + (int16 - int14) / 2;
    let int19: number = int15 - int13;
    let int20: number = int16 - int14;
    let int21: number = 0;

    if (int19 < 0) {
        if (int20 < 0) {
            int19 = 0 - int19;
            int20 = 0 - int20;
        } else {
            int19 = 0 - int19;
            int21 = 1;
        }
    } else if (int20 < 0) {
        int20 = 0 - int20;
        int21 = 1;
    }

    if (ccFind(intArg5, intArg10) == 1) {
        ccSetPosition(int13 + 1, int14 + 1, 1, 1);
    } else {
        ccCreate(intArg5, 3, intArg10);
        ccSetPosition(int13 + 1, int14 + 1, 1, 1);
        ccSetSize(intArg4, intArg4, 0, 0);
        ccSetColour(colour(0x000000));
        ccSetfill(true);
    }
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: colour = colour(0x000000);

    if (ccFind(intArg5, int11) == 1) {
        ccSetPosition(int13, int14, 1, 1);
    } else {
        [int22, int23, int24] = hex_to_rgb(intArg3);
        [int22, int23, int24] = [max(int22 - 48, 0), max(int23 - 48, 0), max(int24 - 48, 0)];
        int25 = rgb_to_hex(int22, int23, int24);
        ccCreate(intArg5, 3, int11);
        ccSetPosition(int13, int14, 1, 1);
        ccSetSize(intArg4, intArg4, 0, 0);
        ccSetColour(int25);
        ccSetfill(true);
        ccHookMouseEnter(hook(cs2_301, "1Iiiii", [true, intArg5, int11, -1, int12, intArg3]));
        ccHookMouseExit(hook(cs2_301, "1Iiiii", [false, intArg5, int11, -1, int12, int25]));
        ccSetOp(1, "Scroll map");
        ccSetOnOpt(hook(cs2_302, "ic1", [event_opindex, intArg1, intArg2]));
    }

    if (ccFind(intArg5, int12) == 1) {
        ccSetPosition(int17, int18, 1, 1);
        ccSetSize(int19, int20, 0, 0);
    } else {
        ccCreate(intArg5, 9, int12);
        ccSetPosition(int17, int18, 1, 1);
        ccSetSize(int19, int20, 0, 0);
        ccSetlinedirection(int21);
        ccSetlinewid(1 + intArg4 / 5);
        ccSetColour(intArg3);
        ccSetHide(true);
    }
    return int12 + 1;
}
