/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6048

function cs2_6048(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = ifGetTrans(intArg0);

    if (intArg1 == 0) {
        int3 = max(0, int3 - 20);
        if (int3 == 0) {
            intArg1 = -1;
            intArg2 = 0;
        }
    } else if (intArg1 == 1) {
        int3 = min(255, int3 + 20);
        if (int3 == 255) {
            if (ifGetGraphic(intArg0) == Graphic.graphic_10245) {
                ifSetGraphic(cs2_6267(Graphic.graphic_10246), intArg0);
            } else {
                ifSetGraphic(cs2_6267(Graphic.graphic_10245), intArg0);
            }
            intArg1 = 0;
        }
    } else {
        intArg2 = intArg2 + 1;
        if (intArg2 >= 20) {
            intArg1 = 1;
            intArg2 = 0;
        }
    }
    ifSetOnTimer(hook(cs2_6048, "Iii", [event_com, intArg1, intArg2]), intArg0);
    ifSetTrans(int3, intArg0);
}
