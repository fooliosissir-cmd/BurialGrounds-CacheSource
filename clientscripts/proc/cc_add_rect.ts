/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_add_rect]

function cc_add_rect(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: colour, intArg7: boolean, intArg8: number): void {
    ccCreate(intArg0, 3, intArg1);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetPosition(intArg4, intArg5, 0, 0);
    ccSetColour(intArg6);
    ccSetfill(intArg7);
    ccSetTrans(intArg8);
}
