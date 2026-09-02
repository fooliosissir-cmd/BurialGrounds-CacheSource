/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_422

function cs2_422(intArg0: number, intArg1: number): [number, number] {
    let int2: number = 5;
    let int3: number = 5;

    if (intArg0 <= int2 || intArg1 <= int3) {
        return [int2, int3];
    }

    if (intArg0 > intArg1) {
        int2 = int2 * (intArg0 / intArg1);
    } else if (intArg1 > intArg0) {
        int3 = int3 * (intArg1 / intArg0);
    }
    return [int2, int3];
}
