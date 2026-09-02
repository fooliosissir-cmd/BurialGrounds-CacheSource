/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5264

function cs2_5264(intArg0: component, intArg1: component): void {
    ifSetSize(stringWidth(tostring(cs2_5255()) + " / " + tostring(cs2_5255()), Graphic.p12_full), ifGetHeight(intArg0), 0, 0, intArg0);
    let int2: number = 190;
    let int3: number = 8;
    let int4: number = ifGetWidth(intArg0) + ifGetWidth(intArg1) + int3;
    let int5: number = (int2 - int4) / 2;
    ifSetPosition(int5, ifGetY(intArg1), 0, 0, intArg1);
    int5 = int5 + ifGetWidth(intArg1) + int3;
    ifSetPosition(int5, ifGetY(intArg0), 0, 0, intArg0);
}
