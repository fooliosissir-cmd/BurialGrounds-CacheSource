/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3416

function cs2_3416(intArg0: component): void {
    ifSetGraphic(Graphic.magni_glass_1, intArg0);
    ifSetOnClick(hook(cs2_1242, "I", [event_com]), intArg0);
}
