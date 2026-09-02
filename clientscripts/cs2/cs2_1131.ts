/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1131

function cs2_1131(intArg0: component): void {
    if (varc_1000 > comlevelActive()) {
        ifSetText("Combat Lvl: " + tostring(comlevelActive()) + "+" + tostring(varc_1000 - comlevelActive()), intArg0);
    } else {
        ifSetText("Combat Lvl: " + tostring(comlevelActive()), intArg0);
    }
}
