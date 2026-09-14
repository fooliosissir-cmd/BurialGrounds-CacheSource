/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3099

function cs2_3099(strArg0: string, strArg1: string, intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: graphic = Graphic.set_but_end_1_0;
    let int5: graphic = Graphic.set_but_end_1_0;
    let int6: graphic = Graphic.set_but_fill_1_0;

    ifSetOnMouseLeave(hook(cs2_3071, "IdIdId", [intArg1, int4, intArg2, int6, intArg3, int5]), intArg0);
    ifSetGraphic(int4, intArg1);
    ifSetGraphic(int6, intArg2);
    ifSetGraphic(int5, intArg3);
    int4 = Graphic.set_but_end_1_1;
    int6 = Graphic.set_but_fill_1_1;
    int5 = Graphic.set_but_end_1_1;
    ifSetOnMouseOver(hook(cs2_3071, "IdIdId", [intArg1, int4, intArg2, int6, intArg3, int5]), intArg0);
    ifSetText(strArg0, Component.interface_906.component_906_262);
    ifSetOp(1, strArg1, Component.interface_906.component_906_258);
}
