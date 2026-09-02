/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5739

function cs2_5739(intArg0: number, intArg1: number, strArg0: string, intArg2: component, intArg3: component): number {
    ifSetHide(false, intArg2);
    ifSetText(strArg0, intArg2);
    ifSetTextFont(Graphic.verdana_11pt_regular, intArg2);
    ifSetTextAlign(0, 1, 13, intArg2);
    let int4: number = ifGetWidth(intArg3) - 18;
    int4 = int4 + 9;
    let int5: number = 15 * paraheight(strArg0, int4, Graphic.verdana_11pt_regular);
    ifSetSize(int4, int5, 0, 0, intArg2);
    ifSetPosition(9, intArg1, 0, 0, intArg2);
    return intArg1 + int5;
}
