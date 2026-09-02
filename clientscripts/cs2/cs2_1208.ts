/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1208

function cs2_1208(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    if (intArg3 == 1) {
        ifSetScrollSize(0, intArg2 + ifGetHeight(intArg1), intArg1);
    } else {
        ifSetScrollSize(0, intArg2, intArg1);
    }
    scrollbar_resize(intArg0, intArg1, ifGetScrollY(intArg1));
}
