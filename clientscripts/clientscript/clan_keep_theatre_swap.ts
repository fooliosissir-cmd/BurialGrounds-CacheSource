/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_keep_theatre_swap]

function clan_keep_theatre_swap(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg1 >= 0 && intArg1 < 40 && intArg2 >= 0 && intArg2 < 40 && ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg0, intArg2) == 1) {
        ccSetPosition(0, ccGetY<1>(), 0, 0);
        ccSetPosition<1>(0, ccGetY(), 0, 0);
    }
}
