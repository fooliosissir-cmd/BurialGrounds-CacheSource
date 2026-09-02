/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3957

function cs2_3957(intArg0: component): void {
    let int1: graphic = ifGetGraphic(intArg0);

    switch (int1) {
        case Graphic.graphic_4117:
            ifSetGraphic(Graphic.graphic_4122, intArg0);
            break;
        case Graphic.graphic_4118:
            ifSetGraphic(Graphic.graphic_4123, intArg0);
            break;
        case Graphic.graphic_4119:
            ifSetGraphic(Graphic.graphic_4124, intArg0);
            break;
        default:
            return;
    }
    ifSetSize(133, 16, 0, 0, Component.interface_744.component_744_81);
    ifSetOnTimer(hook(cs2_3961, "iI", [0, Component.interface_744.component_744_7]), Component.interface_744.component_744_7);
}
