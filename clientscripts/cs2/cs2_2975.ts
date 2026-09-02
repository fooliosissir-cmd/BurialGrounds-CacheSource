/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2975

function cs2_2975(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    if (intArg3 == 1) {
        ifSetGraphic(Graphic.set_but_end_1_1, intArg0);
        ifSetGraphic(Graphic.set_but_end_1_1, intArg2);
        ifSetGraphic(Graphic.set_but_fill_1_1, intArg1);
    } else {
        ifSetGraphic(Graphic.set_but_end_1_0, intArg0);
        ifSetGraphic(Graphic.set_but_end_1_0, intArg2);
        ifSetGraphic(Graphic.set_but_fill_1_0, intArg1);
    }
}
