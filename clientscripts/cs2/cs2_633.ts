/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_633

function cs2_633(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = ifGetTrans(intArg0) + intArg3;

    ifSetTrans(int4, intArg0);

    if (int4 >= intArg2) {
        ifSetOnTimer(hook(cs2_634, "Iiii", [intArg0, intArg1, intArg2, intArg3]), intArg0);
    }
}
