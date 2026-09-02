/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5889

function cs2_5889(intArg0: number): void {
    let int1: number = 0;
    let int2: component = -1;
    let int3: graphic = -1;
    let int4: graphic = -1;
    let int5: graphic = -1;
    let int6: number = -1;

    while (int1 < 13) {
        int6 = cs2_5939(int1);
        int2 = cs2_5933(int1);
        switch (int6) {
            case 0:
                int3 = Graphic.graphic_9873;
                int4 = Graphic.graphic_9874;
                int5 = Graphic.graphic_9875;
                break;
            case 1:
                int3 = Graphic.graphic_9876;
                int4 = Graphic.graphic_9877;
                int5 = Graphic.graphic_9878;
                break;
            case 2:
                int3 = Graphic.graphic_9879;
                int4 = Graphic.graphic_9880;
                int5 = Graphic.graphic_9881;
                break;
            case 3:
                int3 = Graphic.graphic_9882;
                int4 = Graphic.graphic_9883;
                int5 = Graphic.graphic_9884;
                break;
        }
        if (intArg0 == 0) {
            ifSetGraphic(int3, int2);
        } else if (intArg0 == 1) {
            ifSetGraphic(int4, int2);
        } else {
            ifSetGraphic(int5, int2);
        }
        int1 = int1 + 1;
    }
}
