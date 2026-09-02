/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_zoom]

function loginscreen_zoom(intArg0: component, intArg1: component): void {
    let int2: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);
    let int3: number = scale(int2, 100, varc_1971 - 170);

    ifSetPosition(int3, 0, 0, 0, intArg1);
}
