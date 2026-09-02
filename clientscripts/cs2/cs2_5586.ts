/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5586

function cs2_5586(intArg0: component, intArg1: component): void {
    let int2: number = 240;

    if (stringLength(ifGetText(intArg1)) > 0) {
        int2 = parawidth(ifGetText(intArg1), 500, Graphic.graphic_4040) + 80;
        if (int2 > ifGetWidth(intArg0)) {
            ifSetSize(int2, 30, 0, 0, intArg0);
        }
        ifSetOnTimer(noHook(""), intArg0);
    }
}
