/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5816

function cs2_5816(intArg0: number, intArg1: number, intArg2: component): [number, number] {
    let int3: number = ifGetX(intArg2);
    let int4: number = ifGetY(intArg2);

    ifSetPosition(intArg0, intArg1, 0, 0, intArg2);
    return [int3, int4];
}
