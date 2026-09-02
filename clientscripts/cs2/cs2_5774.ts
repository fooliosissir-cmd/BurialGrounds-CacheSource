/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5774

function cs2_5774(intArg0: number, intArg1: component): void {
    if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_help_button_0, intArg1);
    } else {
        ifSetGraphic(Graphic.aif_help_button_3, intArg1);
    }
    hookMouseEnter(hook(cs2_4009, "iiIi", [1, intArg0, event_com, -1]), intArg1);
    hookMouseExit(hook(cs2_4009, "iiIi", [0, intArg0, event_com, -1]), intArg1);
}
