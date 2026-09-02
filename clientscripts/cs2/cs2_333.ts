/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_333

function cs2_333(intArg0: component, intArg1: colour, intArg2: colour, intArg3: number, intArg4: number): number {
    let [int5, int6, int7] = hex_to_rgb(intArg1);
    let [int8, int9, int10] = hex_to_rgb(intArg2);
    let int11: number = int8 - int5;
    let int12: number = int9 - int6;
    let int13: number = int10 - int7;
    let int14: number = ifGetHeight(intArg0) - intArg4;
    intArg3 = intArg3 * 2;
    let int15: number = intArg4;
    let int16: number = 0;
    let int17: number = int14 - int15;

    while (int15 < int14) {
        ccCreate(intArg0, 3, ifGetNextSubId(intArg0));
        ccSetSize(intArg3, 1, 1, 0);
        ccSetfill(true);
        ccSetPosition(0, int15, 1, 0);
        ccSetColour(rgb_to_hex(int5 + scale(int16, int17, int11), int6 + scale(int16, int17, int12), int7 + scale(int16, int17, int13)));
        int16 = int16 + 1;
        int15 = int15 + 1;
    }
    return int16;
}
