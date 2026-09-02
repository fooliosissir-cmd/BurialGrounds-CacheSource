/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2116

function cs2_2116(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg3);
    ifSetText("", intArg4);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = (ifGetWidth(intArg0) - 320) / 3;

    while (int5 < invSize(307)) {
        if (invGetNum(307, int5) > 0) {
            cs2_2117(int5, int6, int7, intArg0, intArg3, intArg4);
            int6 = int6 + 1;
        } else {
            cs2_2118(int5, intArg0);
        }
        int5 = int5 + 1;
    }
    int5 = int7 + (int6 + 1) / 2 * (int7 + 64);
    ifSetScrollPos(0, 0, intArg0);

    if (int5 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, int5, intArg0);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        ifSetPosition(392, ifGetY(intArg4), 0, 0, intArg4);
        ifSetPosition(392, ifGetY(intArg3), 0, 0, intArg3);
        ifSetHide(false, intArg2);
    } else {
        ifSetScrollSize(0, 0, intArg0);
        ccDeleteAll(intArg1);
        ifSetPosition(384, ifGetY(intArg3), 0, 0, intArg3);
        ifSetPosition(384, ifGetY(intArg4), 0, 0, intArg4);
        ifSetHide(true, intArg2);
    }
}
