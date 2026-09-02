/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6061

function cs2_6061(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    let int4: graphic = Graphic.graphic_10285;
    let int5: graphic = Graphic.graphic_10286;
    let int6: graphic = Graphic.graphic_10287;

    if (intArg3 == 1) {
        int4 = Graphic.graphic_10288;
        int5 = Graphic.graphic_10289;
        int6 = Graphic.graphic_10290;
    }
    ifSetGraphic(int4, intArg0);
    ifSetGraphic(int5, intArg1);
    ifSetGraphic(int6, intArg2);
}
