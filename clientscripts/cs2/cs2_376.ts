/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_376

function cs2_376(intArg0: component, intArg1: component, intArg2: number, intArg3: colour, intArg4: colour, intArg5: number, intArg6: number): void {
    if (intArg1 == -1) {
        ccCreate(intArg0, 3, intArg6);
        ccSetHide(true);
        ccCreate(intArg0, 3, intArg6 + 1);
        ccSetHide(true);
        ccCreate(intArg0, 3, intArg6 + 2);
        ccSetHide(true);
        ccCreate(intArg0, 3, intArg6 + 3);
        ccSetHide(true);
        ccCreate(intArg0, 3, intArg6 + 4);
        ccSetHide(true);
        ccCreate(intArg0, 3, intArg6 + 5);
        ccSetHide(true);
        return;
    }
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;

    if (ccFind(intArg1, intArg2) == 1 || (intArg2 == -1 && ifFind(intArg1) == 1)) {
        [int7, int8] = [ccGetX() - intArg5, ccGetY() - intArg5];
        int9 = min(ccGetWidth() + intArg5 * 2, ifGetWidth(intArg0));
        int10 = ccGetHeight() + intArg5 * 2;
    } else {
        return;
    }
    ccCreate(intArg0, 3, intArg6);
    ccSetSize(int9 - 2, 2, 0, 0);
    ccSetPosition(int7 + 1, int8, 0, 0);
    ccSetfill(true);
    ccSetColour(intArg3);
    ccCreate(intArg0, 3, intArg6 + 1);
    ccSetSize(int9 - 2, 2, 0, 0);
    ccSetPosition(int7 + 1, int8 + int10 - 2, 0, 0);
    ccSetfill(true);
    ccSetColour(intArg4);
    ccCreate(intArg0, 3, intArg6 + 2);
    ccSetSize(2, int10 - 2, 0, 0);
    ccSetPosition(int7, int8 + 1, 0, 0);
    ccSetfill(true);
    ccSetColour(intArg4);
    ccCreate(intArg0, 3, intArg6 + 3);
    ccSetSize(2, int10 - 2, 0, 0);
    ccSetPosition(int7 + int9 - 2, int8 + 1, 0, 0);
    ccSetfill(true);
    ccSetColour(intArg4);
    ccCreate(intArg0, 3, intArg6 + 4);
    ccSetSize(2, (int10 - 2) / 2, 0, 0);
    ccSetPosition(int7, int8 + 1, 0, 0);
    ccSetfill(true);
    ccSetColour(intArg3);
    ccCreate(intArg0, 3, intArg6 + 5);
    ccSetSize(2, (int10 - 2) / 2, 0, 0);
    ccSetPosition(int7 + int9 - 2, int8 + 1, 0, 0);
    ccSetfill(true);
    ccSetColour(intArg3);
}
