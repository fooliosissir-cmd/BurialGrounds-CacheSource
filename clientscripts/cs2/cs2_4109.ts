/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4109

function cs2_4109(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    let int6: number = ifGetWidth(intArg5);

    intArg0 = max(min(intArg0, ifGetWidth(intArg4) - int6), 0);
    let int7: number = ifGetX(intArg4);
    ifSetSize(int7 + intArg0, 0, 0, 1, intArg2);
    ifSetSize(int7 + intArg0 + int6, 0, 1, 1, intArg3);
    ifSetPosition(intArg0, 0, 0, 1, intArg5);
}
