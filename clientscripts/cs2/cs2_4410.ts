/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4410

function cs2_4410(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnTimer(hook(cs2_4411, "Iiii", [intArg0, intArg1, intArg2, 0]));
    }
}
