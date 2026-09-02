/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5803

function cs2_5803(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: graphic = Graphic.graphic_9620;
    let int6: graphic = Graphic.graphic_9621;
    let int7: graphic = Graphic.graphic_9622;

    if (intArg3 == 1) {
        if (intArg4 == 1) {
            int5 = Graphic.graphic_9647;
            int6 = Graphic.graphic_9648;
            int7 = Graphic.graphic_9649;
        } else {
            int5 = Graphic.graphic_9623;
            int6 = Graphic.graphic_9624;
            int7 = Graphic.graphic_9625;
        }
    } else if (intArg4 == 1) {
        int5 = Graphic.graphic_9644;
        int6 = Graphic.graphic_9645;
        int7 = Graphic.graphic_9646;
    }
    ifSetGraphic(int5, intArg0);
    ifSetGraphic(int6, intArg1);
    ifSetGraphic(int7, intArg2);
}
