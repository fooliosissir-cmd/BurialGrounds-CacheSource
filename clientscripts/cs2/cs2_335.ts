/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_335

function cs2_335(intArg0: number, intArg1: number, intArg2: number, intArg3: number): [number, number] {
    let int4: number = cs2_338(intArg3);
    let int5: number = intArg2 * 1000 / int4;
    let int6: number = intArg2 - int5;

    return [intArg0 + int5, intArg1 + int6];
}
