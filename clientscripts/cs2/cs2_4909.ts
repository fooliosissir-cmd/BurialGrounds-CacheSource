/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4909

function cs2_4909(intArg0: coord): [number, number] {
    let int1: number = 216;
    let int2: number = 216;
    let int3: number = 127;

    if (intArg0 == -1) {
        return [0, 0];
    }
    let int4: number = coordX(intArg0);

    if (int4 > int3 || int4 < 0) {
        return [-1, -1];
    }
    let int5: number = int3 - coordZ(intArg0);

    if (int5 > 127 || int5 < 0) {
        return [-1, -1];
    }
    let int6: number = int4 * int1 / int3;
    let int7: number = int5 * int2 / int3;
    return [int6, int7];
}
