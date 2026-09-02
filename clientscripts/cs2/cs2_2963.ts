/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2963

function cs2_2963(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: number): void {
    if (clientClock() >= intArg6) {
        ifSetOnTimer(noHook(""), intArg0);
        ifSetHide(true, intArg0);
        ifSetOnClick(hook(cs2_2713, "IIIIII", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg3);
        ifSetOnMouseOver(hook(cs2_2961, "II1", [intArg4, intArg5, true]), intArg3);
        hookMouseExit(hook(cs2_2961, "II1", [intArg4, intArg5, false]), intArg3);
        ifSetGraphic(Graphic.graphic_2700, intArg4);
        varc_986 = 1;
    }
}
