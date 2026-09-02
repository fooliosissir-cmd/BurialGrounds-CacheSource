/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5890

function cs2_5890(intArg0: number): void {
    let int1: component = cs2_5933(intArg0);
    let int2: number = cs2_5939(intArg0);
    let int3: graphic = -1;

    switch (int2) {
        case 1:
            int3 = Graphic.graphic_9877;
            break;
        case 2:
            int3 = Graphic.graphic_9880;
            break;
        case 3:
            int3 = Graphic.graphic_9883;
            break;
        default:
            int3 = Graphic.graphic_9874;
            break;
    }
    ifSetGraphic(int3, int1);
}
