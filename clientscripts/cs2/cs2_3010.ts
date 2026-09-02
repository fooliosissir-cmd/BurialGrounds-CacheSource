/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3010

function cs2_3010(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: number, intArg5: component, intArg6: component): void {
    let int7: graphic = Graphic.graphic_4677;
    let int8: graphic = Graphic.graphic_4678;
    let int9: graphic = Graphic.graphic_4679;
    let int10: graphic = Graphic.graphic_4680;

    ifSetSize(13, 30, 0, 0, intArg1);
    ifSetGraphic(int7, intArg1);
    ifSetSize(26, 30, 1, 0, intArg2);
    ifSetGraphic(int8, intArg2);
    ifSetSize(13, 30, 0, 0, intArg3);
    ifSetGraphic(int10, intArg3);
    ifSetGraphic(Graphic.graphic_2673, intArg5);
    ifSetSize(13, 30, 0, 0, intArg6);
    ifSetGraphic(Graphic.graphic_4679, intArg6);
    hookMouseExit(hook(cs2_4164, "IdIdIdId", [intArg1, int7, intArg2, int8, intArg6, int9, intArg3, int10]), intArg0);
    int7 = Graphic.graphic_4673;
    int8 = Graphic.graphic_4674;
    int9 = Graphic.graphic_4675;
    int10 = Graphic.graphic_4676;
    hookMouseEnter(hook(cs2_4164, "IdIdIdId", [intArg1, int7, intArg2, int8, intArg6, int9, intArg3, int10]), intArg0);
}
