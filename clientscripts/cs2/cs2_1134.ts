/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1134

function cs2_1134(intArg0: component, intArg1: number): void {
    if (varp_43 == intArg1) {
        ifSetGraphic(gameframe_skin_graphic(Graphic.combatboxes_large_1), intArg0);
        hookMouseEnter(hook(cs2_5645, "Iii", [intArg0, 1, 1]), intArg0);
        hookMouseExit(hook(cs2_5645, "Iii", [intArg0, 1, 0]), intArg0);
    } else {
        ifSetGraphic(gameframe_skin_graphic(Graphic.combatboxes_large_0), intArg0);
        hookMouseEnter(hook(cs2_5645, "Iii", [intArg0, 0, 1]), intArg0);
        hookMouseExit(hook(cs2_5645, "Iii", [intArg0, 0, 0]), intArg0);
    }
}
