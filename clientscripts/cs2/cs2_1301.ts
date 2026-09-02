/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1301

function cs2_1301(intArg0: component, intArg1: component): void {
    let int2: number = 0;

    if (getWindowMode() >= 2) {
        if (ifGetNextSubId(intArg0) == 8) {
            return;
        } else {
            ccDeleteAll(intArg0);
        }
        cs2_186(intArg0, intArg1, Graphic.graphic_8605, Graphic.graphic_8606, Graphic.graphic_8607, Graphic.graphic_8602, Graphic.graphic_8603, Graphic.graphic_8604, Graphic.graphic_8597, Graphic.graphic_8596, Graphic.graphic_8599, Graphic.graphic_8598, Graphic.graphic_8601, Graphic.graphic_8600);
    } else {
        if (ifGetNextSubId(intArg0) == 6) {
            return;
        } else {
            ccDeleteAll(intArg0);
        }
        proc_scrollbar_vertical(intArg0, intArg1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        while (int2 < ifGetNextSubId(intArg0)) {
            if (ccFind(intArg0, int2) == 1) {
                ccSetAlpha(false);
            }
            int2 = int2 + 1;
        }
    }
}
