/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2106

function cs2_2106(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    intArg4 = max(min(intArg4 + randominc(1) - randominc(1), 5), -5);
    intArg5 = max(min(intArg5 + randominc(1) - randominc(1), 5), -5);
    ifSetPosition(intArg2 + intArg4, intArg3 + intArg5, 0, 0, intArg1);
    ifSetOnTimer(hook(cs2_2106, "IIiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5]), intArg0);
}
