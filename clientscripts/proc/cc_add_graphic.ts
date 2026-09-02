/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_add_graphic]

function cc_add_graphic(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: graphic, intArg7: boolean, intArg8: boolean, intArg9: boolean, intArg10: number): void {
    ccCreate(intArg0, 5, intArg1);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetPosition(intArg4, intArg5, 0, 0);
    ccSetGraphic(intArg6);
    ccSethflip(intArg7);
    ccSetvflip(intArg8);
    ccSettiling(intArg9);
    ccSetTrans(intArg10);
}
