/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_494

function cs2_494(intArg0: component, intArg1: number): void {
    if (intArg1 == 1) {
        ifSetGraphic(Graphic.gnome_copter_arrows_1, intArg0);
    } else {
        ifSetGraphic(Graphic.gnome_copter_arrows_0, intArg0);
    }
}
