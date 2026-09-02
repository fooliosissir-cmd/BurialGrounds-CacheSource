/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1723

function cs2_1723(intArg0: component, intArg1: number, intArg2: graphic, intArg3: number): void {
    if (clientClock() < intArg3) {
        return;
    }

    if (ccFind(intArg0, intArg1) == 1 || (intArg1 == -1 && ifFind(intArg0) == 1)) {
        ccSetGraphic(intArg2);
        ccSetOnTimer(noHook(""));
    }
}
