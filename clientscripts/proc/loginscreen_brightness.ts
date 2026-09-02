/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_brightness]

function loginscreen_brightness(intArg0: component, intArg1: component): void {
    let int2: number = ifGetWidth(intArg0) - ifGetWidth(intArg1);

    ifSetPosition((detailGetBrightness() - 1) * (int2 / 3), 0, 0, 0, intArg1);
}
