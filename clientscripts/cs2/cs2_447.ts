/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_447

function cs2_447(intArg0: component, intArg1: component, intArg2: component): void {
    let str0: string = ifGetText(intArg2);
    let int3: number = ifGetWidth(intArg2);
    let int4: number = paraheight(str0, int3, Graphic.p11_full);
    let int5: number = int4 * 10 + 5;

    if (int5 > ifGetHeight(intArg1)) {
        ifSetScrollSize(0, int5, intArg1);
        proc_scrollbar_vertical(intArg0, intArg1, Graphic.graphic_2598, Graphic.graphic_2595, Graphic.graphic_2596, Graphic.graphic_2597, Graphic.graphic_2593, Graphic.graphic_2594);
        ifSetTextAlign(1, 0, 0, intArg2);
        ifSetSize(ifGetWidth(intArg2), int5, 0, 0, intArg2);
    }
}
