/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6516

function cs2_6516(intArg0: component): void {
    if (getWindowMode() == 1) {
        ifSetPosition(0, 0, 1, 2, intArg0);
    } else {
        ifSetPosition(0, 70, 1, 2, intArg0);
    }
}
