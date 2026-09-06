/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,player_kit_select]

function player_kit_select(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = 0;

    while (int3 < intArg2) {
        if (ccFind(intArg0, int3) == 1) {
            ccSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_10));
        }
        int3 = int3 + 1;
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(gameframe_skin_graphic(Graphic.miscgraphics_11));
    }
}
