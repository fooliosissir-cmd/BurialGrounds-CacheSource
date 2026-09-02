/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5911

function cs2_5911(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number, intArg5: number, intArg6: graphic, intArg7: graphic, intArg8: colour, intArg9: number, intArg10: number, intArg11: number, intArg12: number, intArg13: number, strArg0: string): void {
    if (ifGetY(intArg1) > ifGetHeight(intArg0) / 2) {
        aif_tooltip(intArg2, intArg3, intArg4, strArg0, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, 0, intArg12, intArg13);
    } else {
        aif_tooltip(intArg2, intArg3, intArg4, strArg0, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, 2, intArg12, intArg13);
    }
}
