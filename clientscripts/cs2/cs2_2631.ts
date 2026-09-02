/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2631

function cs2_2631(intArg0: component, intArg1: graphic, intArg2: graphic): void {
    if (clientClock() % 20 < 10) {
        ifSetGraphic(intArg2, intArg0);
    } else {
        ifSetGraphic(intArg1, intArg0);
    }
}
