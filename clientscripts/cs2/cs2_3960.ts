/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3960

function cs2_3960(intArg0: component): void {
    let int1: graphic = ifGetGraphic(intArg0);

    switch (int1) {
        case Graphic.graphic_4122:
            ifSetGraphic(Graphic.graphic_4117, intArg0);
            break;
        case Graphic.graphic_4123:
            ifSetGraphic(Graphic.graphic_4118, intArg0);
            break;
        case Graphic.graphic_4124:
            ifSetGraphic(Graphic.graphic_4119, intArg0);
            break;
        default:
            return;
    }
}
