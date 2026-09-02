/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1249

function cs2_1249(intArg0: component, intArg1: component, intArg2: component): void {
    if (clientClock() < varc_177) {
        return;
    }
    let int3: number = varc_176 % 10;
    let int4: coord = -1;
    let int5: colour = colour(0x000000);

    if (int3 == 0) {
        ifSetHide(false, intArg2);
        ifSetOnTimer(noHook(""), intArg2);
        ifSetTrans(0, intArg2);
        [int4, int5] = cs2_1239(0);
        camMoveto(int4, 1000, 100, 100);
        camLookat(int4, 0, 100, 100);
        varc_177 = clientClock() + 30;
        varc_176 = varc_176 + 2;
    } else if (int3 == 2) {
        if (ifGetHide(intArg1) == 0) {
            ifSetOnTimer(hook(cs2_1252, "Ii", [intArg1, 3]), intArg1);
        }
        ifSetOnTimer(hook(cs2_1252, "Ii", [intArg2, 1]), intArg2);
        [int4, int5] = cs2_1239(1);
        cs2_1251(0, intArg0, intArg1, intArg2, int5);
        ifSetOnTimer(noHook(""), intArg0);
    }
}
