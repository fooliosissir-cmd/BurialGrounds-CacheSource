/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3009

function cs2_3009(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    ifSetSize(13, 88, 0, 0, intArg1);
    ifSetGraphic(Graphic.graphic_4681, intArg1);
    ifSetSize(26, 88, 1, 0, intArg2);
    ifSetGraphic(Graphic.graphic_4682, intArg2);
    ifSetSize(13, 88, 0, 0, intArg3);
    ifSetGraphic(Graphic.graphic_4684, intArg3);
    ifSetGraphic(Graphic.graphic_2673, intArg5);
    ifSetSize(13, 88, 0, 0, intArg6);
    ifSetGraphic(Graphic.graphic_4683, intArg6);
    ifSetOnMouseOver(noHook(""), intArg0);
    ifSetOnMouseLeave(noHook(""), intArg0);
}
