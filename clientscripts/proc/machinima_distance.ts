/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,machinima_distance]

function machinima_distance(intArg0: coord, intArg1: coord): number {
    let int2: number = coordX(intArg0) - coordX(intArg1);

    if (int2 < 0) {
        int2 = int2 * -1;
    }
    let int3: number = coordZ(intArg0) - coordZ(intArg1);

    if (int3 < 0) {
        int3 = int3 * -1;
    }

    if (int2 > int3) {
        return int2;
    } else {
        return int3;
    }
}
