/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1620

function cs2_1620(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    intArg4 = intArg4 + clientClock();

    if (ccFind(intArg0, intArg1) == 1 || (intArg1 == -1 && ifFind(intArg0) == 1)) {
        ccSetTrans(intArg2);
        ccSetOnTimer(hook(cs2_1621, "Iiii", [intArg0, intArg1, intArg3, intArg4]));
    }
}
