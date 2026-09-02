/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6562

function cs2_6562(intArg0: component): void {
    let int1: number = ifGetWidth(intArg0);
    let int2: number = ifGetHeight(intArg0);
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = ifGetTrans(intArg0);

    if (int1 > 33) {
        int3 = max(33, int1 - 5);
    } else {
        int5 = 1;
        int3 = 33;
    }

    if (int2 > 48) {
        int4 = max(48, int2 - 5);
    } else {
        int6 = 1;
        int4 = 48;
    }

    if (int7 < 255) {
        ifSetTrans(min(255, int7 + 5), intArg0);
    }

    if ((int6 == 1 && int5 == 1) || int7 == 255) {
        if (ifGetGraphic(intArg0) == Graphic.graphic_9249) {
            ifSetGraphic(Graphic.graphic_9248, intArg0);
            ifSetTrans(0, intArg0);
            ifSetSize(200, 200, 0, 0, intArg0);
        } else if (ifGetGraphic(intArg0) == Graphic.graphic_9248) {
            ifSetGraphic(Graphic.graphic_9247, intArg0);
            ifSetTrans(0, intArg0);
            ifSetSize(200, 200, 0, 0, intArg0);
        } else {
            ifSetHide(true, intArg0);
            ifSetHide(false, Component.interface_1318.component_1318_4);
            ifSetHide(false, Component.interface_1318.component_1318_0);
        }
    } else {
        ifSetSize(int3, int4, 0, 0, intArg0);
    }
}
