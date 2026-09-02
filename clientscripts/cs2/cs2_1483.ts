/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1483

function cs2_1483(intArg0: number, intArg1: component): void {
    if (clientClock() >= intArg0) {
        ifSetOnTimer(noHook(""), intArg1);
        cs2_1463(varbit_4893);
    }
}
