/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_674

function cs2_674(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: component, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number): void {
    ccCreate(intArg5, 3, intArg6);
    ccSetPosition(intArg0, intArg1, 0, 0);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetColour(colour(0x000000));
    ccSetfill(false);
    let int12: number = intArg0 + 1;
    let int13: number = intArg1 + 1;
    let int14: number = intArg2 - 2;
    let int15: number = intArg3 - 2;
    ccCreate(intArg5, 3, intArg6 + 1);
    ccSetPosition(int12, int13, 0, 0);
    ccSetSize(int14, int15, 0, 0);
    ccSetColour(colour(0x302520));
    ccSetTrans(100);
    ccSetfill(true);
    ccCreate(intArg5, 3, intArg6 + 2);

    if (intArg8 == 0) {
        ccSetPosition(intArg0 + 1, intArg1 + 1, 0, 0);
        ccSetTrans(0);
        ccSetfill(true);
        if (intArg9 == 1) {
            ccSetSize(int14, int15, 0, 0);
            if (intArg11 == intArg10) {
                ccSetColour(colour(0x3F821E));
            } else {
                ccSetColour(colour(0x8A0010));
            }
        } else {
            ccSetSize(scale(intArg11, intArg10, int14), int15, 0, 0);
            ccSetColour(colour(0xC68B01));
        }
    }
    ccCreate(intArg5, 3, intArg6 + 3);
    ccSetPosition(int12, int13, 0, 0);
    ccSetSize(int14, 3, 0, 0);
    ccSetfill(true);
    ccSetTrans(200);
    ccSetColour(colour(0x000000));
    ccCreate(intArg5, 3, intArg6 + 4);
    ccSetPosition(int12, int13 + 3, 0, 0);
    ccSetSize(3, int15 - 3, 0, 0);
    ccSetfill(true);
    ccSetTrans(200);
    ccSetColour(colour(0x000000));
}
