/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5931

function cs2_5931(intArg0: component, intArg1: number): void {
    let int2: graphic = Graphic.graphic_9865;

    intArg1 = intArg1 + 1;

    if (intArg1 >= 50) {
        intArg1 = 0;
    }
    ifSetOnTimer(hook(cs2_5931, "Ii", [event_com, intArg1]), intArg0);

    if (intArg1 >= 25) {
        int2 = Graphic.graphic_9866;
    }
    ifSetGraphic(cs2_6267(int2), intArg0);
}
