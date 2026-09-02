/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1218

function cs2_1218(intArg0: component, intArg1: component): void {
    ifSetdraggable(intArg0, -1, intArg1);
    let int2: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);
    let int3: number = scale(detailGetBgsoundvol(), 127, int2);
    ifSetPosition(int3, 0, 0, 0, intArg1);
}
