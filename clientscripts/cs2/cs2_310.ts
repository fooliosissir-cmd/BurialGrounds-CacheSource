/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_310

function cs2_310(intArg0: component, intArg1: number, strArg0: string): void {
    let int2: number = 0;
    let int3: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        [int2, int3] = [ccGetX() + ccGetHeight() + 1, ccGetY() + ccGetHeight() + 1];
        int3 = int3 - ifGetScrollY(intArg0);
        worldmap_tooltip(strArg0, int2, int3);
    }
}
