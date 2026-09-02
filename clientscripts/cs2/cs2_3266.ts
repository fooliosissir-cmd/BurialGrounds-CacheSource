/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3266

function cs2_3266(intArg0: number): [number, number] {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    if (intArg0 == 0 && varbit_rand_deaths != 0) {
        return [1, 0];
    }

    while (int1 < min(varbit_rand_deaths - 1, 15)) {
        int2 = int2 + (22 - int3);
        int3 = min(int3 + 3, 19);
        if (intArg0 == int2) {
            return [1, int1 + 1];
        }
        int1 = int1 + 1;
    }
    return [0, 0];
}
