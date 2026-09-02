/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3141

function cs2_3141(intArg0: number, strArg0: string): void {
    if (worldListSwitch(intArg0, strArg0) == 1) {
        varc_loginscreen_pvp_warned = 0;
        cs2_3143(0, "Switched to game world " + tostring(intArg0));
    } else {
        cs2_3143(1, "Sorry, we couldn't contact world " + tostring(intArg0) + "." + "<br>" + "Please choose a different world.");
    }
    cs2_3116();
}
