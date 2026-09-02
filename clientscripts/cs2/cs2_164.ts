/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_164

function cs2_164(intArg0: component, intArg1: number): void {
    if (cs2_166(intArg1) == 7) {
        ifSetGraphic(Graphic.warning_icons_2, intArg0);
        return;
    } else {
        ifSetGraphic(Graphic.warning_icons_1, intArg0);
        return;
    }
}
