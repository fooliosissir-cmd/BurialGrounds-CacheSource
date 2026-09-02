/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3066

function cs2_3066(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: number): void {
    if (intArg0 > 0) {
        ifSetGraphic(Graphic.graphic_4661, intArg2);
        ifSetText(tostring(intArg0), intArg3);
        if (intArg4 == 1) {
            ifSetOp(1, "Click Here To Play", intArg2);
            ifSetOnOpt(hook(cs2_3067, "i", [intArg1]), intArg2);
        } else {
            ifClearops(intArg2);
            ifSetOnOpt(noHook(""), intArg2);
        }
        hookMouseEnter(hook(cs2_3068, "I", [intArg2]), intArg2);
        hookMouseExit(hook(cs2_3069, "I", [intArg2]), intArg2);
    } else {
        ifSetGraphic(Graphic.graphic_4660, intArg2);
        ifSetText("", intArg3);
        hookMouseEnter(noHook(""), intArg2);
        hookMouseExit(noHook(""), intArg2);
        ifSetOnOpt(noHook(""), intArg2);
        ifClearops(intArg2);
    }
}
