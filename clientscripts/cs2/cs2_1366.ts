/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1366

function cs2_1366(intArg0: component, intArg1: component): void {
    if (varp_castlewars_timer == 25) {
        ifSetText("Time until next game starts: 0", intArg0);
        ifSetHide(true, intArg1);
    } else if (varp_castlewars_timer > 0) {
        ifSetText("Time until next game starts: " + tostring(varp_castlewars_timer), intArg0);
        if (varp_castlewars_timer <= 15 && varp_castlewars_timer >= 6) {
            ifSetHide(false, intArg1);
        } else {
            ifSetHide(true, intArg1);
        }
    } else {
        ifSetText("Waiting for players to join the other team.", intArg0);
        ifSetHide(true, intArg1);
    }
}
