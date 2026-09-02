/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3265

function cs2_3265(): number {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    while (int0 < min(varbit_rand_deaths, 15)) {
        int1 = int1 + (22 - int2);
        int2 = min(int2 + 3, 19);
        int0 = int0 + 1;
    }
    return int1;
}
