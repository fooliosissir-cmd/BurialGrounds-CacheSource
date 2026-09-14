/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_297

function cs2_297(intArg0: coord, intArg1: coord, intArg2: boolean, intArg3: colour, intArg4: number, intArg5: component, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): number {
    if (varbit_worldmap_samemaplinks_hidden == 1) {
        return intArg10;
    }
    intArg3 = colour(0xFFFF00);
    let int11: number = intArg10 + 1;
    let int12: number = intArg10 + 2;
    let int13: number = intArg10 + 3;
    let int14: number = intArg10 + 4;
    let [int15, int16] = worldmap_elements_chooseposition(intArg0, intArg2, intArg5, intArg6, intArg7, intArg8, intArg9);
    let [int17, int18] = worldmap_elements_chooseposition(intArg1, intArg2, intArg5, intArg6, intArg7, intArg8, intArg9);
    let int19: number = int15 + (int17 - int15) / 2;
    let int20: number = int16 + (int18 - int16) / 2;
    let int21: number = int17 - int15;
    let int22: number = int18 - int16;
    let int23: number = 0;

    if (int21 < 0) {
        if (int22 < 0) {
            int21 = 0 - int21;
            int22 = 0 - int22;
        } else {
            int21 = 0 - int21;
            int23 = 1;
        }
    } else if (int22 < 0) {
        int22 = 0 - int22;
        int23 = 1;
    }

    if (ccFind(intArg5, intArg10) == 1 && ccFind<1>(intArg5, int11) == 1) {
        ccSetPosition(int15 + 1, int16 + 1, 1, 1);
        ccSetPosition<1>(int17 + 1, int18 + 1, 1, 1);
    } else {
        ccCreate(intArg5, 3, intArg10);
        ccCreate<1>(intArg5, 3, int11);
        ccSetPosition(int15 + 1, int16 + 1, 1, 1);
        ccSetPosition<1>(int17 + 1, int18 + 1, 1, 1);
        ccSetSize(intArg4, intArg4, 0, 0);
        ccSetSize<1>(intArg4, intArg4, 0, 0);
        ccSetColour(colour(0x000000));
        ccSetColour<1>(colour(0x000000));
        ccSetfill(true);
        ccSetfill<1>(true);
    }
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: colour = colour(0x000000);

    if (ccFind(intArg5, int12) == 1 && ccFind<1>(intArg5, int13) == 1) {
        ccSetPosition(int15, int16, 1, 1);
        ccSetPosition<1>(int17, int18, 1, 1);
    } else {
        [int24, int25, int26] = hex_to_rgb(intArg3);
        [int24, int25, int26] = [max(int24 - 48, 0), max(int25 - 48, 0), max(int26 - 48, 0)];
        int27 = rgb_to_hex(int24, int25, int26);
        ccCreate(intArg5, 3, int12);
        ccCreate<1>(intArg5, 3, int13);
        ccSetPosition(int15, int16, 1, 1);
        ccSetPosition<1>(int17, int18, 1, 1);
        ccSetSize(intArg4, intArg4, 0, 0);
        ccSetSize<1>(intArg4, intArg4, 0, 0);
        ccSetColour(int27);
        ccSetColour<1>(int27);
        ccSetfill(true);
        ccSetfill<1>(true);
        ccSetOnMouseOver(hook(cs2_301, "1Iiiii", [true, intArg5, int12, int13, int14, intArg3]));
        ccSetOnMouseOver<1>(hook(cs2_301, "1Iiiii", [true, intArg5, int12, int13, int14, intArg3]));
        ccSetOnMouseLeave(hook(cs2_301, "1Iiiii", [false, intArg5, int12, int13, int14, int27]));
        ccSetOnMouseLeave<1>(hook(cs2_301, "1Iiiii", [false, intArg5, int12, int13, int14, int27]));
        ccSetOp(1, "Scroll map");
        ccSetOp<1>(1, "Scroll map");
        ccSetOnOp(hook(cs2_302, "ic1", [event_opindex, intArg1, intArg2]));
        ccSetOnOp<1>(hook(cs2_302, "ic1", [event_opindex, intArg0, intArg2]));
    }

    if (ccFind(intArg5, int14) == 1) {
        ccSetPosition(int19, int20, 1, 1);
        ccSetSize(int21, int22, 0, 0);
    } else {
        ccCreate(intArg5, 9, int14);
        ccSetPosition(int19, int20, 1, 1);
        ccSetSize(int21, int22, 0, 0);
        ccSetlinedirection(int23);
        ccSetlinewid(1 + intArg4 / 5);
        ccSetColour(intArg3);
        ccSetHide(true);
    }
    return int14 + 1;
}
