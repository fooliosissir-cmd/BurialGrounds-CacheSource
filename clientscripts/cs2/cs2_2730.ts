/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2730

function cs2_2730(intArg0: component, intArg1: component, intArg2: number): void {
    if (intArg2 != 1) {
        ifSetGraphic(Graphic.tradebacking, intArg0);
        ifSetSize(0, 0, 1, 1, intArg0);
        ifSettiling(true, intArg0);
        ifSetTextShadow(true, intArg1);
    } else {
        ifSetGraphic(Graphic.chat_background, intArg0);
        ifSetSize(519, 142, 0, 0, intArg0);
        ifSettiling(false, intArg0);
        ifSetTextShadow(false, intArg1);
    }
}
