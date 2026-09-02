/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,machinima_inarea]

function machinima_inarea(intArg0: coord, intArg1: coord, intArg2: coord): number {
    let int3: number = coordX(intArg1);
    let int4: number = coordX(intArg2);
    let int5: number = coordZ(intArg1);
    let int6: number = coordZ(intArg2);
    let int7: number = coordX(intArg0);
    let int8: number = coordZ(intArg0);

    if (int7 <= int4 && int7 >= int3 && int8 <= int6 && int8 >= int5) {
        return 1;
    }
    return 0;
}
