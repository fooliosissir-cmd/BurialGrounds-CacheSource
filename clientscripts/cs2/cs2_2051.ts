/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2051

function cs2_2051(intArg0: component, intArg1: number, strArg0: string, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: graphic, strArg1: string, strArg2: string, intArg7: coord): void {
    if (ccFind(intArg0, intArg1) == 1) {
        worldmap_setuptext(strArg0, intArg2, intArg3, intArg4, intArg5, intArg6, strArg1, strArg2, intArg7);
    } else {
        ccCreate(intArg0, 4, intArg1);
        worldmap_setuptext(strArg0, intArg2, intArg3, intArg4, intArg5, intArg6, strArg1, strArg2, intArg7);
    }
}
