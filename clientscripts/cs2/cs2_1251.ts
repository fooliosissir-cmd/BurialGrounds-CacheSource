/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1251

function cs2_1251(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: colour): void {
    camMovealong(0, intArg0, ...cs2_1898(intArg0), 1, intArg0);

    if (splineLength(0) <= intArg0 + 2) {
        ifSetColour(intArg4, intArg3);
        ifSetTrans(255, intArg3);
        ifSetHide(false, intArg3);
        ifSetOnTimer(hook(cs2_1253, "I", [intArg3]), intArg3);
        ifSetOnTimer(hook(cs2_1249, "III", [intArg1, intArg2, intArg3]), intArg1);
        ifSetOnCamFinished(noHook(""), intArg1);
        if (varc_176 == 2) {
            varc_176 = varc_176 + 8 + 10 * (random(5 - 1) + 1);
        } else {
            varc_176 = varc_176 + 8;
        }
        varc_177 = clientClock() + 30;
        return;
    }
    ifSetOnCamFinished(hook(cs2_1250, "iIIIi", [intArg0 + 1, intArg1, intArg2, intArg3, intArg4]), intArg1);
}
