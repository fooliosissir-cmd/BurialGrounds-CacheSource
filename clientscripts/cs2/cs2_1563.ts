/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1563

function cs2_1563(intArg0: coord, intArg1: coord, intArg2: boolean, intArg3: colour, intArg4: number, intArg5: component, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): number {
    let [int11, int12] = worldmap_elements_chooseposition(intArg0, intArg2, intArg5, intArg6, intArg7, intArg8, intArg9);
    let [int13, int14] = worldmap_elements_chooseposition(intArg1, intArg2, intArg5, intArg6, intArg7, intArg8, intArg9);
    let int15: number = int11 + (int13 - int11) / 2;
    let int16: number = int12 + (int14 - int12) / 2;
    let int17: number = int13 - int11;
    let int18: number = int14 - int12;
    [int17, int18] = [max(int17, 0 - int17), max(int18, 0 - int18)];

    if (ccFind(intArg5, intArg10) == 1) {
        ccSetPosition(int15, int16, 1, 1);
        ccSetSize(int17, int18, 0, 0);
    } else {
        ccCreate(intArg5, 3, intArg10);
        ccSetPosition(int15, int16, 1, 1);
        ccSetSize(int17, int18, 0, 0);
        ccSetColour(intArg3);
        ccSetfill(false);
        ccSetTrans(0);
    }
    intArg10 = intArg10 + 1;
    int17 = int17 + 2 * intArg4;
    int18 = int18 + 2 * intArg4;

    if (ccFind(intArg5, intArg10) == 1) {
        ccSetPosition(int15, int16, 1, 1);
        ccSetSize(int17, int18, 0, 0);
    } else {
        ccCreate(intArg5, 3, intArg10);
        ccSetPosition(int15, int16, 1, 1);
        ccSetSize(int17, int18, 0, 0);
        ccSetColour(intArg3);
        ccSetfill(false);
        ccSetTrans(0);
    }
    return intArg10 + 1;
}
