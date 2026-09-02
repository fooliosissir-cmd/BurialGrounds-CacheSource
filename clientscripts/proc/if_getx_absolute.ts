/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,if_getx_absolute]

function if_getx_absolute(intArg0: component): number {
    let int1: number = ifGetX(intArg0);
    let int2: component = ifGetLayer(intArg0);

    while (int2 != -1) {
        int1 = int1 + ifGetX(int2) - ifGetScrollX(int2);
        int2 = ifGetLayer(int2);
    }
    return int1;
}
