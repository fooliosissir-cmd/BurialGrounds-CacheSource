/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3098

function cs2_3098(strArg0: string, strArg1: string, intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number): void {
    let int5: graphic = Graphic.set_but_end_1_0;
    let int6: graphic = Graphic.set_but_end_1_0;
    let int7: graphic = Graphic.set_but_fill_1_0;

    hookMouseExit(hook(cs2_3071, "IdIdId", [intArg1, int5, intArg2, int7, intArg3, int6]), intArg0);
    ifSetGraphic(int5, intArg1);
    ifSetGraphic(int7, intArg2);
    ifSetGraphic(int6, intArg3);
    int5 = Graphic.set_but_end_1_1;
    int6 = Graphic.set_but_end_1_1;
    int7 = Graphic.set_but_fill_1_1;
    hookMouseEnter(hook(cs2_3071, "IdIdId", [intArg1, int5, intArg2, int7, intArg3, int6]), intArg0);
    ifSetText(strArg0, Component.interface_906.component_906_257);
    ifSetOp(1, strArg1, Component.interface_906.component_906_253);
}
