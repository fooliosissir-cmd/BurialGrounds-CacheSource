/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4593

function cs2_4593(strArg0: string, intArg0: component): number {
    let int1: number = paraheight(strArg0, ifGetWidth(intArg0), Graphic.p12_full) * 15 + 5;

    ifSetHide(false, intArg0);
    ifSetText(strArg0, intArg0);
    return int1;
}
