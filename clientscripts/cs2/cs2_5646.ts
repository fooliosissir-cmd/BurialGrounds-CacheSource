/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5646

function cs2_5646(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 == 1) {
        if (intArg1 == 1) {
            ifSetGraphic(Graphic.combatboxes_very_large_3, intArg0);
        } else {
            ifSetGraphic(Graphic.combatboxes_very_large_2, intArg0);
        }
    } else if (intArg1 == 1) {
        ifSetGraphic(Graphic.combatboxes_very_large_1, intArg0);
    } else {
        ifSetGraphic(Graphic.combatboxes_very_large_0, intArg0);
    }
}
