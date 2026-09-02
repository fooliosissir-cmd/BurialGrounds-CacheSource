/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2291

function cs2_2291(intArg0: component, intArg1: number): void {
    if (cs2_2297(intArg1) == 1) {
        if (ccFind(intArg0, intArg1) == 1) {
            ccSetGraphic(Graphic.miscgraphics_11);
        }
    } else if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(Graphic.miscgraphics_10);
    }
}
