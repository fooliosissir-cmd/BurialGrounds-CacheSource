/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1791

function cs2_1791(intArg0: component): void {
    let int1: number = varc_270 / 60;
    let int2: number = varc_270 % 60;

    if (int2 >= 10) {
        ifSetText(tostring(int1) + "h " + tostring(int2) + "m", intArg0);
    } else {
        ifSetText(tostring(int1) + "h 0" + tostring(int2) + "m", intArg0);
    }
}
