/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4234

function cs2_4234(intArg0: component, intArg1: component, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: number = 65353 / intArg4;
    let int6: number = max(0, intArg4 - (clientClock() - intArg3));

    if (int6 >= intArg4 / 2 && int6 <= intArg4) {
        ifSet2dangle(min(int6 * int5, 65353), intArg2);
        ifSet2dangle(0, intArg1);
    } else if (int6 > 0 && int6 < intArg4 / 2) {
        ifSet2dangle(32768, intArg2);
        ifSet2dangle(min(32768 + int6 * int5, 65353), intArg1);
    } else {
        ifSet2dangle(32768, intArg2);
        ifSet2dangle(32768, intArg1);
        ifSetOnOpt(hook(cs2_4233, "IIIi", [intArg0, intArg1, intArg2, intArg4]), intArg0);
        ifSetOnTimer(noHook(""), intArg0);
    }
}
