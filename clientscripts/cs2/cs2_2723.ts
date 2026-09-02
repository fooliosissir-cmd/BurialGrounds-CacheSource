/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2723

function cs2_2723(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: graphic = Graphic.graphic_10285;
    let int6: graphic = Graphic.graphic_10286;
    let int7: graphic = Graphic.graphic_10287;

    if (intArg4 == 1) {
        if (intArg3 == 1) {
            int5 = Graphic.graphic_10288;
            int6 = Graphic.graphic_10289;
            int7 = Graphic.graphic_10290;
        }
    } else if (intArg3 == 1) {
        int5 = Graphic.graphic_10781;
        int6 = Graphic.graphic_10782;
        int7 = Graphic.graphic_10783;
    } else {
        int5 = Graphic.graphic_10778;
        int6 = Graphic.graphic_10779;
        int7 = Graphic.graphic_10780;
    }
    ifSetGraphic(int5, intArg0);
    ifSetGraphic(int6, intArg1);
    ifSetGraphic(int7, intArg2);
}
