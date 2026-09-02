/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1790

function cs2_1790(intArg0: component): void {
    let int1: number = scale(3, 5, varc_clanwars_countdown_timer);

    if (int1 <= 3) {
        ifSetText("<col=ff0000>" + "GET READY!" + "</col>", intArg0);
        return;
    }
    let int2: number = int1 / 60;
    int1 = int1 % 60;

    if (int1 >= 10) {
        ifSetText(tostring(int2) + "m " + tostring(int1) + "s", intArg0);
    } else {
        ifSetText(tostring(int2) + "m 0" + tostring(int1) + "s", intArg0);
    }
}
