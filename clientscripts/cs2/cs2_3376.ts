/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3376

function cs2_3376(intArg0: component): void {
    let int1: number = ifGetWidth(intArg0);
    let str0: string = removetags(ifGetText(intArg0));
    let int2: number = paraheight(str0, int1, Graphic.verdana_11pt_regular);

    if (int2 == 1) {
        ifSetSize(stringWidth(str0, Graphic.verdana_11pt_regular), 19, 0, 0, intArg0);
    } else {
        ifSetSize(int1, 14 * int2 + 5, 0, 0, intArg0);
    }
}
