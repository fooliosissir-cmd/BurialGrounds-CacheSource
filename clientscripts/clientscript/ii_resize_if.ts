/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_resize_if]

function ii_resize_if(intArg0: boolean, intArg1: number, intArg2: number, intArg3: number, intArg4: component): void {
    let int5: number = 10;

    intArg3 = intArg3 + 1;

    if (intArg0 == false) {
        ifSetSize(ifGetWidth(intArg4), intArg1 + intArg2 * (int5 - intArg3) / int5, 0, 0, intArg4);
    } else {
        ifSetSize(ifGetWidth(intArg4), intArg1 + intArg2 * intArg3 / int5, 0, 0, intArg4);
    }

    if (intArg3 == int5) {
        ifSetOnTimer(noHook(""), intArg4);
    } else {
        ifSetOnTimer(hook(ii_resize_if, "1iiiI", [intArg0, intArg1, intArg2, intArg3, intArg4]), intArg4);
    }
}
