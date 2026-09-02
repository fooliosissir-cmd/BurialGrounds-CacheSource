/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6062

function cs2_6062(intArg0: component, intArg1: component): void {
    let int2: graphic = Graphic.graphic_10277;
    let int3: graphic = Graphic.graphic_10281;

    switch (mapLang()) {
        case 0:
            break;
        case 2:
            int2 = Graphic.graphic_10278;
            int3 = Graphic.graphic_10282;
            break;
        case 1:
            int2 = Graphic.graphic_10279;
            int3 = Graphic.graphic_10283;
            break;
        case 3:
            int2 = Graphic.graphic_10280;
            int3 = Graphic.graphic_10284;
            break;
    }
    ifSetGraphic(int2, intArg0);
    ifSetGraphic(int3, intArg1);
}
