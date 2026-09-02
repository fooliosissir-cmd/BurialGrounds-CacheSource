/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,component_flash_timer]

function component_flash_timer(intArg0: component): void {
    let int1: number = 0;

    if (clientClock() % 40 > 20) {
        ifSetTrans(0, intArg0);
    } else {
        ifSetTrans(255, intArg0);
    }
}
