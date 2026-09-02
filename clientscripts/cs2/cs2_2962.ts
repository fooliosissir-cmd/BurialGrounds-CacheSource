/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2962

function cs2_2962(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: number): void {
    if (clientClock() >= intArg6) {
        varc_176 = varc_176 + 2;
        ifSetOnTimer(hook(cs2_1249, "III", [intArg0, intArg2, intArg1]), intArg0);
        varc_177 = 0;
        ifSetOnClick(hook(cs2_2713, "IIIIII", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg3);
        ifSetOnMouseOver(hook(cs2_2961, "II1", [intArg4, intArg5, true]), intArg3);
        hookMouseExit(hook(cs2_2961, "II1", [intArg4, intArg5, false]), intArg3);
        ifSetGraphic(Graphic.graphic_2703, intArg4);
        varc_986 = 0;
    }
}
