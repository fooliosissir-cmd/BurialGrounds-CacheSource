/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2048

function cs2_2048(intArg0: component, intArg1: number, intArg2: graphic, intArg3: graphic, intArg4: graphic, intArg5: number, intArg6: number, intArg7: number, intArg8: boolean, intArg9: boolean, intArg10: boolean, intArg11: number, strArg0: string, strArg1: string, intArg12: coord): void {
    if (ccFind(intArg0, intArg1) == 1) {
        worldmap_setupgraphic(intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, strArg0, strArg1, intArg12);
    } else {
        ccCreate(intArg0, 5, intArg1);
        worldmap_setupgraphic(intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, strArg0, strArg1, intArg12);
    }
}
