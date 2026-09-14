/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4249

function cs2_4249(strArg0: string, strArg1: string, intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: number, intArg6: number): number {
    let int7: number = stringWidth(strArg0, Graphic.p12_full) + 3;

    ifSetText(strArg0, intArg1);

    if (intArg3 != -1) {
        ifSetPosition(int7, 0, 0, 0, intArg3);
    }
    int7 = ifGetWidth(intArg0) - int7;
    let int8: number = max(paraheight(strArg1, int7, Graphic.p12_full) * 15 + 3, 20);
    ifSetSize(0, int8, 1, 0, intArg0);
    ifSetSize(int7, 0, 0, 1, intArg2);
    ifSetText(strArg1, intArg2);
    ifSetPosition(0, intArg6, 1, 0, intArg0);

    if (intArg3 != -1) {
        if (intArg5 == 2) {
            ifSetHide(true, intArg3);
            ifSetHide(false, intArg2);
            ifClearscripthooks(intArg3);
        } else {
            ifSetHide(true, intArg2);
            ifSetHide(false, intArg3);
            if (intArg4 != -1) {
                ifSetSize(stringWidth(ifGetText(intArg4), ifGetfontmetrics(intArg4)) + 10, ifGetHeight(intArg3), 0, 0, intArg3);
            }
            ifSetOnOp(hook(cs2_4250, "II", [intArg3, intArg2]), intArg3);
        }
    } else {
        ifSetHide(false, intArg2);
    }
    return intArg6 + int8;
}
