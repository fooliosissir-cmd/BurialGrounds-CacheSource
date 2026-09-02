/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5926

function cs2_5926(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: graphic = -1;

    intArg1 = intArg1 + 1;

    if (intArg1 < 3) {
        ifSetOnTimer(hook(cs2_5926, "Iii", [event_com, intArg1, intArg2]), intArg0);
        return;
    }
    intArg1 = 0;
    intArg2 = intArg2 + 1;

    if (intArg2 >= 4 + 15) {
        intArg2 = 0;
    }

    switch (intArg2) {
        case 0:
            int3 = Graphic.graphic_9964;
            break;
        case 1:
            int3 = Graphic.graphic_9965;
            break;
        case 2:
            int3 = Graphic.graphic_9966;
            break;
        case 3:
            int3 = Graphic.graphic_9967;
            break;
        case 4:
            int3 = Graphic.graphic_9968;
            break;
        case 5:
            int3 = Graphic.graphic_9969;
            break;
        case 6:
            int3 = Graphic.graphic_9970;
            break;
        default:
            int3 = -1;
            break;
    }
    ifSetGraphic(cs2_6267(int3), intArg0);
    ifSetOnTimer(hook(cs2_5926, "Iii", [event_com, intArg1, intArg2]), intArg0);
}
