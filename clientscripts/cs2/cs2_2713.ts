/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2713

function cs2_2713(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetOnClick(noHook(""), intArg3);
    ifSetOnMouseRepeat(noHook(""), intArg3);
    ifSetOnMouseRepeat(noHook(""), intArg3);
    let int6: coord = -1;
    let int7: colour = colour(0x000000);

    if (varc_986 == 1) {
        ifSetTrans(0, intArg1);
        ifSetColour(colour(0x000000), intArg1);
        ifSetHide(false, intArg1);
        ifSetOnTimer(noHook(""), intArg1);
        ifSetOnTimer(noHook(""), intArg2);
        varc_176 = varc_176 - varc_176 % 10;
        [int6, int7] = cs2_1239(0);
        camMoveto(int6, 1000, 100, 100);
        camLookat(int6, 0, 100, 100);
        ifSetHide(false, intArg0);
        ifSetOnTimer(hook(cs2_2962, "IIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, clientClock() + 30]), intArg0);
        varc_986 = 0;
        varc_994 = 2;
    } else {
        ifSetOnCamFinished(noHook(""), intArg0);
        if (ifGetHide(intArg1) == 1) {
            ifSetTrans(255, intArg1);
            ifSetHide(false, intArg1);
        }
        ifSetColour(colour(0x000000), intArg1);
        ifSetOnTimer(hook(cs2_1253, "I", [event_com]), intArg1);
        if (ifGetHide(intArg2) == 1) {
            ifSetTrans(255, intArg2);
            ifSetHide(false, intArg2);
        }
        ifSetOnTimer(hook(cs2_1253, "I", [event_com]), intArg2);
        ifSetOnTimer(hook(cs2_2963, "IIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, clientClock() + 30]), intArg0);
        varc_986 = 1;
    }
    proc_login_resize();
}
