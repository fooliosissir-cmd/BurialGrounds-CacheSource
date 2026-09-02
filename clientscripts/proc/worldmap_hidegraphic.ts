/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_hidegraphic]

function worldmap_hidegraphic(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetHide(true);
    } else {
        ccCreate(intArg0, 5, intArg1);
        ccSetHide(true);
    }
}
