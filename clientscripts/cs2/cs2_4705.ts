/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4705

function cs2_4705(intArg0: number): [number, number, number] {
    let int1: number = 0;
    let int2: number = intArg0 * 6 / 10;
    let int3: number = int2 / 60;

    int2 = int2 % 60;

    if (int3 > 59) {
        int1 = int3 / 60;
        int3 = int3 % 60;
    }
    return [int1, int3, int2];
}
